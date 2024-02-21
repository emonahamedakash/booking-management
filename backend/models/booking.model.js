const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    requestedBy:{
        type: String,
        required: true
    },
    handling: {
        type: String,
        required: true
    },
    hotel:{
        type:String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    leadPax: {
        type: String,
        required: true
    },
    supplier:{
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: true
    }
});

const bookingModel = mongoose.model("Bookings", bookingSchema);

module.exports = bookingModel;