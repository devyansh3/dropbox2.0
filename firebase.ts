import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-Bzq1Dz5YcqFBX-SNZ0zOmydIzmJ1tQQ",
  authDomain: "dropbox2-8e5f3.firebaseapp.com",
  projectId: "dropbox2-8e5f3",
  storageBucket: "dropbox2-8e5f3.appspot.com",
  messagingSenderId: "1091144090284",
  appId: "1:1091144090284:web:6785f4abe043740e9a5509",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig); // if the app is already initialized, just return. Otherwise initialize the app. i.e. singleton instance pattern
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
