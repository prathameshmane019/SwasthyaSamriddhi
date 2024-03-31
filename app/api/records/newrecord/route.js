import { NextResponse } from 'next/server';
import HealthRecord from '../../../models/records'; // Import the Doctor model
import { connectMongoDB } from "../../../libs/connectDb";

export async function POST(req) {
    connectMongoDB();
    const recordData = await req.json();
    try {
        const record = new HealthRecord(recordData);
        console.log(record);
        await record.save();
        console.log(record);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to add record", 500); // Return an error response
    }

    return NextResponse.json({ message: "record added successfully" }); // Return a success response
}
