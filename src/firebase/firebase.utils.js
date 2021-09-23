import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDADIsllHO08mDuO2uR3jLWoalClBqKNzk",
  authDomain: "dna-commerce-db.firebaseapp.com",
  projectId: "dna-commerce-db",
  storageBucket: "dna-commerce-db.appspot.com",
  messagingSenderId: "58589829242",
  appId: "1:58589829242:web:82274e3f581a70a8ccc3c3",
  measurementId: "G-QG673C64Z5"
};

// Initialize 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;