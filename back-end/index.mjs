import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db/conn.mjs";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is ALIVE! thanks to my classmates :3 ${PORT}`);
});
