import mongoose , {Schema, model} from "mongoose";

const Userschema = new Schema({
 firstname:{type: String, required: true},
 lastname:{type: String, required: true},
 email:{type:String, unique:true, required: true},
 login_code: {type:String, length:6, unique:true, required: true},
 roles:{type:{
    admin:Boolean,
    seller:Boolean,
 }, required: true}
})

const userModel = model("user", Userschema,"users");
export default userModel