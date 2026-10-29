import type { Request, Response } from "express";
import recommendCatService from "../services/recommend.service.js";

type Body = {
  kidsFriendly: boolean;
  appartmentFriendly: boolean;
};

const recommendCatController = async (req: Request, res: Response) => {
  try {
    const { kidsFriendly, appartmentFriendly }: Body = req.body;

    const response = await recommendCatService({
      kidsFriendly,
      appartmentFriendly,
    });

    if (!response) {
      return res.status(400).json({
        message: "Failed to recommend cat by AI",
        success: false,
      });
    }

    const parsedResponse = JSON.parse(response);
    console.log(parsedResponse);

    return res.status(200).json({
      success: true,
      count: parsedResponse.recommendations.length,
      data: parsedResponse,
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
      message: "Failed to give cat recommendation",
      success: false,
      name: "server error",
    });
  }
};

export default recommendCatController;
