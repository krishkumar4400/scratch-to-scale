import { ChatMistralAI } from "@langchain/mistralai";
import { ChatGoogle } from "@langchain/google";
import { Cohere } from "@langchain/cohere"
import env from "../../config/env.js";

const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
});


const geminiModel = new ChatGoogle({
    model: "gemini-2.5-flash-lite",
    apiKey: env.GOOGLE_API_KEY
});

const cohereModel = new Cohere({
    model: "command-a-plus-05-2026",
    apiKey: env.COHERE_API_KEY
});

export {
    mistralModel,
    geminiModel,
    cohereModel
};
