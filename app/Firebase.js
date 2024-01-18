// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBlp8Db5bvuh5KNQN1e7QuUTLWhixmNAZA",
	authDomain: "analytics-test-725ab.firebaseapp.com",
	projectId: "analytics-test-725ab",
	storageBucket: "analytics-test-725ab.appspot.com",
	messagingSenderId: "970281632405",
	appId: "1:970281632405:web:20ef43327ed5ef9b01119c",
	measurementId: "G-F0DCDGWB9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
