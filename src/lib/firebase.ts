import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDsxq6Fusu6agr8c4IjipP7MPCcwJ4aqVs",
  authDomain: "database-que.firebaseapp.com",
  projectId: "database-que",
  storageBucket: "database-que.appspot.com",
  messagingSenderId: "969772474016",
  appId: "1:969772474016:web:f46d12dd291a118e9973c5",
  measurementId: "G-8FS361VPPC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

