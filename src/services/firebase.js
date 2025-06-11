// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0paRvDtcdLgz30Lc1PpcLr2MhGCCMnLQ",
  authDomain: "asilifresh-shop.firebaseapp.com",
  projectId: "asilifresh-shop",
  storageBucket: "asilifresh-shop.firebasestorage.app",
  messagingSenderId: "65756538127",
  appId: "1:65756538127:web:376c75223b254583df0a7a"
};
console.log("✅ Firebase initialized successfully!")

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);