import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCM9lwJyYUscGFFYoUtgVIkp5Y9sCFpC7A",
  authDomain: "japan-store-b6b95.firebaseapp.com",
  projectId: "japan-store-b6b95",
  storageBucket: "japan-store-b6b95.appspot.com",
  messagingSenderId: "301370738899",
  appId: "1:301370738899:web:ecb7ca7b2f931b234f6c26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;