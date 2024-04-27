import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT",
    })
    .then(()=>{
        console.log("connected to the database succesfully");
    }).catch(err=>{
        console.log("some error occured while connecting to database");
    })
}