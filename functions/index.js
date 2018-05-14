const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
admin.initializeApp();
exports.addMessage = functions.https.onRequest((req, res) => {
  const text = req.query.text;
  return admin.database().ref('/messages').push({test: text}).then((snapshot) => {
    return res.redirect(303, snapshot.ref.toString());
  });
});
exports.testHello = functions.https.onRequest((request, response) => {
    response.send("Test Hello");
});
