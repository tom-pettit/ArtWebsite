import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCV0jQmI9kfLDbL8ndI1B0ug4afjzD8Nlk",
  authDomain: "hannahimaart-246f0.firebaseapp.com",
  databaseURL: "https://hannahimaart-246f0.firebaseio.com",
  projectId: "hannahimaart-246f0",
  storageBucket: "hannahimaart-246f0.appspot.com",
  messagingSenderId: "938506221059",
  appId: "1:938506221059:web:ba3df4d35a00afa09bc036",
  measurementId: "G-6ZGZ5DRG07"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase