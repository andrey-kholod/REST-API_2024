import { Schema, model } from "mongoose";

const User = new Schema({
   name: {type: String, required: true, unique: true}
})

export default model('User', User)