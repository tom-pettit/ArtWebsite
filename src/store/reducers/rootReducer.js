import authReducer from './authReducer'
import pieceReducer from './pieceReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    piece: pieceReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer