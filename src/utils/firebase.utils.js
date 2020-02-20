import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCEFrNHwF_FgB1sERwNBgfRDj04ECqznQw',
  authDomain: 'fashionfit-7ecce.firebaseapp.com',
  databaseURL: 'https://fashionfit-7ecce.firebaseio.com',
  projectId: 'fashionfit-7ecce',
  storageBucket: 'fashionfit-7ecce.appspot.com',
  messagingSenderId: '277942333785',
  appId: '1:277942333785:web:f3349671b60beb2fb95c48',
  measurementId: 'G-9JXZLX2RP9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCusomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup;

export default firebase;
