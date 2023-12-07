const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    }
});

const vehicleModel = mongoose.model("vehicles", vehicleSchema);
module.exports = vehicleModel;