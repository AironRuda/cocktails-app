import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0kKmMi8AVe8osf2BuNo_yHb1GK4rRcqM",
  authDomain: "cocktails-app-859d8.firebaseapp.com",
  projectId: "cocktails-app-859d8",
  storageBucket: "cocktails-app-859d8.appspot.com",
  messagingSenderId: "695480702165",
  appId: "1:695480702165:web:ffcf1ac546befe03ca3e5c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
