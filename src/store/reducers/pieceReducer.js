const initState = {
    pieces: [
    ]
}

const pieceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PIECE':
            console.log('created piece', action.piece)
            return {
                ...state,
                uploadSuccess: 'Upload Successful'
            }
        case 'CREATE_PIECE_ERROR':
            console.log('create piece error', action.error)
            return {
                ...state,
                uploadError: 'Upload Failed'
            }
        default:
            return state
    }
}   

export default pieceReducer