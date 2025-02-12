import mongoose from "mongoose"
const usermodel = new mongoose.Schema({
    email: String, 
    password: String,
    fname: String,
    lname: String,
    phone: Number,
    company: String,
})

export const User = mongoose.models.users || mongoose.model('users', usermodel)