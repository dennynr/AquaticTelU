import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAiMDSJYwA4DdtHCmwGgrqSlHuyYb6V8mA",
    authDomain: "udang-c3077.firebaseapp.com",
    databaseURL: "https://udang-c3077-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "udang-c3077",
    storageBucket: "udang-c3077.appspot.com",
    messagingSenderId: "996892858110",
    appId: "1:996892858110:web:44aa8e982f52b97e2cb7af",
    measurementId: "G-MV782BSBWT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
