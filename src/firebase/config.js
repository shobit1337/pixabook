import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu0GSx_1YU_WYQXY3mxZkenyAHIci5hQM",
  authDomain: "pixabook-tminus5.firebaseapp.com",
  projectId: "pixabook-tminus5",
  storageBucket: "pixabook-tminus5.appspot.com",
  messagingSenderId: "605236583948",
  appId: "1:605236583948:web:4b2523227e5572aa6a1829",
  measurementId: "G-TC88YNMWRF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const serverStorage = firebase.storage();
const serverFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const auth = firebase.auth();

export { serverStorage, serverFirestore, timestamp };
