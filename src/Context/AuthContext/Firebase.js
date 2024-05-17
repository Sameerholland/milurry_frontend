import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrhDgiNmtE7fZDQnViySC0HGLLdgQSovo",
  authDomain: "project1-5409a.firebaseapp.com",
  projectId: "project1-5409a",
  storageBucket: "project1-5409a.appspot.com",
  messagingSenderId: "805975539559",
  appId: "1:805975539559:web:0a7da85483441e91edb9c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imagedb = getStorage(app)
export const auth = getAuth(app);
export default app;