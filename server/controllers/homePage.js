import PostModel from "../models/postModel.js";
import UserModel from "../models/user.js";
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
    const newPost = new PostModel({ ...post, creator: req.userId, createdAt: new Date().toISOString()})

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

    if(!req.userId) return res.json({ message: 'Unauthorized' })

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('We couldn\'t find this post')
    
    const post = await PostModel.findById(_id)
    const index = post.likes.findIndex((id) => id === String(req.userId))
    
    if(index === -1){
        post.likes.push(req.userId)
    }else{
        post.likes = post.likes.filter((id) => id != String(req.userId))
    }

    const updatedPost = await PostModel.findByIdAndUpdate(_id, post, { new: true })
    console.log(post.likes);
    res.json(updatePost)
}

export const comment = async (req, res) => {
    const { id: _id } = req.params
    const {comment: data} = req.body

    if(!req.userId) return res.json({ message: 'The user is not authorized' })
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('We couldn\'t find this post')

    const post = await PostModel.findById(_id)

    const newComment = post.comments.push({comment: data, author: req.userId})

    const updatedComment = await PostModel.findByIdAndUpdate(_id, post, { new: true } )

    res.json(updatedComment)
}

export const deleteComment = async (req, res) => {
    const { postId, commentId } = req.params

    if(!req.userId) return res.json({ message: 'User is not authorize' })
    if(!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).send('We couldn\'t find this post')

    const post = await PostModel.findById(postId)
    post.comments = post.comments.filter((comment) => comment.comment != commentId)

    const updatedPost = await PostModel.findByIdAndUpdate(postId, post, { new: true})

    res.json(updatedPost)
}