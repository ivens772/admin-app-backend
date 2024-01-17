import mongoose, { Schema, model } from "mongoose";

const clientScheme = new Schema({
  firstname : {type: String, required: true},
  lastname : {type: String, required: true},
  email: {type: String, unique: true, required: true},
  document_type: {type: String, required: true},
  document_value: {type: String, required: true},
  sales : {type: {count: Number, amount: Number}}
})

const ClientModel = model("Client",clientScheme,"clients")
export default ClientModel