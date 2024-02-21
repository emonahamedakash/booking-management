const router = require("express").Router();
const {getBooking, addBooking} = require("../controllers/booking.controller");

router.get("/booking", getBooking);
router.post("/booking/create", addBooking);

module.exports = router;