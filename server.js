// const  express = require('express');
//modern one
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import ProductRoute from './routes/product.route.js';

dotenv.config();
const app = express();
//this is a middleware and that means runs before u send a resp to the client
app.use(express.json());//allows us to works w json format (parser)
app.use("/api/products",ProductRoute)
//|| if it is undefined
const Port =process.env.PORT||5000
app.listen(Port , ()=> {
    connectDB();
    console.log('listening on port :'+Port);
});

