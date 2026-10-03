import { StateSchema, MessagesValue, type GraphNode, StateGraph, START, END } from "@langchain/langgraph";
import { createAgent } from "langchain";

const State = new StateSchema({
    messages: MessagesValue,
});


