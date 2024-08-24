import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sameermeel01:61qoNPdwmoNQXzUZ@cluster0.rdtpg.mongodb.net/Food_Delivery').then(()=>console.log("DataBase Connected"));
}