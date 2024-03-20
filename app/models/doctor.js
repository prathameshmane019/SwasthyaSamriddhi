import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the doctor schema
const doctorSchema = new Schema({
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
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  
  gender: {
    type: String,
    enum: ['male', 'female', 'other'] 
  },
  bloodGroup: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  specialization:  {
    type: String,
    required: true
  },
  licenseNumber:   {
    type: String,
    required: true
  },
}, { timestamps: true });

// Define the Hospital Details schema
const hospitalDetailsSchema = new Schema({
  hospitalName: {
    type: String,
    required: true
  },
  hospitalAddress: {
    building: String,
    city: String,
    taluka: String,
    district: String,
    state: String,
    pincode: Number
  },
  hospitalContactNo: String,
}, { timestamps: true });

const Doctor = model('Doctor', doctorSchema);
const HospitalDetails = model('HospitalDetails', hospitalDetailsSchema);

export { Doctor, HospitalDetails };
