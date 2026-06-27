import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";

export const healthCheck = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, {}, "Server is running"));
});
