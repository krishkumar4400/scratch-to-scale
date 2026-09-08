import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere"
import env from "../config/env.js";

const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: env.GOOGLE_API_KEY
});


const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
});


const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
});

export {
    geminiModel, mistralModel, cohereModel
}
