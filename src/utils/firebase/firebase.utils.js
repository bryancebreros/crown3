import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBiPgo_FKEwdE78v_rFqETByHnNk-I32_U",
    authDomain: "crown3-f0fe7.firebaseapp.com",
    projectId: "crown3-f0fe7",
    storageBucket: "crown3-f0fe7.appspot.com",
    messagingSenderId: "896461558328",
    appId: "1:896461558328:web:787717ee5ddccdb1430ccd"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;

};