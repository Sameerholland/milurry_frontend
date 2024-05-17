import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "<YOUR FIREBASE API KEY>",
  authDomain: "<YOUR FIREBASE AUTHDOMAIN>",
  projectId: "<YOUR PROJECT ID>",
  storageBucket: "<YOUR STORAGEBUCKET HERE>",
  messagingSenderId: "<YOUR FIREBASE MESSAGING SENDER ID>",
  appId: "<YOUR APP ID HERE>
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imagedb = getStorage(app)
export const auth = getAuth(app);
export default app;
