var admin = require("firebase-admin");

var serviceAccount = require("./key/pwaforbooktest1-firebase-adminsdk-l6z9j-72489174d9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pwaforbooktest1.firebaseio.com"
});

var topic = 'pwav16-tang';

// These registration tokens come from the client FCM SDKs.
var registrationTokens = [
    'fsj4BVQsoiw:APA91bFN4slv1_plg5CH5SfsRAR6BDIUyz5RHAB1Z_Guom5N-2w4XbpB7XWxzvAS2dn0_2k38gB7zG-z0v_uTbYke68DBBBUCR43Z8hhj1opMx-sITaze8fNleXBhf6NLpge4rbFufso',
    'enKtx60hBSI:APA91bHyEjc3ZSTkVdPu3zx8eukuLZFJ7oRGCVLZ0PWQ5WmCuIPGDDldCPT20tICsdtEkgVZtckF7vL40QUaaBjmp25-mDKDy_OL4swCMMjXAGl1N4KenCJXwtmJHhmhfi-t8_E5NCrJ',
    'f4-T9Ralvts:APA91bHF04KWG2F7dTxZByOqevwnUL5hF8h_p9r64tcOHUWHr1iAj8AOzz1ZB8cn4oOCrNbGQ5O6jlcZvLyih9-Staf9sfKwnxMYhhuTNp6_TGGVga7xVvT-yaEI3wRCB7P-HSXsSSc7',
    'ejyYTxla2r0:APA91bGv-GiiGdcvJSYnlWdspcC4sX2lwYJ9IKy99paOEbQ0islHlIPMBQPg9fB9wTqPLFhbece1GEQKbtEPotR3I0OOyqG_kdwV7nrWKmiqWaxw44HRUVHa2DsrcO-T_HW5D0sAq3F1',
];

// Unsubscribe the devices corresponding to the registration tokens from
// the topic.
admin.messaging().unsubscribeFromTopic(registrationTokens, topic)
    .then(function (response) {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        console.log('Successfully unsubscribeFromTopic from topic:', response);
        process.exit();
    })
    .catch(function (error) {
        console.log('Error unsubscribeFromTopic from topic:', error);
    });

