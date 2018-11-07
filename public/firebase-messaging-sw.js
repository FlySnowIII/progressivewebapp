importScripts("https://www.gstatic.com/firebasejs/5.5.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.7/firebase-messaging.js");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiVp-50qSTOGHurgE-QOqa3UME8rNJIGU",
    authDomain: "pwaforbooktest1.firebaseapp.com",
    databaseURL: "https://pwaforbooktest1.firebaseio.com",
    projectId: "pwaforbooktest1",
    storageBucket: "pwaforbooktest1.appspot.com",
    messagingSenderId: "985688936764"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = payload.data.title;
    var notificationOptions = {
        body: payload.data.body,
        icon: "/firebase-logo.png",
        click_action : payload.data.click_action
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});