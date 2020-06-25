import React from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAx6-Uf6XelwwNdQ8uHxq8xunBB9QuEKDc",
    authDomain: "hackricechatter.firebaseapp.com",
    databaseURL: "https://hackricechatter.firebaseio.com",
    projectId: "hackricechatter",
    storageBucket: "hackricechatter.appspot.com",
    messagingSenderId: "678522738824"
  };
  firebase.initializeApp(config);


function test(){
    let emailInput = document.getElementById('email');
    alert(`Your email is ${emailInput.value}`)
    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: 'http://localhost:3000/createUser2?cartId=1234',
        // This must be true.
        handleCodeInApp: true
    }

    firebase.auth().sendSignInLinkToEmail(emailInput.value, actionCodeSettings)
        .then(function() {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', emailInput.value);
        })
        .catch(function(error) {
            // Some error occurred, you can inspect the code: error.code
        });

}

function CreateUser() {
    return (
      <div>
        <h2>CreateUser</h2>
        <input id="email" type="email"/>
        <div></div>
        <button onClick={test}>click me</button>
      </div>
    );
  }

export default CreateUser;