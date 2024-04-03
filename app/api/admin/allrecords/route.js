import { NextResponse } from 'next/server';
import User from '@/app/models/user';
import { connectMongoDB } from '@/app/libs/connectDb';
import HealthRecord from '@/app/models/records';
import { decrypt } from "../../../libs/encryption"; // Import decrypt function

export async function GET(req) {
    connectMongoDB();
    
    try {
        
        const records = await HealthRecord.find();

        // Map records and attempt decryption
        const decryptedRecords = records.map(record => {
            try {
                return {
                    ...record._doc,
                    diagnosis: decrypt(record.diagnosis),
                    prescription: decrypt(record.prescription),
                    status: decrypt(record.status),
                    notes: decrypt(record.notes),
                };
            } catch (error) {
                console.error("Error decrypting record:", error);
                return null; // If decryption fails, return null for this record
            }
        }).filter(record => record !== null); // Filter out records where decryption failed

        console.log("Decrypted Records:", decryptedRecords);

        return NextResponse.json(decryptedRecords);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to fetch records", 500); // Return an error response
    }
}
