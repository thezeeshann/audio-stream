import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    },
    text: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})


const MessageModel = new mongoose.model("Message", MessageSchema)
export default MessageModel