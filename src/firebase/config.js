import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3-S6lTxKxTXsIdpH1eJS7zXQRhj_tbLU",
  authDomain: "miniblog-932b1.firebaseapp.com",
  projectId: "miniblog-932b1",
  storageBucket: "miniblog-932b1.appspot.com",
  messagingSenderId: "240222083760",
  appId: "1:240222083760:web:97269d3c3be84f16ccf975"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export { db, auth } 