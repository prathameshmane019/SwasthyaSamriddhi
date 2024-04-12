import { NextResponse } from 'next/server';
import HealthRecord from '../../../models/records';
import User from '../../../models/user';
import { connectMongoDB } from "../../../libs/connectDb";
import { encrypt } from '@/app/libs/encryption'; // Import the encrypt function
import { writeFile } from 'fs/promises';

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

    const file = req.files?.file; // Corrected the file extraction
    if (!file) {
      return NextResponse.json({ "message": "no image found", success: false });
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`; // Corrected the path

    await writeFile(path, buffer);

    // Create a new HealthRecord instance with encrypted data
    const record = new HealthRecord({
      diagnosis: encryptedDiagnosis,
      prescription: encryptedPrescription,
      status: encryptedStatus,
      notes: encryptedNotes,
      patientId: recordData.patientId,
      doctorId: recordData.doctorId,
      image: path // Store the image path in the HealthRecord
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
    return NextResponse.json({ message: "Record added successfully", success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Failed to add record", 500);
  }
}
