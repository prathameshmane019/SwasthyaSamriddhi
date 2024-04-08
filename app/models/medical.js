import mongoose from 'mongoose';
import moment from 'moment';

const { Schema, model } = mongoose;

// Define a separate counter schema
const counterSchema = new Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 }
});

// Create a model for the counter
const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);

// Define the doctor schema
const medicalSchema = new Schema({
  _id: { type: String }, // Define _id field explicitly
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
  password:{
    type:String
  },
  mobile: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'] 
  },
  degree: {
    type: String,
    required: true
  },
//   specialization:  {
//     type: String,
//     required: true
//   },
  licenseNumber:   {
    type: String,
    required: true
  },
  medicalDetails: {
    medicalName: {
      type: String,
      required: true
    },
    medicalAddress: {
      building: String,
      city: String,
      taluka: String,
      district: String,
      state: String,
      pincode: Number
    },
    medicalContactNo: String,
  },
}, { timestamps: true });

// Pre-save middleware to generate doctorId
medicalSchema.pre('save', async function(next) {
  try {
    if (!this.isNew) {
      return next();
    }
    const counter = await Counter.findOneAndUpdate(
      { _id: 'medicalId' },
      { $inc: { sequence_value: 1 } },
      { upsert: true, new: true }
    );
    const prefix = 'D'; // Prefix for doctor role
    const currentDate = moment().format('DDMMYY'); // Current date in DDMMYY format
    const paddedSequence = String(counter.sequence_value).padStart(6, '0'); // Pad sequence value with leading zeros
    this._id = `${prefix}${currentDate}${paddedSequence}`; // Assign doctorId to _id
    next();
  } catch (error) {
    next(error);
  }
});

const Medical = mongoose.models.Medical || model('Medical', medicalSchema);

export default Medical;
