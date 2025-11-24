import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw7HruTqRT18mmOjRPm4kYqmaJi15MWN",
  authDomain: "simple-crm-cbdd6.firebaseapp.com",
  projectId: "simple-crm-cbdd6",
  storageBucket: "simple-crm-cbdd6.firebasestorage.app",
  messagingSenderId: "397789893418",
  appId: "1:397789893418:web:675ff815f7fd8d6a9dc453"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

