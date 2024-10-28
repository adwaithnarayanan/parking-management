import asyncHandler from "express-async-handler";

const postDevice = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Success!!" });
});

export { postDevice };
