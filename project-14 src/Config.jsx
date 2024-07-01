import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1CPeRmUZSIpQfjbil8m6sR3NbUagQLEM",
  authDomain: "project-14-85606.firebaseapp.com",
  projectId: "project-14-85606",
  storageBucket: "project-14-85606.appspot.com",
  messagingSenderId: "761647013479",
  appId: "1:761647013479:web:3916f109c12b0adfe0bec2",
  measurementId: "G-KSY491YGVM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}