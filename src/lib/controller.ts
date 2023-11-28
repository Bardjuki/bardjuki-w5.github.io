import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app)

// Collection Ref
export const colRef = collection (firestore, 'Users')