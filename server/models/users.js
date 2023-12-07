const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userType : {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;