import mongoose from "mongoose";

const connectToMongoDB = async () => {
	const uri = "mongodb+srv://shauryaa:shauryaa@mern-realtor.9qpnspc.mongodb.net/?retryWrites=true&w=majority&appName=mern-realtor"

    try{
        mongoose.connect(uri);
        console.log("MongoDB connected");
    }
    catch(error){
        console.log("Error in mongodb connection", error.message);
    }
};

export default connectToMongoDB;