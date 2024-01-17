import mongoose, { Schema, Types, model } from "mongoose";

const salesSchema = new Schema({
 operation_date: Date,
 total_amount: Number,
 user: {type: Types.ObjectId, ref: 'user'}
})

const saleModel = model('sale', salesSchema, 'sales')
export default saleModel