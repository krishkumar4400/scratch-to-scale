import type { Request, Response } from "express";
import generateResponse from "../services/ai.service.js";

type Body = { prompt: string };

const aksAIController = async (req: Request, res: Response) => {
  try {
    const { prompt }: Body = req.body;
    const response = await generateResponse(prompt);
    console.log(response);
    return res.status(201).json({
      message: "AI Responded",
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
        success: false,
        name: error.name,
      });
    }
    return res.status(500).json({
      message: "Failed to generate AI response",
      success: false,
      name: "server error",
    });
  }
};

export { aksAIController };
