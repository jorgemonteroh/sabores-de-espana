// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaFnFuEl46Lr_pW83lcmWcGe5la6OaZp0",
  authDomain: "tfg-web-firebase.firebaseapp.com",
  projectId: "tfg-web-firebase",
  storageBucket: "tfg-web-firebase.appspot.com",
  messagingSenderId: "396815260813",
  appId: "1:396815260813:web:834bf0c2c3f427b89116c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);