//Controller is used for functionality

import { USERS } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export const userSignup = async (req, res) => {
  //req comes from frontend and res comes from backend
  const { name, email, password, contact } = req.body;
  // res.send({name , email , password , contact})
  try {
  if (!name || !email || !password || !contact) {
    return res
      .status(401)
      .json({ success: false, message: "All field required", status: 401 });
  }

  const saltVal = 10; //Kitni baar ghumana chata hu
  const hashedPassword = await bcrypt.hash(password, saltVal);

  // res.send(hashedPassword)
  const user = new USERS({
    name,
    email,
    password: hashedPassword,
    contact,
  });
  await user.save();

  const token = await jwt.sign({
    username: user.name,
    password: user.password,
    email: user.email,
  },process.env.SECRET_KEY,{expiresIn: 60*15});

//   return res
//     .status(200)
//     .json({ success: true, message: "user saved successfully", status: 200 });

  return res.send(token)
} catch(err){
  if (err.code === 11000) {
    // 11000 is MongoDB's duplicate key error code
    return res.status(409).json({ message: "Email or Contact already exists", status:409 });
  }
  return res.status(500).json({ message: "Server error" });
}

};

export const getAllUserData = async (req, res) => {
  const data = await USERS.find();
  return res.status(200).json({ success: true, message: "Data Found", data }); //To access the data variable above just write data
};

export const login = async (req, res) => {
  const { email, password } = req.body; 
  // const { email, password, token } = req.body;
  if (!email || !password)
    return res
      .status(401)
      .json({ success: false, message: "All field required", status: 401 });

  const data = await USERS.findOne({ email });

  if (!data) {
    return res
      .status(404)
      .json({ success: false, message: "user not found", status: 404 });
  }

  const isMatch = await bcrypt.compare(password, data.password);
  if (!isMatch) {
    return res
      .status(409)
      .json({ success: false, message: "incorrect password", status: 409 });
  }

  // const isVerified = await jwt.verify(token,process.env.SECRET_KEY)

  // if (!isVerified) {
  //   return res
  //     .status(409)
  //     .json({ success: false, message: "Invalid token sign again", status: 409 });
  // }
//   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJhbWVzaCIsInBhc3N3b3JkIjoiJDJiJDEwJGt2MkIxNTlvUUJMMlBGaUJpTmZSTU9TdEFUUVZGZlpuUXlrMjczUlNGVnNmNlNqN29GL0VhIiwiZW1haWwiOiJyYW1lc2hAZ21haWwuY29tIiwiaWF0IjoxNzQ2OTY3NjU1LCJleHAiOjE3NDY5Njg1NTV9.dROvmIPs9bZCjSGe9FuQFjrN7sVQO-duS_5uyB-3qoQ

  return res.status(200).json({ success: true, message: "user found", data });
};

export const updateUserData = async (req, res) => {
  const { email, name } = req.body;

  const user = await USERS.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ success: false, status: 404, message: "user not found" });
  }
  user.name = name;

  await user.save();

  return res
    .status(200)
    .json({ success: true, status: 200, message: "user updated" });
};

// export const updateUserData = async(req,res)=>{
//     const { email, name } = req.body

//     const user = await USERS.findOneAndUpdate({email},{$set: {name: name}})

//     user.save()

//     return res.status(200).json({success:true, status:200,message:'user updated'})
// }

export const deleteUserData = async (req, res) => {
  const { email } = req.params;

  await USERS.findOneAndDelete({ email });

  return res
    .status(200)
    .json({ success: true, staus: 200, message: "user deleted" });
};
