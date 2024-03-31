import { NextResponse } from 'next/server';
import HealthRecord from '../../../models/records';
import User from '../../../models/user';  // Import the User model
import { connectMongoDB } from "../../../libs/connectDb";

export async function POST(req) {
    connectMongoDB();
    const recordData = await req.json();
    
    try {
        // Create a new HealthRecord
        const record = new HealthRecord(recordData);
        await record.save();

        // Update the User record array with the new HealthRecord ID
        const user = await User.findById(recordData.userId);
        if (user) {
            user.record = { id: record._id };  // Set the record ID
            await user.save();
        } else {
            throw new Error('User not found');
        }

        console.log(record);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to add record", 500); // Return an error response
    }

    return NextResponse.json({ message: "record added successfully" }); // Return a success response
}
