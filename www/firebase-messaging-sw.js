importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');
 
firebase.initializeApp({
    apiKey: "AIzaSyBq60nK7Gidna-GTQZDx7tptj7uAR5rl6Y",
    authDomain: "fu8a-10a3f.firebaseapp.com",
    projectId: "fu8a-10a3f",
    storageBucket: "fu8a-10a3f.appspot.com",
    messagingSenderId: "381582243260",
    appId: "1:381582243260:web:e983eee38074b69b80e7b9",
    measurementId: "G-V9V61QWYM1"
});
 
const messaging = firebase.messaging();
console.log('load firebase-messagiging-sw.js')