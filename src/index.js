import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import App from './App';

firebase.initializeApp({
  apiKey: 'AIzaSyCXv3V_rYVPfRgtpr0HyBxi_N00L8TRVAA',
  authDomain: 'your-notepad-1337.firebaseapp.com',
  projectId: 'your-notepad-1337',
  storageBucket: 'your-notepad-1337.appspot.com',
  messagingSenderId: '595607305918',
  appId: '1:595607305918:web:84b04b5eeff65b2151e8ef',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
