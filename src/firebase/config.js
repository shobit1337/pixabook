import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  //Firebase config here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const serverStorage = firebase.storage();
const serverFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { serverStorage, serverFirestore, timestamp };
