import { HumanMessage } from "@langchain/core/messages";
import { StateSchema, MessagesValue, ReducedValue, StateGraph, START, END, type GraphNode } from "@langchain/langgraph";
// import type { GraphNode } from "@langchain/langgraph";
import * as z from 'zod';
import { cohereModel, geminiModel, mistralModel } from "./models.service.js";
import { createAgent, providerStrategy } from 'langchain';

const State = new StateSchema({
    messages: MessagesValue,
    solution_1: new ReducedValue(z.string().default(""), {
        reducer: (current, next) => {
            return next;
        }
    }),

    solution_2: new ReducedValue(z.string().default(""), {
        reducer: (current, next) => {
            return next;
        }
    }),

    judge_recommnedation: new ReducedValue(z.object().default({
        solution_1_score: 0,
        solution_2_score: 0,
    }), {
        reducer: (current, next) => {
            return next;
        }
    }),
});

const solutionNode: GraphNode<typeof State> = async (state: typeof State) => {
    // console.log(state.messages);
    const [mistral_solution, cohere_solution] = await Promise.all([
        mistralModel.invoke(state.messages[0].text),
        cohereModel.invoke(state.messages[0].text),
    ]);

    return {
        solution_1: mistral_solution.text,
        solution_2: cohere_solution.text
    };
}

const judgeNode: GraphNode<typeof State> = async (state: typeof State) => {
    const { solution_1, solution_2 } = state;

    const judge = createAgent({
        model: geminiModel,
        tools: [],
        responseFormat: providerStrategy(z.object({
            solution_1_score: z.number().min(0).max(10),
            solution_2_score: z.number().min(0).max(10)
        }))
    });

    const judgeResponse = await judge.invoke({
        messages: [
            new HumanMessage(`You are a judge that will evaluate two solutions to a problem. You have to judge the following two solutions for the question: ${state.messages[0].text}. The first solution is: ${solution_1}. The second solution is: ${solution_2}. Please provide a score for each solution between 0 and 10, where 0 is the worst and 10 is the best. Return your response in the following JSON format: {"solution_1_score": <score>, "solution_2_score": <score>}`)
        ]
    });

    const result = judgeResponse.structuredResponse;

    return {
        judge_recommnedation: result
    };

}

const graph = new StateGraph(State)
.addNode("solution", solutionNode)
.addNode("judge", judgeNode)
.addEdge(START, "solution")
.addEdge("solution", "judge")
.addEdge("judge", END)
.compile();

export default async function useGraph(userMessage: string) {
    const result = await graph.invoke({
        messages: [
            new HumanMessage(userMessage)
        ]
    });
    console.log(result);
    return result.messages;
}
