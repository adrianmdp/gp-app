// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhPZJwpxhMT3qg7PGKvjajP61Qjz8sWzk",
  authDomain: "green-power-f412e.firebaseapp.com",
  projectId: "green-power-f412e",
  storageBucket: "green-power-f412e.appspot.com",
  messagingSenderId: "365377647514",
  appId: "1:365377647514:web:f708e8a9af621befed0023",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
