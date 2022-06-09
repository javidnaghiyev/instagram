export default function showCreateReducer(state = false, action){
    switch (action.type) {
        case 'TRUE':
            return action.payload = true
        case 'FALSE':
            return action.payload = false
        default:
            return state;
    }
}