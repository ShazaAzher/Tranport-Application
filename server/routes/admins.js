const express = require("express");
const router = express.Router();
const {v4: uuidv4} = require("uuid");
const User = require("../models/users");
const Driver = require("../models/drivers");
const {setEmail} = require("../service/auth");
const Vehicle = require("../models/vehicles");

router.post("/adminadd", async(req, res)=>{
    const data = {
        email: req.body.email,
        password: req.body.password,
        fName: req.body.fName,
        lName: req.body.lName,
        userType: "admin"
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

router.get("/getDrivers", async (req, res) => {
    try {
        const data = await Driver.find({});
        res.json(data)
    } catch (error) {
        console.log(error);
    }
});

router.post("/addCar", async(req, res)=>{
    const data = {
        model: req.body.model,
        thumbnail: req.body.thumbnail,
        category: req.body.category,
        available: 1
    }
    try {
        await Vehicle.insertMany([data])
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;