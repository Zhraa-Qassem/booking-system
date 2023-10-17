// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOmaHghVEUOsYbL9nz08oRUO3ETqEuR-E",
  authDomain: "routes-e0992.firebaseapp.com",
  projectId: "routes-e0992",
  storageBucket: "routes-e0992.appspot.com",
  messagingSenderId: "281709740106",
  appId: "1:281709740106:web:81e20debd9d88ccb9026b3",
  measurementId: "G-35WYWZ0QBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);