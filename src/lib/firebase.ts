import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: "gen-lang-client-0774545150",
  appId: "1:312392244459:web:e4a4d4b97437b9077b72ae",
  apiKey: "AIzaSyCycWlwfUKTZgq3kdz-vqbQUfxQ689rAX4",
  authDomain: "gen-lang-client-0774545150.firebaseapp.com",
  storageBucket: "gen-lang-client-0774545150.firebasestorage.app",
  messagingSenderId: "312392244459"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-ea9af5cb-d3b2-434a-a6c2-c44b88233c04");
export const auth = getAuth(app);
