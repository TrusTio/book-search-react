import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "booksearch-app-ac71b.firebaseapp.com",
  projectId: "booksearch-app-ac71b",
  storageBucket: "booksearch-app-ac71b.appspot.com",
  messagingSenderId: "209485061361",
  appId: "1:209485061361:web:8292d7fc3545c3f4825d50",
  measurementId: "G-FHB5W2N2W3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
