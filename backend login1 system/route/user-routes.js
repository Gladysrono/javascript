import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller.js";



// import(getAllUser)
const router=express.Router();

router.get("/view" ,getAllUser);
router.post("/signup",signup);
router.post("/login", login);
export default router; 