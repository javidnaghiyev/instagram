import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    profilePicture: String,
    bio: String,
    postCount: {
        type: Number,
        default: 0
    },
    followerCount: {
        type: Number,
        default: 0
    },
    followingCount: {
        type: Number,
        default: 0
    }
})

const UserModel = mongoose.model('UserModel', userSchema)

export default UserModel