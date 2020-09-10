import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_YTDidTm1Y-MNrsOsTREiFXIjre-ZFT8",
  authDomain: "clone-66da2.firebaseapp.com",
  databaseURL: "https://clone-66da2.firebaseio.com",
  projectId: "clone-66da2",
  storageBucket: "clone-66da2.appspot.com",
  messagingSenderId: "625888783972",
  appId: "1:625888783972:web:226dab7caaf86b044fb971",
  measurementId: "G-R0RHD7ZZ71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
