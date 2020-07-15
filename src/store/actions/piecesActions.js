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

export const delPiece = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async call to add data to DB goes here
        const firestore = getFirestore()
        firestore.collection('pieces').doc(id).delete().then(() => {
            dispatch({ type: 'DELETE_PIECE', id: id})
        }).catch((err) => {
            dispatch({ type: 'DELETE_PIECE_ERROR', error: err})
        })
    }
}

export const addForSalePiece = (piece) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async call to add data to DB goes here
        const firestore = getFirestore()
        firestore.collection('for_sale').add({
            title: piece.title,
            description: piece.description,
            imageurl: piece.imageurl,
            price: piece.price
        }).then(() => {
            dispatch({ type: 'CREATE_FORSALE_PIECE', piece: piece})
        }).catch((err) => {
            dispatch({ type: 'CREATE_FORSALE_PIECE_ERROR', error: err})
        })
    }
}

export const delForSale = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async call to add data to DB goes here
        const firestore = getFirestore()
        firestore.collection('for_sale').doc(id).delete().then(() => {
            dispatch({ type: 'DELETE_FOR_SALE', id: id})
        }).catch((err) => {
            dispatch({ type: 'DELETE_FOR_SALE_ERROR', error: err})
        })
    }
}