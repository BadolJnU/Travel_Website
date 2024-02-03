import Booking from '../models/Booking.js'



//create booking
export const createBooking = async(req, res) => {

    const newBooking = new Booking(req.body);
    try {
        const saveBooking = await newBooking.save()

        res.status(200).json({success:true, message:"Your Tour is booked", data: saveBooking})
        
    } catch (err) {
        res.status(500).json({success:false, message:"Server Error. Try again"})
    }
}

//get single booking by id
export const getBooking = async(req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res.status(200).json({success:true, message:"successful", data: book})
    } catch (err) {
        res.status(404).json({success:false, message:"Not Found"})
    }
}

//get all booking list
export const getAllBooking = async(req, res) => {

    try {
        const books = await Booking.find()

        res.status(200).json({success:true, message:"successful", data: books})
    } catch (err) {
        res.status(500).json({success:false, message:"Server Error"})
    }
}