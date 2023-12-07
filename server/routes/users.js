const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Vehicle = require("../models/vehicles");
const Booking = require("../models/bookings");

router.get('/getUsers', async (req, res) => {
    try {
        const data = await User.find({});
        res.json(data)
    } catch (error) {
        console.log(error);
    }
});

router.get('/getBookings/:_id', async (req, res) => {
    try {
        const idParam = req.params._id;
        const data = await Booking.findOne({customerID : idParam});
        res.json(data)
    } catch (error) {
        console.log(error);
    }
});

router.get('/home', async (req, res) => {
    
});

module.exports = router;