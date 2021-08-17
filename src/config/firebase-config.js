import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC4CBff86oCKAmAa7Nm9lBw4BY8Lppz6BE",
  authDomain: "appgreat-task.firebaseapp.com",
  projectId: "appgreat-task",
  storageBucket: "appgreat-task.appspot.com",
  messagingSenderId: "804535566068",
  appId: "1:804535566068:web:a0a9b9ce4453f10cabe8a1",
  measurementId: "G-VJZSTY8TS3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
