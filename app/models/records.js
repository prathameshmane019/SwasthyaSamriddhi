
import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const healthRecordSchema = new mongoose.Schema({
    diagnosis: {
        type: String,
        required: [true, "Please provide Diagnosis"]
    },
    prescription: {
        type: String,
        required: [true, "Please provide Prescription"]
    },
    status: {
        type: String,
        required: [true, "Please provide Status"]
    },
    notes: {
        type: String,
        required: [true, "Please provide Notes"]
    },
    patientId:{
        type:String,
        required:true,
        ref: 'User',
    },
    doctorId:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});

import { decrypt } from "../../../libs/encryption"; // Import decrypt function

export async function POST(req) {
    connectMongoDB();
    const { userId } = await req.json();

    try {
        const user = await User.findById({_id: userId});
        if (!user) {
            throw new Error('User not found');
        }


        const records = await HealthRecord.find({ _id: { $in: user.records } });

        // Decrypt sensitive fields
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
