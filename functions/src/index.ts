import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const getBostonWeather = functions.https.onRequest(
  (request, response) => {
    admin
      .firestore()
      .doc("Cities/boston-ma-us")
      .get()

      .then(snapshot => {
        const data = snapshot.data();
        response.send(data);
      })

      .catch(error => {
        //Handle the error

        console.log(error);
        response.status(500).send(error);
      });
  }
);
