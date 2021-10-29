import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDmPai9RK8yEhgJpR9uCP3GGEcHrjYk0Aw",
  authDomain: "notes4u-97446.firebaseapp.com",
  databaseURL: "https://notes4u-97446-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notes4u-97446",
  storageBucket: "notes4u-97446.appspot.com",
  messagingSenderId: "6853104476",
  appId: "1:6853104476:web:d3ef944806ddc615346799",
  measurementId: "G-9EPQ84957R"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase();


export {app,database};