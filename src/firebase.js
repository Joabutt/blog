import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm_eShMSnvpt1acx1FVhMOmzTaXZfbcyU",
  authDomain: "blog-6a25f.firebaseapp.com",
  databaseURL: "https://blog-6a25f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-6a25f",
  storageBucket: "blog-6a25f.appspot.com",
  messagingSenderId: "1023955090573",
  appId: "1:1023955090573:web:49fb2ed0f0f80d094136c4",
  measurementId: "G-C8SHHXW53N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
