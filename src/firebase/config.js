import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVJuUagFOIUAYB2hWM_rKkMjXvanUayUI",
    authDomain: "mymoney-3a913.firebaseapp.com",
    projectId: "mymoney-3a913",
    storageBucket: "mymoney-3a913.appspot.com",
    messagingSenderId: "601961434296",
    appId: "1:601961434296:web:8e0dab12247b03e8e4384d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }