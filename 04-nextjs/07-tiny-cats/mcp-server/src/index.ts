import { McpServer } from "@modelcontextprotocol/server";
import {
  serveStdio,
  StdioServerTransport,
} from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import {
  getAllCatsTool,
  recommendCatsTool,
} from "./tools/recommend-cats.tool.js";

// Build a server instance and register its tools. serveStdio calls this
// whenever it needs an instance, so every call must return a fresh one.

const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

server.registerTool(
  "recommend_cats",
  {
    title: "recommend_cats",
    description: "Recommend a best cat breed according to inputs",
    inputSchema: {
      kidsFriendly: z.boolean(),
      appartmentFriendly: z.boolean(),
    },
  },
  async ({ kidsFriendly, appartmentFriendly }) => {
    const result = await recommendCatsTool(kidsFriendly, appartmentFriendly);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  },
);

server.registerTool(
  "get_all_cats",
  {
    title: "get_all_cats",
    description: "Get all the cats from the database",
  },
  async () => {
    const result = await getAllCatsTool();

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  },
);

const transporter = new StdioServerTransport();
await server.connect(transporter);

console.error("Tiny cats MCP running");

export default server;