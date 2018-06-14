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
exports.addMessageBis = functions.https.onCall((data, context) => {
  const text = data.text;
  // Authentication / user information is automatically added to the request.
  /*
      const uid = context.auth.uid;
      const name = context.auth.token.name || null;
      const picture = context.auth.token.picture || null;
      const email = context.auth.token.email || null;
  */
  const sanitizedMessage = text; // Sanitize the message.
  return admin.database().ref('/messages').push({
    text: sanitizedMessage,
  }).then(() => {
    return { text: sanitizedMessage, test:"TEST" };
  })


});

// onRequest req res return
