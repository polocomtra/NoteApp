import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAJ6DlyvhKkfuPsGZv6KCAn5KEz5OiNfAg",
    authDomain: "notemanagement-8da9c.firebaseapp.com",
    databaseURL: "https://notemanagement-8da9c.firebaseio.com",
    projectId: "notemanagement-8da9c",
    storageBucket: "notemanagement-8da9c.appspot.com",
    messagingSenderId: "596448764586",
    appId: "1:596448764586:web:3ded3c9d0de4322abf26d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const firebaseConnect=firebase.database().ref('data/');