var admin = require("firebase-admin");

var serviceAccount = require("./key/pwaforbooktest1-firebase-adminsdk-l6z9j-72489174d9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pwaforbooktest1.firebaseio.com"
});

// This registration token comes from the client FCM SDKs.
var registrationToken = 'dvRi37ROlDc:APA91bEEzFvxQ1NHMfeCb_5Pf2Cad5mLxDg66TScAMWItIow-dmW88AAh7TPBFZLL-UCfRCGoW22qaXKMXLy9S8fhbofsCQXHnLVHxA2AEk7yBzFZ1wjjKBGUWeGLDBn7GUC7ughoEzN';

// See documentation on defining a message payload.
var message = {
    data: {
        score: '850',
        time: '2:45',
        status: 'Hi this is Pengfei!',
    },
    token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        return ;
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });