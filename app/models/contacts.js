import { Schema, model, mongoose } from 'mongoose';

const messageSchema = new Schema({
    name:{
        type: String
    },
    email:{
        types:String
    },
    message:{
        type:String
    }
}, { timestamps: true });

const Message = mongoose.models.Message || model('Message', messageSchema);

export default Message;