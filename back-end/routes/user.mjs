import express from "express";
const router = express.Router();
import entryController from "../controllers/user.mjs";

//seed route 
//!!! will need to be take out for deployment

router.get("/seed", entryController.seed);

//index route
//***  get  /Users
//NOTE: 

//Gets all the entries
router.get("/", entryController.getEntries);

//Post new user
//GET /Users/new
//EDIT User
//DELETE User


export default router;