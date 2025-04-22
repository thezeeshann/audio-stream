import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    profile: {
        type: Number,
        required: true,
    },
    approved: {
        type: Boolean,
        default: true,
    },

},
    {
        timestamps: true
    }


)


const AuthModel = new mongoose.model("Auth", AuthSchema)
export default AuthModel