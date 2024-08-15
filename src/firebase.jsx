// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2J6hRauNhC7UjleXptpSBhNFZeAt2FYM",
  authDomain: "my-turf-c70fe.firebaseapp.com",
  projectId: "my-turf-c70fe",
  storageBucket: "my-turf-c70fe.appspot.com",
  messagingSenderId: "304981416364",
  appId: "1:304981416364:web:296f8e48e8a5e6de8a4209",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
