import mongoose from "mongoose";

export async function connectToMongodb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect to mongodb")
    } catch (error) {
        if(error) throw error
    }
}
