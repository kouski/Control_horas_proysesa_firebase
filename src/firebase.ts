import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBgCAtnL7nQ2zCdPe2-3iGs8Jhz8NH99F8",
  authDomain: "control-horas-proysesa.firebaseapp.com",
  projectId: "control-horas-proysesa",
  storageBucket: "control-horas-proysesa.firebasestorage.app",
  messagingSenderId: "281923267568",
  appId: "1:281923267568:web:a32b34531be9d046d40b35",
  measurementId: "G-65ZZRQVGQW"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
