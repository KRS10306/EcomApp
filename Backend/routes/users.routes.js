//to add routes

import express from "express";
import { deleteUserData, getAllUserData, login, updateUserData, userSignup } from "../controller/user.controller.js";

export const router = express.Router()

router.post('/signup', userSignup)

router.get('/get',getAllUserData)

router.post('/login',login)

router.put('/update', updateUserData)

router.delete("/delete/:email",deleteUserData)


//payload --> data sent by the user(frontend)