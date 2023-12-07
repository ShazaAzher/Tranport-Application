require("dotenv").config();
const cors = require("cors");
const { checkAuth, restrictTo } = require("./middlewares/auth")
const express = require("express");
const connectDB = require("./connectDB");
const Vehicle = require("./models/vehicles");
const Booking = require("./models/bookings");
const Routes = require("./models/routes");
const Drivers = require("./models/drivers");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB()
app.use(cors({
    origin: "http://localhost:5173", //front-end url
    credentials: true,
    optionSuccessStatus: 200}
));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(checkAuth)

const userRouter = require("./routes/users");
app.use("/user", restrictTo(['customer']), userRouter);
const baseRouter = require("./routes/base");
app.use("/", baseRouter);
const adminRouter = require("./routes/admins");
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
    res.json("Hello")
});

app.get('/getVehicles', async (req, res) => {
    try {
        const category = req.query.category;
        console.log(category)
        const filter = {}
        if(category) {filter.category = category;}
        const data = await Vehicle.find(filter);
        res.json(data)
    } catch (error) {
        console.log(error);
    }
});

app.get('/getVehicles/:_id', async (req, res) => {
    try {
        const idParam = req.params._id;
        const data = await Vehicle.findOne({_id : idParam});
        res.json(data)
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {console.log(`Server Running on Port: ${PORT}`)});