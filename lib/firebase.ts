// firebase.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWE4lqcaSCDEnizFQWYNr1xRVnCaN-6U0",
  authDomain: "makeviews-ea1af.firebaseapp.com",
  projectId: "makeviews-ea1af",
  storageBucket: "makeviews-ea1af.appspot.com",
  messagingSenderId: "177700333086",
  appId: "1:177700333086:web:e8ae1b4bdd49d27bb2300f",
  measurementId: "G-2EJTRMKHR5",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
