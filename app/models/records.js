import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const healthRecordSchema = new Schema({
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
    images: [
        {
            image_url: {
                type: String,
                required: false
            },
            public_id: {
                type: String,
                required: false
            }
        }
        
    ],
    patientId: {
        type: String,
        required: true,
        ref: 'User',
    },
    doctorId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const HealthRecord = mongoose.models.HealthRecord || model('HealthRecord', healthRecordSchema);

export default HealthRecord;