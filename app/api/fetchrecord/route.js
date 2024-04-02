
import { NextResponse } from 'next/server';
import HealthRecord from '@/app/models/records';
import { connectMongoDB } from '@/app/libs/connectDb';

export async function GET(req) {
    const { userId } = req.query;

    try {
        connectMongoDB();

        // Fetch health records for the specified user
        const records = await HealthRecord.find({ userId });

        return NextResponse.json(records); // Return the records
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to fetch records", 500); // Return an error response
    }
}
