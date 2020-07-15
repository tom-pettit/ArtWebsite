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
        case 'DELETE_PIECE':
            console.log('deleted piece', action.id)
            return {
                ...state,
                deleteSuccess: 'Successfully deleted'
            }
        case 'DELETE_PIECE_ERROR':
            console.log('delete piece error', action.error)
            return {
                ...state,
                deleteError: 'Deletion failed'

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
        case 'DELETE_FOR_SALE':
            console.log('deleted for sale', action.id)
            return {
                ...state,
                deleteForSaleSuccess: 'Successfully deleted'
            }
        case 'DELETE_FOR_SALE_ERROR':
            console.log('delete for sale error', action.error)
            return {
                ...state,
                deleteForSaleError: 'Deletion failed'

            }
        default:
            return state
    }
}   

export default pieceReducer