import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from "../backend/Routes/TourRoutes.js"
import userRoute from "../backend/Routes/userRoutes.js"
import authRoute from "../backend/Routes/authRoutes.js"
import reviewRoute from "../backend/Routes/reviews.js"
import bookingRoute from "../backend/Routes/bookingRoutes.js"


dotenv.config()

const app = express()

const port = process.env.PORT || 8000

const corsOption = {
    origin:true,
    credentials:true
}

//database connection
mongoose.set('strictQuery', false);

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Mongo DB Connected")
    } catch (err) {
        console.log("Mongo DB Connection Failed")
    }
}

//middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/booking", bookingRoute);



app.listen(port, ()=>{
    connect();
    console.log('server listening on the port', port);
})