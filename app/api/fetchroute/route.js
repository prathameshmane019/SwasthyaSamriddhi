import { NextResponse } from 'next/server';
import HealthRecord from '@/app/models/records';
import { connectMongoDB } from '@/app/libs/connectDb';

export async function POST(req) {
    const { userId } = req.json();

    try {
        connectMongoDB();
        const records = await HealthRecord.find({ patientId:userId });
        return NextResponse.json(records); // Return the records
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to fetch records", 500); // Return an error response
    }
}
