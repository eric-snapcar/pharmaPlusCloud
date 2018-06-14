const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
exports.addMessage = functions.https.onCall((data, context) => {
  const text = data.text;
  return admin.database().ref('/messages').push({
    text: text,
  }).then(() => {
    return { text: text};
  })
});
