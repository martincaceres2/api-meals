import mongoose from 'mongoose';
import 'dotenv/config';

export const dbConnection = async () => {
    await mongoose
        .connect((process.env.MONGODB_CONNECTION), {
            useNewUrlParser: true
        })
        .then(() => {
            console.log('Database connected');
        })
        .catch((err) => {
            console.log(err)
        })
}