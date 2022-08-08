import * as api from '../api/index.js'

export const getProfile = (id, navigate) => async(dispatch) => {
    try {
        const { data } = await api.getProfile(id)
        dispatch({ type: 'GET_USER', payload: data})
        navigate(`/user/${id}`)
    } catch (error) {
        console.log(error);
    }
}