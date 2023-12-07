const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    driverName: {
        type: String,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    routeName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    fare: {
        type: Number,
        required: true,
    },
})

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;