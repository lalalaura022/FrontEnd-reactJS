import { getDatabase, startAfter } from "firebase/database"
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIWDWbHK9jkmBcxJsRTiKw5NkEilLgg6w",
  authDomain: "proiect-frontend-7770a.firebaseapp.com",
  projectId: "proiect-frontend-7770a",
  storageBucket: "proiect-frontend-7770a.appspot.com",
  messagingSenderId: "419953526186",
  appId: "1:419953526186:web:b11d7e4ceed2afb20e97d3",
  measurementId: "G-6SHXG2E2P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
export const auth = getAuth(app);