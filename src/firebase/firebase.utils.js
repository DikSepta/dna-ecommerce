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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const AddShopDataToFirebase = async (shopData) => {
  const collectionKey = "collection"

  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  shopData.forEach(item => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item)
  });

  return await batch.commit();
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth)
    return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)//doc(`users/${userAuth.uid}`);

  console.log(userRef);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(
        {
          displayName: displayName,
          email: email,
          createdAt: createdAt,
          ...additionalData,
        }
      );
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }

  return userRef;
}

export const transformShopCollectionData = (collectionSnapshot) => {
  const transformedCollection = collectionSnapshot.docs.map(doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    }
  )
  
  return transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection

      return accumulator
    }, {}
  )
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcscibe = auth.onAuthStateChanged( userAuth => {
      unsubcscibe();
      resolve(userAuth);
    }, reject)
  })
}

export default firebase;