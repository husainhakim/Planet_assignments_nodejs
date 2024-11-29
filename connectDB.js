import mongoose from "mongoose";

export default function connectDB(){
    mongoose.connect("mongodb://localhost:27017/Planet_assignments")
    .then(()=>{
        console.log("Database is connected")
    })
    .catch((err)=>{
        console.log(err)
    })

}