// const mongoose = require("mongoose");

// const MessageSchema = new mongoose.Schema({
//     sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
//     receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
//     text: { type: String, required: true },
//     timestamp: { type: Date, default: Date.now }
// });

// const MessageModel = mongoose.model("Message", MessageSchema);
// module.exports = MessageModel;


import mongoose from "mongoose";

const FollowSchema = new mongoose.Schema({

})


const MessageModel = new mongoose.model("Follow", FollowSchema)
export default MessageModel