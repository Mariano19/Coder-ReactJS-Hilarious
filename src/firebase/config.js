import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBLP54jC0XGGL9NJue7B5pAf8Z94-ZI0E",
  authDomain: "project-hilarious.firebaseapp.com",
  projectId: "project-hilarious",
  storageBucket: "project-hilarious.appspot.com",
  messagingSenderId: "494909609357",
  appId: "1:494909609357:web:dbe40d5475070c813a59c4",
  measurementId: "G-GT164NJL5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function getFirestoreApp() {
    return app
}