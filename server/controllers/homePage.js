import PostModel from "../models/postModel.js";
import mongoose from "mongoose";

export const getHomePage = async (req, res) => {
    try{
        const postModel = await PostModel.find()

        res.status(200).json(postModel)
    } catch (error) {
        res.status(404).json({ message: error})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('We couldn\'t find this post')

    const post = req.body

    const updatePost = await PostModel.findByIdAndUpdate(_id, { ...post, _id}, { new: true })

    res.json(updatePost)

}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('We couldn\'t find this post')

    await PostModel.findByIdAndRemove(_id)

    res.json({message: 'Post Deleted'})
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('We couldn\'t find this post')

    const post = await PostModel.findById(_id)
    const updatedPost = await PostModel.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1}, { new: true })

    res.json(updatedPost)
}

export const comment = async (req, res) => {
    const { id: _id } = req.params
    const comment = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('We couldn\'t find this post')

    const post = await PostModel.findById(_id)
    const updatedComment = await PostModel.findByIdAndUpdate(_id, { $push: { comments: comment.comment} }, { new: true } )

    res.json(updatedComment)
}

export const deleteComment = async (req, res) => {
    const { id: _id, comment: comment } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('We couldn\'t find this post')

    const post = PostModel.findById(_id)
    const deletedComment = await PostModel.findByIdAndUpdate(_id, { $pull: { comments: { $in: [`${comment}`]}}}, { new : true})

    res.json(deletedComment)
}