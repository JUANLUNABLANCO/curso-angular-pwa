// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyCJtTYxK32k0QBus48vGLs5VpaICbVticY",
    authDomain: "curso-angular-pwa.firebaseapp.com",
    projectId: "curso-angular-pwa",
    storageBucket: "curso-angular-pwa.appspot.com",
    messagingSenderId: "735057917032",
    appId: "1:735057917032:web:6e4bdf54a2fd72529537dd"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
