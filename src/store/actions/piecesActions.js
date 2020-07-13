export const addPiece = (piece) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async call to add data to DB goes here
        const firestore = getFirestore()
        firestore.collection('pieces').add({
            title: piece.title,
            description: piece.description,
            imageurl: piece.imageurl,
        }).then(() => {
            dispatch({ type: 'CREATE_PIECE', piece: piece})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PIECE_ERROR', error: err})
        })
    }
}