import json from "express";   
import bcrypt from "bcryptjs";
import user from "../model/user.js";



export const getAllUser=async(req,res,next)=>{
    let users; 
    try{
        users=await user.find();
    }catch(err){
        console.log(err);
    }if (!users){
        return res.status(404).json({message:"No users found"})  
      }
    return res.status(200).json({users});
    };


    export const signup=async(req,res,next)=>{
        const{name,email,password}=req.body;
        let existingUser;
        try{
            existingUser=await user.findOne({email})
        }
        catch(err){
            console.log(err)
        };
        if(existingUser){
            return res.status(400).json({message:"user already exists!login instead"});
        };

        const hashedpassword= bcrypt.hashSync(password);

        const User = new user({
            name,
            email,
            password : hashedpassword
        });


         
        try{
           await user.save();
        }
        catch(err){
        console.log(err)};
     return res.status(201).json({User})
    };

   export const login = async(req,res,next)=>{ 
    const{email,password}=req.body;
    let existingUser;
        try{
            existingUser=await user.findOne({email})
        }
        catch(err){
            console.log(err)

        }
        if(!existingUser){
            return res.status(404).json({message:"could not find the user by this email "});

        }
        const isPasswordCorect= bcrypt.compareSync(password, existingUser.password);
        if(!isPasswordCorect){
            return res.status(400).json({message:"incorrect password "});
        }
        return res.status(200).json({message:"login successfully"});
    }


        
        

