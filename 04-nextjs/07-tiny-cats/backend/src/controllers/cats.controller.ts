import type { Request, Response } from "express";
import {
  createCatService,
  getAllCatsService,
  getCatById,
  recommendCatsService,
  searchCatsService,
} from "../services/cats.service.js";
import catsModel from "../models/cats.model.js";

interface Cats {
  name: string;
  breed: string;
  decsription: string;
  energyLevel: string;
  lifeSpan: number;
  kidsFriendly: boolean;
  appartmentFriendly: boolean;
  image: string;
  color: string;
}

const createCatController = async (req: Request, res: Response) => {
  try {
    const {
      name,
      decsription,
      breed,
      appartmentFriendly,
      color,
      energyLevel,
      image,
      kidsFriendly,
      lifeSpan,
    }: Cats = req.body;

    const response = await createCatService({
      name,
      decsription,
      breed,
      appartmentFriendly,
      color,
      energyLevel,
      image,
      kidsFriendly,
      lifeSpan,
    });

    if (!response) {
      return res.status(400).json({
        message: "Failed to create a cat",
        success: false,
      });
    }
    return res.status(201).json({
      message: "Cat created successfully",
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
      message: "Failed to create a cat",
      success: false,
    });
  }
};

const getAllCatsController = async (req: Request, res: Response) => {
  try {
    const response = await getAllCatsService();

    if (!response) {
      return res.status(404).json({
        message: "No cats available",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Cats fetched successfully",
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
      message: "Failed get all cat",
      success: false,
    });
  }
};

const getCatByIdController = async (req: Request, res: Response) => {
  try {
    const catId = req.params.id as string;
    const response = await getCatById(catId);

    if (!response) {
      return res.status(404).json({
        message: "Cat not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Cat fetched successfully",
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
      message: "Failed cat by id",
      success: false,
    });
  }
};

const searchCatsController = async (req: Request, res: Response) => {
  try {
    const query: string = req.query.query as string;

    const response = await searchCatsService(query);

    if (!response) {
      return res.status(404).json({
        message: "Cat not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Cat fetched successfully",
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
      message: "Failed search cat",
      success: false,
    });
  }
};

const recommendCatsController = async (req: Request, res: Response) => {
  try {
    const { kidsFriendly, appartmentFriendly } = req.body;

    const response = await recommendCatsService(
      kidsFriendly,
      appartmentFriendly,
    );

    if (!response) {
      return res.status(404).json({
        message: "Cat not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Cat recommendations",
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
      message: "Failed rexommend cat",
      success: false,
    });
  }
};

export {
  createCatController,
  getAllCatsController,
  getCatByIdController,
  searchCatsController,
  recommendCatsController,
};
