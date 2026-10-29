import catsModel from "../models/cats.model.js";
import type { ICats } from "../types/cats.types.js";

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

// create cat service
const createCatService = async (payload: Cats): Promise<ICats | null> => {
  try {
    const cat: ICats | null = await catsModel.create(payload);
    if (!cat) {
      return null;
    }
    return cat;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create a cat");
  }
};

// get all cats service
const getAllCatsService = async (): Promise<ICats[] | null> => {
  try {
    const cats: ICats[] | [] = await catsModel.find();
    if (cats.length === 0) {
      return null;
    }

    return cats;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create a cat");
  }
};

// get single cat service
const getCatById = async (catId: string): Promise<ICats | null> => {
  try {
    const cat: ICats | null = await catsModel.findById(catId);
    if (!cat) {
      return null;
    }

    return cat;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create a cat");
  }
};

// search cats service
const searchCatsService = async (query: string): Promise<ICats[] | null> => {
  try {
    const cats = await catsModel.find({
      $or: [
        {
          name: {
            $regex: query,
            $options: "i",
          },
        },
        {
          breed: {
            $regex: query,
            $options: "i",
          },
        },
        {
          decsription: {
            $regex: query,
            $options: "i",
          },
        },
      ],
    });

    if (cats.length === 0) {
      return null;
    }
    return cats;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create a cat");
  }
};

// recommend cats service
const recommendCatsService = async (
  kidsFriendly: boolean,
  appartmentFriendly: boolean,
): Promise<ICats[] | null> => {
  try {
    const cats = await catsModel.find({
      kidsFriendly,
      appartmentFriendly,
    });

    if (cats.length === 0) {
      return null;
    }
    return cats;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create a cat");
  }
};

export {
  createCatService,
  getAllCatsService,
  getCatById,
  searchCatsService,
  recommendCatsService,
};
