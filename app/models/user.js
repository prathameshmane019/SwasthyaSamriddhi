import mongoose from 'mongoose';
import moment from 'moment';

const { Schema, model } = mongoose;

// Define a separate counter schema for User
const userCounterSchema = new Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 }
});

// Create a model for the user counter
const UserCounter = mongoose.models.UserCounter || mongoose.model('UserCounter', userCounterSchema);

// Define the user schema
const userSchema = new Schema({
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
  password: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  height: {
    type: String
  },
  weight: {
    type: String
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
  },
  
  records: {
    type: [String],
    default: []
  }
}, { timestamps: true });

// Pre-save middleware to generate userId
userSchema.pre('save', async function(next) {
  try {
    if (!this.isNew) {
      return next();
    }
    const counter = await UserCounter.findOneAndUpdate(
      { _id: 'userCounterId' }, // Change the counter ID
      { $inc: { sequence_value: 1 } },
      { upsert: true, new: true }
    );
    const prefix = 'U'; // Prefix for user
    const currentDate = moment().format('DDMMYY'); // Current date in DDMMYY format
    const paddedSequence = String(counter.sequence_value).padStart(6, '0'); // Pad sequence value with leading zeros
    this._id = `${prefix}${currentDate}${paddedSequence}`;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.models.User || model('User', userSchema);

export default User;
