import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';

//app configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.get('/',(req, res) => {
    res.send('API WORKING GREAT');
});

app.listen(port, () => console.log("Server Started",port));