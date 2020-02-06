const firebase = require('firebase');
const db = firebase.initializeApp({

    apiKey: "AIzaSyCOQcG5zVbMYaoG_LoAX_0NoX5-lUGlep4",
    authDomain: "cerberus-fractalia.firebaseapp.com",
    databaseURL: "https://cerberus-fractalia.firebaseio.com",
    projectId: "cerberus-fractalia",
    storageBucket: "cerberus-fractalia.appspot.com",
    messagingSenderId: "863328238295",
    appId: "1:863328238295:web:a03c978ffc4c52eb1b8e92",
    measurementId: "G-QCRG60VQPF"
});

module.exports = db;