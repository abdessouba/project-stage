import { NextResponse } from "next/server"
import {connectToMongodb} from "../../lib/mongodb.js"
import User from "@/app/models/model.js"
import bcrypt from "bcryptjs"

export async function POST(req){
    try {
        await connectToMongodb()
        const {name, email, password} = await req.json()
        const hashPass = await bcrypt.hash(password, 10)
        await User.create({name, email, password:hashPass})
        return NextResponse.json({ message: "User registered.", ok:true}, {status: 201});
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
          );
    }
}
