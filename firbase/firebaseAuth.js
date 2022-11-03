

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: process.env.firebase_apikey || "AIzaSyC6MdMEhV9MKCoYJd2KbMqYxmVUM9qpxmw",
  authDomain:process.env.firebase_authDomain|| "covid-dece5.firebaseapp.com",
  projectId:process.env.firebase_projectId|| "covid-dece5",
  storageBucket:process.env.firebase_storageBucket|| "covid-dece5.appspot.com",
  messagingSenderId:process.env.firebase_messagingSenderId|| "766928077881",
  appId:process.env.firebase_appId|| "1:766928077881:web:8252d31f8d0aa4e6f839e8",
  measurementId:process.env.firebase_measurementId|| "G-VNE1EHD1ZG"
};

// Initialize Firebase
// Initialize Firebase
const App = initializeApp(firebaseConfig);


export default App;