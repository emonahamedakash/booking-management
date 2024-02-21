require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const bookingRoute = require("./routes/booking.route.js")


const app = express();

//Connecting to db
const mongodbUri = process.env.MONGODB_URI;
// mongoose.set("strictQuery", false);
// mongoose.connect(mongodbUri, (err) => {
//   if (err) {
//     console.log("Database connect Error...!");
//   } else {
//     console.log("Connected to Database...");
//   }
// });
mongoose.connect(mongodbUri).then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("Error")
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("<h1>Welcome to backend</h1>");
})
app.use("/api", bookingRoute);

module.exports = app;