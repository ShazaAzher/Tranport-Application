const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    available : {
        type: String,
        required: true
    }
});

const driverModel = mongoose.model("drivers", driverSchema);
module.exports = driverModel;