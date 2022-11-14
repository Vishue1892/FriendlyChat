/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 //import { initializeApp } from "firebase/app";

const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyAt706hj94wBhwHixiX9bXo8fwXVBzFWuw",
  authDomain: "friendlychat-f5cd0.firebaseapp.com",
  projectId: "friendlychat-f5cd0",
  storageBucket: "friendlychat-f5cd0.appspot.com",
  messagingSenderId: "842749942325",
  appId: "1:842749942325:web:6548db132c57198bad2f7c"
};
//const app = initializeApp(config);
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}