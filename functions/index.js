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
exports.addMessage = functions.https.onCall((data, context) => {
  const text = data.text;
  return admin.database().ref('/messages').push({
    text: text,
  }).then(() => {
    return { text: text};
  })
});
exports.createUser = functions.https.onCall((data, context) => {
  const email = data.email;
  const id = data.id;
  return admin.database().ref('users/' + id).set({
    email: email,
  }).then(() => {
    return { email: email,id:id};
  })
});
