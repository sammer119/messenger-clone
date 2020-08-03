import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKm03PccDxNsdxD_ypVW5eLHlgCja8GTo",
    authDomain: "messenger-clone-24e67.firebaseapp.com",
    databaseURL: "https://messenger-clone-24e67.firebaseio.com",
    projectId: "messenger-clone-24e67",
    storageBucket: "messenger-clone-24e67.appspot.com",
    messagingSenderId: "999662258871",
    appId: "1:999662258871:web:587578eb01f3f59d445b32"
})

const db = firebaseApp.firestore()

export default db