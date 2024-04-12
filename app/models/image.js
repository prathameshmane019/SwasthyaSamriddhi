// models/Image.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
});

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;
