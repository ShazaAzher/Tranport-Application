const express = require("express");
const router = express.Router();
const {v4: uuidv4} = require("uuid");
const User = require("../models/users");
const {setEmail} = require("../service/auth")

router.post("/register", async(req, res)=>{
    const data = {
        email: req.body.email,
        password: req.body.password,
        fName: req.body.fName,
        lName: req.body.lName,
        userType: "customer"
    }
    try {
        const check = await User.findOne({email:data.email})
        // Check if email already exists in db
        if(check){
            res.json("exist");
        } else {
            res.json("notExist");
            await User.insertMany([data]);
        }
    } catch (error) {
        console.log(error)
        res.json("notExist");
    }
})

router.post("/login", async(req, res)=>{
    
    const email = req.body.email;
    const password = req.body.password;
    try {
        const check = await User.findOne({email:email})
        // Check if email exists in db
        if(check){
            // Check if password matches email
            if(check.password===password){
                // Create session cookie
                const token = setEmail(email);
                res.cookie("uid", token)
                // Check if user is admin or not
                if(check.userType==="admin"){
                    res.json("existA");
                } else {
                    res.json("exist");
                }
            } else {
                res.json("notPass");
            }
        } else {
            res.json("notExist");
        }
    } catch (error) {
        console.log(error)
        res.json("notExist");
    }
})

module.exports = router;