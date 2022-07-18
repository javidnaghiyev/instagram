const userReducer = (userData = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action ? action.data : null
        default:
            return userData;
    }
}

export default userReducer