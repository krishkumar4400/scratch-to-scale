import type { Request, Response } from "express";
import { getMCPClient } from "../services/mcp.service.js";
import generateResponse from "../services/ai.service.js";

const testMCPController = async (req: Request, res: Response) => {
  try {
    const client = await getMCPClient();

    const tools = await client.listTools();

    return res.json({
      success: true,
      tools,
    });
  } catch (error) {
    console.log(error);
  }
};

const recommendCats = async (req: Request, res: Response) => {
  try {
    const { kidsFriendly, appartmentFriendly } = req.body;

    const client = await getMCPClient();

    const result = await client.callTool({
      name: "recommend_cats",
      arguments: {
        kidsFriendly,
        appartmentFriendly,
      },
    });

    const catsData = result.content[0].text;
    console.log(catsData);

    const prompt = `
    Recommend best cats from this data:

    user need:
    kids friendly: ${kidsFriendly}
    appartment friendly: ${appartmentFriendly}

    Available Cats Data:
    ${catsData}
    `;

    const aiResponse = await generateResponse(prompt);

    return res.status(200).json({
      message: "Recommended cats",
      success: true,
      data: aiResponse,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCats = async (req: Request, res: Response) => {
  try {
    const client = await getMCPClient();

    const result = await client.callTool({
      name: "get_all_cats",
    });

    console.log(JSON.parse(result.content[0].text));

    return res.status(200).json({
      message: "All cats",
      success: true,
      data: JSON.parse(result.content[0].text),
    });
  } catch (error) {
    console.log(error);
  }
};

export { testMCPController, recommendCats, getAllCats };
