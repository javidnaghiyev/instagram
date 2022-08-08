export default (state = { userData: null }, action) => {
    switch (action.type) {
        case 'GET_USER':
            state = {...state, userData: action ? action.payload : null}
            return state
        default:
            return state;
    }
}