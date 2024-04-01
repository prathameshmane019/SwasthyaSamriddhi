import { NextResponse } from 'next/server';
import User from '@/app/models/user';
import { connectMongoDB } from '@/app/libs/connectDb';
import HealthRecord from '@/app/models/records';
import { decrypt } from "../../../libs/encryption"; // Import decrypt function

export async function POST(req) {
    connectMongoDB();
    const { userId } = await req.json();
    try {
        const user = await User.findById({_id: userId});
        console.log(user);
        if (!user) {
            throw new Error('User not found');
        }
        const records = await HealthRecord.find({ _id: { $in: user.records } });

        const decryptedRecords = records.map(record => ({
            ...record._doc,
            diagnosis: decrypt(record.diagnosis),
            prescription: decrypt(record.prescription),
            status: decrypt(record.status),
            notes: decrypt(record.notes),
        }));

        return NextResponse.json(decryptedRecords);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to fetch records", 500); // Return an error response
    }
}
