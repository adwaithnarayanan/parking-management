import express from "express";
// import dotenv from "dotenv";

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/**
 * npm run dev => after project build
 */