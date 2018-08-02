import * as firebase from 'firebase';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_YZHl0L4yjRr_zYS5xCucibQgYGqBlkU",
    authDomain: "patient-tracker-d313c.firebaseapp.com",
    databaseURL: "https://patient-tracker-d313c.firebaseio.com",
    projectId: "patient-tracker-d313c",
    storageBucket: "patient-tracker-d313c.appspot.com",
    messagingSenderId: "209066642636"
  };
  firebase.initializeApp(config);

export const fireDB = firebase.database()
export const fireAuth = firebase.auth()
export const fireStore = firebase.storage()
