import express from "express";
import mongoose from "mongoose";
import router from "./route/user-routes.js";


const app=express();
app.use(express.json());
app.use("/api/user", router);    



mongoose.connect("mongodb+srv://gladyschepkoech408:gladys1@cluster0.h1zxbu4.mongodb.net/healthtech?retryWrites=true&w=majority"
).then(() => app.listen(5000)).then(() => console.log("connected successfully")
).catch((err) => console.log(err));