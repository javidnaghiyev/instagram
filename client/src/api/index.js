import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchPosts = () => API.get('/')
export const createPost = (newPost) => API.post('/', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/${id}`)
export const likePost = (id) => API.patch(`/${id}/likePost`, likePost)
export const comment = (id, updatedComment) => API.patch(`/${id}/comment`, updatedComment)
export const deleteComment = (id, comment, deletedComment) => API.patch(`/${id}/${comment}/deleteComment`, deletedComment)

export const signIn = (formData) => API.post(`/user/signin`, formData)
export const signUp = (formData) => API.post(`/user/signup`, formData)