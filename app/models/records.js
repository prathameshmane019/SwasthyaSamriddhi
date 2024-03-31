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

let HealthRecord;

try {
    HealthRecord = mongoose.models.HealthRecord || mongoose.model('HealthRecord', healthRecordSchema);
} catch (error) {
    HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);
}
export default HealthRecord;
