const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    pickupLocation: {
        type: String,
        required: true,
    },
    dropLocation: {
        type: String,
        required: true,
    },
    routeName: {
        type: String,
        required: true,
    },
    fare: {
        type: Number,
        required: true,
    },
});

const routeModel = mongoose.model("routes", routeSchema);
module.exports = routeModel;