import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
//files import
import connectDB from './config/connectDB.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express()

//middlewares
app.use(cookieParser());    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//resful apis
app.use('/api', productRouter);
app.use('/api/auth', userRouter);
app.use('/api',orderRouter);

//conect to database
connectDB();

const port = process.env.PORT


app.get('/', (req, res) => {
    res.send('Server is running')
})


app.listen(port, () => {
    console.log('Server is running on port :',port);
})
