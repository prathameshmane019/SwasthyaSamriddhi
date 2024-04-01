import { NextResponse } from 'next/server';
import User from '@/app/models/user';
import { connectMongoDB } from '@/app/libs/connectDb';
import HealthRecord from '@/app/models/records';
export async function POST(req) {
    const { userId } =await req.json();

    try {
        connectMongoDB();
        const user = await User.findById({_id:userId});
        if (!user) {
            throw new Error('User not found');
        }

        const records = await HealthRecord.find({ _id: { $in: user.records } });
        return NextResponse.json(records); 
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to fetch records", 500); // Return an error response
    }
}
