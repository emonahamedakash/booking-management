const mongoose = require("mongoose");
const bookingModel = require("../models/booking.model")

//Show all trains
exports.getBooking = async (req, res) => {
  const bookings = await bookingModel.find();
  res.status(200);
  res.send(bookings);
};

//Create booking
exports.addBooking = async (req, res) => {
    const bookings = await bookingModel.find();
    let length = bookings.length;
    const newBooking = new bookingModel({
      id: length + 1,
      date: req.body.date,
      requestedBy: req.body.requestedBy,
      handling: req.body.handling,
      hotel: req.body.hotel,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      leadPax: req.body.leadPax,
      supplier: req.body.supplier,
      remarks: "Asked for availability",
    });
    // trains.push(newTrain);
    // newBooking.save((err, result) => {
    //   if (err) {
    //     console.log(err);
    //     res.status(500);
    //   } else {
    //     res
    //       .status(201)
    //       .json({ success: true, message: "Booking added Successfully", result });
    //     // res.send("<h1>Train Added Successfully✅</h1>" + result);
    //   }
    // });
    newBooking.save().then((result)=>{
        res.status(201).json({success: true, message: "Booking added successfully", result})
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    })
  };
  