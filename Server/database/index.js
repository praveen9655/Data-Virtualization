import mongoose from "mongoose";

// database connection
export const mongoDB = () => {
    mongoose.connect('mongodb+srv://praveeen:5A4k053kfcKhXAyP@arjceterp.23k4i1t.mongodb.net/Virtualization?retryWrites=true&w=majority')
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}