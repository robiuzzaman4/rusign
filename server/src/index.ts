import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// define port
const port = process.env.PORT || 5000;

// define app
const app = express();

// middlewere
app.use(cors());
app.use(express.json());
dotenv.config();

// define run function for connect database and use routers
const run = async () => {
    try {
        // connect db
        await mongoose.connect(process.env.DB_URI);
        console.log("Database Connected.");

        // use all routers

    } catch (error) {
        console.log(error.message);
    }
}

// invoke run function
run();


// base route
app.get("/", (_, res) => {
    res.send("Rusign server is running");
})

// app listen
app.listen(port, () => {
    console.log(`Rusign server is running on port: ${port}`);
})