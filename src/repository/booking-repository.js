const { Booking } = require("../models/index");
const { AppErrors, validationErrors } = require("../utils/index");
const {StatusCodes}=require('http-status-code')
class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if (error == "SequelizeValidationError")
        throw new validationErrors(error);
    }
    throw new AppErrors(
      "RepositoryError",
      "Cannot create Booking",
      "There was some  issue creating the booking, please try again later",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = BookingRepository;
