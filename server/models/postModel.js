import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    author: String,
    image: String,
    location: String,
    title: String,
    creator: String,
    comments: [Object],
    likes: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const PostModel = mongoose.model('PostModel', postSchema)

export default PostModel