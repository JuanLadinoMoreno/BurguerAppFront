import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "toastify-js/src/toastify.css"
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss'




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLmbKwY1-J-26a3zPeFE_xEftIWHByT28",
  authDomain: "burguerroblesapp1.firebaseapp.com",
  projectId: "burguerroblesapp1",
  storageBucket: "burguerroblesapp1.appspot.com",
  messagingSenderId: "930391421029",
  appId: "1:930391421029:web:c15677ae6b6c009a4f168c"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
