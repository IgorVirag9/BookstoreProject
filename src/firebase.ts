// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJGez1QWPbT3E1RxVt9oMtqt42wK7Ki0o",
  authDomain: "booksstore-5b2bd.firebaseapp.com",
  databaseURL:
    "https://booksstore-5b2bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "booksstore-5b2bd",
  storageBucket: "booksstore-5b2bd.appspot.com",
  messagingSenderId: "812025827431",
  appId: "1:812025827431:web:ec3c31251d0e1ccbe684c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
