import { NextResponse } from 'next/server';
import HealthRecord from '../../../models/records';
import User from '../../../models/user';
import { connectMongoDB } from "../../../libs/connectDb";

export async function POST(req) {
    connectMongoDB();
    const recordData = await req.json();
    try {
        const record = new HealthRecord(recordData);
        await record.save();

        // Find the user by ID
        const user = await User.findById(recordData.patientId);
        if (user) {
            if (!user.records) {
                user.records = [];
            }
            user.records.push(record._id);
            console.log(user);
            await user.save();
        } else {
            throw new Error('User not found');
        }
        console.log("Record added:", record);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to add record", 500); // Return an error response
    }
    return NextResponse.json({ message: "Record added successfully" }); // Return a success response
}
