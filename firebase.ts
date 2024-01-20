// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj6-mrEbARUckeYZ-Wtgb2c98C-sG-KFc",
  authDomain: "ishikawa-drugstore-map.firebaseapp.com",
  projectId: "ishikawa-drugstore-map",
  storageBucket: "ishikawa-drugstore-map.appspot.com",
  messagingSenderId: "904102327245",
  appId: "1:904102327245:web:f4489fcd5c12a745f30a84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
