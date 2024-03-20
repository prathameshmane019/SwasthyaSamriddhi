import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const patientSchema = new Schema({
  
  fullname: {
    firstName: String,
    middleName: String,
    surName: String
  },
  adharCard: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'] 
  },
  mobile: {
    type: String,
    required: true
  },
 
  bloodGroup: {
    type: String,
    required: true
  },
  address: {
    building: String,
    city: String,
    taluka: String,
    district: String,
    state: String,
    pincode: String
  },
  allergies: String,
  medication: {
    name: String,
  
    frequency: String
  }
}, { timestamps: true });

const Patient = mongoose.models.Patient || model('Patient', patientSchema);

export default Patient;
