// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyxOx7xDArNn302LKPXimDCa0VWwnjvfg",
  authDomain: "react-book-app-4385c.firebaseapp.com",
  projectId: "react-book-app-4385c",
  storageBucket: "react-book-app-4385c.firebasestorage.app",
  messagingSenderId: "573848485757",
  appId: "1:573848485757:web:768d165eef87d85d2cd614",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
