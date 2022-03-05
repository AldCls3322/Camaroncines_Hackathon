// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB2aF6HuLi_F5FiSm2rW8RgEDLd4sd_hQ",
  authDomain: "camaroncinesdiscorruption.firebaseapp.com",
  projectId: "camaroncinesdiscorruption",
  storageBucket: "camaroncinesdiscorruption.appspot.com",
  messagingSenderId: "38563945847",
  appId: "1:38563945847:web:61aacc046261d87f101572"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

//promesa
export const saveTask = (nombreDte, edadDte, trabajoDte, generoDte, estudioDte, emailDte, start, lugar, evento, nombreDdo, trabajoDdo) => {
    addDoc(collection(db, 'denuncias'),{nombreDte, edadDte, trabajoDte, generoDte, estudioDte, emailDte, start, lugar, evento, nombreDdo, trabajoDdo})
}