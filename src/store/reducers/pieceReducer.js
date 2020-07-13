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
        case 'CREATE_FORSALE_PIECE':
            console.log('created for sale piece', action.piece)
            return {
                ...state,
                createSuccess: 'Upload Successful'
            }
        case 'CREATE_FORSALE_PIECE_ERROR':
            console.log('create for sale piece error', action.error)
            return {
                ...state,
                createError: 'Upload Failed'
            }
        default:
            return state
    }
}   

export default pieceReducer