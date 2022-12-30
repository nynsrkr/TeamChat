import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

//update firebase config

const firebaseConfig = {
  apiKey: "AIzaSyBfTatTnkOd6IMbpD__kZqE5Bed3qE8Q0c",
  authDomain: "thedojosite-72f14.firebaseapp.com",
  projectId: "thedojosite-72f14",
  storageBucket: "thedojosite-72f14.appspot.com",
  messagingSenderId: "649575499602",
  appId: "1:649575499602:web:7601b7513c5ef9383d1c8b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }