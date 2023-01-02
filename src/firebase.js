
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";   


const firebaseConfig = {
  apiKey: "AIzaSyAQdjUm1xBH_MxH1bOv3pv5M1jUFk0h1ds",
  authDomain: "empl-6f64a.firebaseapp.com",
  projectId: "empl-6f64a",
  storageBucket: "empl-6f64a.appspot.com",
  messagingSenderId: "136958002374",
  appId: "1:136958002374:web:902479a367f67e83a6c3c7"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage()
 export const db = getFirestore()