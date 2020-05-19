
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';



var firebaseConfig = {
  apiKey: "AIzaSyAoC5_F0cPDVa6VzhIw8oROl9XrUOsZbkk",
  authDomain: "svelte-tutorial-d905a.firebaseapp.com",
  databaseURL: "https://svelte-tutorial-d905a.firebaseio.com",
  projectId: "svelte-tutorial-d905a",
  storageBucket: "svelte-tutorial-d905a.appspot.com",
  messagingSenderId: "504455153488",
  appId: "1:504455153488:web:5b617a7f764f7b3a678e55"
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();//LA QUE USAREMOS EN EL VIDEO
export const realtime = firebase.database();//JSON DATABASE