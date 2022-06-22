import * as api from '../api';

//Action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({type: 'CREATE', payload: data})
    }catch (error) {
        return error.message
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost)
        dispatch({ type: 'UPDATE', payload: data})
        console.log('Post updated');
    }catch (error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        await api.likePost(id)
        dispatch({ type: 'LIKE', payload: id})
    }catch(error){
        console.log(error);
    }
}

export const comment = (id, comment) => async (dispatch) => {
    try{
        const { data } = await api.comment(id, comment)
        dispatch({ type: 'COMMENT', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = (id, comment) => async (dispatch) => {
    try{
        const { data } = await api.deleteComment(id, comment)
        dispatch({ type: 'DELETE_COMMENT', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const showCreateAction = () => ({
    type: 'TRUE',
    payload: true
})

export const hideCreateAction = () => ({
    type: 'FALSE',
    payload: false
})

export const getPostID = (id) => ({
    type: 'POST_ID',
    payload: id
})
