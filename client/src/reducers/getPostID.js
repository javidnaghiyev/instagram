export default (postID=null, action) => {
    switch (action.type) {
        case 'POST_ID':
            return action.payload
        default:
            return postID
    }
}