const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify( action ? { ...action.data } : undefined))
            return { ...state, authData: action ? action.data : undefined }
        case 'LOGOUT':
            localStorage.removeItem('profile')
            return { ...state, authData: null}
        default:
            return state;
    }
}

export default authReducer