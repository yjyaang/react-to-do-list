// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSUjLqcMeLYp_cACR8O8OeyshnPGWPGyk",
    authDomain: "my-todo-app-5c148.firebaseapp.com",
    projectId: "my-todo-app-5c148",
    storageBucket: "my-todo-app-5c148.appspot.com",
    messagingSenderId: "997332377285",
    appId: "1:997332377285:web:c05e4ba588c2519417daac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };