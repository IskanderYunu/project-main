import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.MONGO_URL;
const db = mongoose.connect;

mongoose.connect(mongoURL);
mongoose.connection.once("open", () => {
  console.log("DB connected");
});
export default db;
