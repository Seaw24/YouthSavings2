import express from 'express';
import { connectDB } from './db/connect';
import dotenv from 'dotenv';
import routerFixedData from './routes/fixeddata';
dotenv.config();




const app = express();
const port = process.env.PORT || 3000;

//ROUTES
app.use('/api/fixeddata', routerFixedData);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI as string);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();