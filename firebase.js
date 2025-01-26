// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4rc9fZLlR6XPs5v3V1P_HHgMqqJvX_7M",
  authDomain: "codespiritsimulations.firebaseapp.com",
  projectId: "codespiritsimulations",
  storageBucket: "codespiritsimulations.firebasestorage.app",
  messagingSenderId: "661255151049",
  appId: "1:661255151049:web:529dd4a905c4bf69c4dc18",
  measurementId: "G-8CZBDDH8NC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
