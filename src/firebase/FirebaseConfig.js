import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRq6eOlPUPxi5CbTCLAuSgwz7HkdndeU0",
  authDomain: "soda-app-back.firebaseapp.com",
  projectId: "soda-app-back",
  storageBucket: "soda-app-back.appspot.com",
  messagingSenderId: "544574541395",
  appId: "1:544574541395:web:f8d6a19f70bab59c7500a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)