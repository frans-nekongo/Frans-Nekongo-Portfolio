// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const app = initializeApp(firebaseConfig);

// Check if Firebase Analytics is supported before initializing
if (typeof window !== "undefined" && isSupported()) {
  const analytics = getAnalytics(app);
  // Additional analytics configuration or tracking can be done here
} else {
  console.warn('Firebase Analytics is not supported in this environment.');
}

// Your function to toggle the menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Check if running in a browser environment before adding event listener
if (typeof window !== "undefined") {
  // Event listener to call the toggleMenu function when needed
  document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
}

// The rest of your script...
