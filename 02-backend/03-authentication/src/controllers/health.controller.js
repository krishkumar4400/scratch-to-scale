const healthCheck = (_req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "Server is healthy",
  });
};

export { healthCheck };
