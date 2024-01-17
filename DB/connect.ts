import mongoose from "mongoose";
import "dotenv/config";
import userModel from "../models/user";
import saleModel from "../models/sales";

async function connectDB() {
 if (!process.env.MONGODB) {
    throw new Error("La variable de entorno no existe")
 }
try {
    await mongoose.connect(process.env.MONGODB)
    console.log("Connect was successful")
    /*await saleModel.create({
        operation_date: new Date(),
         user: '65a141eef8610f8896a8b59a',
          total_amount: 5000
    })*/
    /*await userModel.create({
        firstname: "ivens ariel",
        lastname: "calderon hernandez",
        email: "ivens772@gmail.com",
        login_code: "123456",
        roles: {
            admin: true,
            seller: true,
        }
    })*/
    
} catch (error) {
    console.error("hubo un error al conectarse a la base de datos")
}
}

export default connectDB