import mongoose from "mongoose";
export const connectDB= () => {
    mongoose.connect("mongodb://localhost:27017", {dbName: "backendLit",}).then((c)=> console.log(`Database connected at ${c.connection.host}`)).catch((e)=>console.log(e));
};