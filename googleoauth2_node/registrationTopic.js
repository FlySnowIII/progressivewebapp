var admin = require("firebase-admin");

var serviceAccount = require("./key/pwaforbooktest1-firebase-adminsdk-l6z9j-72489174d9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pwaforbooktest1.firebaseio.com"
});

var topic = 'pwav16-tang';

// These registration tokens come from the client FCM SDKs.
var registrationTokens = [
    'e3fqwq09drE:APA91bH0ACjEU9Ogmd0zhSFHitTBLe2INXZfqrc9yRPhYW0DW7-M8zHqNJStMZfWaWO-PN-AYZLRp2_TVLFAoORxNZ4XpS-r0DFyro6U75bdkuw-D2B3Zfq0UgekZqDmZ79JyBD1VU17',
    'eYTDrP0xoJk:APA91bEctnORr9qmua65ASvqQrcwUIlFLjEBMzlEEQTmwA5M1j_OdjXMlvYxVgKS-ZweWTAELxhNasWKYZzs6wqIQwH6uOXQnV2PJuiC5q-BR5ZDhGpL0uP3NO9z5TOk8kmkjv89Ansi',
];

// Unsubscribe the devices corresponding to the registration tokens from
// the topic.
admin.messaging().subscribeToTopic(registrationTokens, topic)
    .then(function (response) {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        console.log('Successfully subscribeToTopic from topic:', response);
        process.exit();
    })
    .catch(function (error) {
        console.log('Error subscribeToTopic from topic:', error);
    });

