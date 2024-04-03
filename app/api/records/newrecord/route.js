import { NextResponse } from 'next/server';
import HealthRecord from '../../../models/records';
import User from '../../../models/user';
import { connectMongoDB } from "../../../libs/connectDb";
import { encrypt } from '@/app/libs/encryption'; // Import the encrypt function

export async function POST(req) {
    connectMongoDB();
    const recordData = await req.json();
    console.log("Received record data:", recordData);
    try {
        if (!recordData || Object.values(recordData).some(value => typeof value !== 'string' || value.trim() === '')) {
            throw new Error('Record data is missing or contains empty fields');
        }

        // Encrypt each field separately
        const encryptedDiagnosis = encrypt(recordData.diagnosis);
        const encryptedPrescription = encrypt(recordData.prescription);
        const encryptedStatus = encrypt(recordData.status);
        const encryptedNotes = encrypt(recordData.notes);

        // Create a new HealthRecord instance with encrypted data
        const record = new HealthRecord({
            diagnosis: encryptedDiagnosis,
            prescription: encryptedPrescription,
            status: encryptedStatus,
            notes: encryptedNotes,
            patientId: recordData.patientId,
            doctorId: recordData.doctorId
        });

        await record.save();

        // Find the user by ID
        const user = await User.findById(recordData.patientId);
        if (user) {
            console.log("Found user:", user);
            if (!user.records) {
                user.records = [];
            }
            user.records.push(record._id);
            await user.save();
        } else {
            console.error('User not found for ID:', recordData.patientId);
            throw new Error('User not found');
        }
        console.log("Record added:", record);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to add record", 500);
    }
    return NextResponse.json({ message: "Record added successfully" });
}