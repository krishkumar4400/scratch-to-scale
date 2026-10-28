
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateAIContent = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: prompt,
  });

  return response.text;
};

export default generateAIContent;
