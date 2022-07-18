import * as api from '../api/index.js'

export const getProfile = (id) => async(dispatch) => {
    try {
        const { data } = await api.getProfile(id)
        dispatch({ type: 'GET_USER', data})
    } catch (error) {
        console.log(error);
    }
}