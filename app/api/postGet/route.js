// import { ConnectionString } from "@/db/dbConnection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { User } from "@/db/model/userModel";
import { connectionString } from "@/db/dbConnection";

export const POST = async (req)=>{
    const payload = await req.json()
    await mongoose.connect(connectionString)
    const userData = new User(payload)
    const response = await userData.save()
    return NextResponse.json({result: response, upload: true})
}