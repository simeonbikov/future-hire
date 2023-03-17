// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDKlLBo4b4JmbwAGEorIGXPVJ6MiJ2MecE",
	authDomain: "future-hire-22fb1.firebaseapp.com",
	projectId: "future-hire-22fb1",
	storageBucket: "future-hire-22fb1.appspot.com",
	messagingSenderId: "886754990559",
	appId: "1:886754990559:web:9aa31ee0938c95613e4c6a",
};

// export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
