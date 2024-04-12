import { NextResponse } from 'next/server';
import HealthRecord from '../../../models/records';
import User from '../../../models/user';
import { connectMongoDB } from "../../../libs/connectDb";
import { encrypt } from '@/app/libs/encryption';
import { uploadImage } from '@/app/libs/uploadImage';
import { sendHealthRecordAddedEmail } from '../../nodemailer/route';

export async function POST(req) {
    console.log("trying");
    connectMongoDB();
    try {
        const formData = await req.formData();
        const diagnosis = formData.get("diagnosis");
        const prescription = formData.get("prescription");
        const status = formData.get("status");
        const notes = formData.get("notes");
        const patientId = formData.get("patientId");
        const doctorId = formData.get("doctorId");
        const image = formData.get("image");

        if (!diagnosis || !prescription || !status || !notes || !patientId || !doctorId) {
            throw new Error('One or more required fields are missing');
        }

        let imageUrl, publicId;
        if (image && image.name) {
            const uploadResult = await uploadImage(image, 'records');
            imageUrl = uploadResult.url;
            publicId = uploadResult.public_id;
        }
        const encryptedDiagnosis = encrypt(diagnosis);
        const encryptedPrescription = encrypt(prescription);
        const encryptedStatus = encrypt(status);
        const encryptedNotes = encrypt(notes);

        const recordData = {
            diagnosis: encryptedDiagnosis,
            prescription: encryptedPrescription,
            status: encryptedStatus,
            notes: encryptedNotes,
            patientId,
            doctorId,
        };

        if (imageUrl && publicId) {
            recordData.image = { image_url: imageUrl, public_id: publicId };
        }

        const record = new HealthRecord(recordData);
        await record.save();

        const user = await User.findById(patientId);
        const name = user.fullname.firstName + " " + user.fullname.surName;

        if (user) {
            if (!user.records) {
                user.records = [];
            }
            user.records.push(record._id);
            await user.save();
        } else {
            console.error('User not found for ID:', patientId);
            throw new Error('User not found');
        }
        console.log("Record added:", record);
        console.log(name, record.doctorId, user.email);
        sendHealthRecordAddedEmail({ name, doctorId: record.doctorId, email: user.email });
        return NextResponse.json({ message: "Record added successfully", success: true });
        } 
        catch (error) {
        console.error("Error:", error);
        return NextResponse.error("Failed to add record", 500);
    }
}
