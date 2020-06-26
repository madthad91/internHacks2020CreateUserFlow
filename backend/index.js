const express = require('express')
const app = express()
const cors = require('cors');
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyAx6-Uf6XelwwNdQ8uHxq8xunBB9QuEKDc",
    authDomain: "hackricechatter.firebaseapp.com",
    databaseURL: "https://hackricechatter.firebaseio.com",
    projectId: "hackricechatter",
    storageBucket: "hackricechatter.appspot.com",
    messagingSenderId: "678522738824"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const port = 8080;

app.use(express.json());
app.use(cors());

app.post('/createUser', (req, res) => {
    console.log(req.body);
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(data=>res.send('user created!'))
        .catch();
});

app.get('/healthCheck', (req, res) => res.send('hello world'));
app.listen(port);