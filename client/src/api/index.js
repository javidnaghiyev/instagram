import axios from 'axios';

const url = 'http://localhost:5000'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`, likePost)
export const comment = (id, updatedComment) => axios.patch(`${url}/${id}/comment`, updatedComment)
export const deleteComment = (id, comment, deletedComment) => axios.patch(`${url}/${id}/${comment}/deleteComment`, deletedComment)