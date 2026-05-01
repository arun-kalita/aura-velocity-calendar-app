import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDSlE2tK5E7YnFznZ5WAXTJAAVYMHkmik",
  authDomain: "existence-stream.firebaseapp.com",
  projectId: "existence-stream",
  storageBucket: "existence-stream.firebasestorage.app",
  messagingSenderId: "10030804930",
  appId: "1:10030804930:web:0dbdd40fda35149817305b",
  measurementId: "G-C0JGZ37W5F"
};

const isPlaceholder = firebaseConfig.apiKey === "PLACEHOLDER_API_KEY";
export const isFirebaseConfigured = !isPlaceholder;

let app, db, auth, googleProvider;

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
} else {
  console.warn("Firebase is not configured. Using local-only mode.");
  // Provide mocks or handle in context
}

export { app, db, auth, googleProvider };

// Temporarily disabled to resolve "Pending promise was never set" internal assertion failure
/*
if (typeof window !== 'undefined' && isFirebaseConfigured && db) {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Firebase persistence failed: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.warn('Firebase persistence failed: Browser not supported');
    }
  });
}
*/
