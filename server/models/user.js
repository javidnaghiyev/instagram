import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    picture: String,
    bio: String,
    posts: [Object],
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