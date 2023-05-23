import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
