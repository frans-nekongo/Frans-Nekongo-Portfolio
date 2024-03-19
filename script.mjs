// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
  databaseURL: "https://nekongo-resume-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: 'gs://nekongo-resume.appspot.com'

};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const app = initializeApp(firebaseConfig);

// Initialize Storage and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);


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

// DOCS STUFF HERE

//#Create a Reference
import { getDownloadURL,ref } from "firebase/storage";

//const storage = getStorage();

// Points to the root reference
const storageRef = ref(storage);

// Points to 'Documents'
const docRef = ref(storageRef, 'Documents');
// Points to pdf in 'Documents'
const cvRef = ref(storageRef, 'Documents/Frans Nekongo Resume.pdf');



// // Points to 'Documents/Frans Nekongo Resume.pdf'
// // Note that you can use variables to create child values
//const fileName = 'Frans Nekongo Resume.pdf';


// const resumeRef = ref(docRef, fileName);


//#DOWNLOAD FILE

//const storage = getStorage();

document.getElementById('download-cv-btn').addEventListener('click', function() {
  getDownloadURL(cvRef)
    .then((downloadURL) => {
      // Create a new blob object
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        const blob = xhr.response;

        // Create a link element
        const link = document.createElement('a');

        // Set the href and download attributes of the link
        link.href = URL.createObjectURL(blob);
        link.download = 'Frans Nekongo Resume.pdf';

        // Append the link to the body
        document.body.appendChild(link);

        // Click the link
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
      };
      xhr.open('GET', downloadURL);
      xhr.send();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
  
