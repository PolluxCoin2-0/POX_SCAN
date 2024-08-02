import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRVUq1q9h13gmxLYj-tUXFdA2l7_USPUI",
  authDomain: "poxscan-54734.firebaseapp.com",
  projectId: "poxscan-54734",
  storageBucket: "poxscan-54734.appspot.com",
  messagingSenderId: "67491615451",
  appId: "1:67491615451:web:d345714f677140dbdcf2fe",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
