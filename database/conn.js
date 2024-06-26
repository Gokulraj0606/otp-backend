import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

//import { MongoMemoryServer } from "mongodb-memory-server";
//import ENV from "../env/config.js"

async function connect() {
    //const mongod = await MongoMemoryServer.create()
    //const getUri = mongod.getUri()  

    mongoose.set("strictQuery", true)
    //const db = await mongoose.connect(getUri)
    const db = await mongoose.connect(process.env.ATLAS_URI)
    console.log("database Connected")
    return db
}

export default connect