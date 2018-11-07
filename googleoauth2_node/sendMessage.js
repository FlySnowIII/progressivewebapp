var admin = require("firebase-admin");

var serviceAccount = require("./key/pwaforbooktest1-firebase-adminsdk-l6z9j-72489174d9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pwaforbooktest1.firebaseio.com"
});

// This registration token comes from the client FCM SDKs.
// https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages?authuser=0#WebpushConfig

// var token = 'dN-jy5xGrQI:APA91bE4AdqQDscMiepIwE-vmIXlhLcTOuVmOwe0JxYz8f51E1L-HTO2tD_w4yljOeiNUyAEuRJ2A1NA-Ay_AsdTFVkKulN2RioJon3T1vaVziuQy4GNFw9hBB0haBeIAUTSXDosCaRF';

var topic = 'pwav16-tang';

var fcm_options = {
    "link": "https://pwaforbooktest1.firebaseapp.com/"
}

var data = {
    "title": 'Notifaction from PWAv13',
    "body": 'Hello World',
    "click_action": 'https://pwaforbooktest1.firebaseapp.com/',
    "icon": "https://pwaforbooktest1.firebaseapp.com/icon/apple-touch-icon.png",
    "status": 'This message from Tang'
};

var notification = {
    "title": 'Notifaction from PWAv16',
    "body": 'Have a GoodNight',
};

var androidNotification = {
    "title": "For Android User",
    "body": "Androider Hello!",
    "icon": "https://pwaforbooktest1.firebaseapp.com/icon/apple-touch-icon.png",
    "color": "#2A8EFF",
    "tag": "pwav13",
    "click_action": 'https://pwaforbooktest1.firebaseapp.com/',
};

var android = {
    "ttl": 5000,
    "data": data,
    "notification": androidNotification,
}

var webpush = {
    "data": data,
    "notification": notification,
    "fcm_options": fcm_options
};



var message = {
    "data": data,
    "notification": notification,
    "android": android,
    "webpush": webpush,

    "topic": topic
    // "token" : token
}

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        
        process.exit();
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });

