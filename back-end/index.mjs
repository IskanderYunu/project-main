import express from "express";
import mongoose from "mongoose";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// import conn.mjs so that I connect to my db
import db from "./db/conn.mjs";
dotenv.config();

const PORT = process.env.PORT || 5000;

// create app
const app = express();

// middleware
app.use(logger("dev")); // log requests to the console

// create connection to db using mongoose and db connection string from conn.mjs file
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("<h1>YouTube Loader API </h1><ul> endpoints: <li> todos</li> </ul>");
});

//fill in my endpoints routes - but they will be in their own folders

// default, cath-all route
app.get("/*", (req, res) => {
  res.redirect("/");
});

//GLOBAL ERROR HANDLER after the routes
app.use((err, _req, res, next) => {
  res.status(500).send("There was an issue on the server :(");
});

//Starting the server
app.listen(PORT, () => {
  console.log(`Server is ALIVE! Port: ${PORT}`);
});
