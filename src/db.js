import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAM0_RSu3O6o_ZuYzdAPYIU4FCHnzlHB-Y",
    authDomain: "notasvue.firebaseapp.com",
    databaseURL: "https://notasvue.firebaseio.com",
    projectId: "notasvue",
    storageBucket: "notasvue.appspot.com",
    messagingSenderId: "878327193315",
    appId: "1:878327193315:web:1031a6b497aa166c626fd6"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
/* db.settings({ timestampsInSnapshots: true }) */
