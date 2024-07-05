import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBS1Kmy3Qa6wYbBV9nnyRkh_ZXtG0Tcjug",
  authDomain: "fir-iii-7f457.firebaseapp.com",
  databaseURL: "https://fir-iii-7f457-default-rtdb.firebaseio.com",
  projectId: "fir-iii-7f457",
  storageBucket: "fir-iii-7f457.appspot.com",
  messagingSenderId: "673769426703",
  appId: "1:673769426703:web:03a991070e7f2c781c387a",
  measurementId: "G-5B12Y77NRN"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export{database}