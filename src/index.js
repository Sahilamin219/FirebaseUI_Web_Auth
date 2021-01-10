import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
// const config={
// 	apiKey: "AIzaSyBx-6hndhYVZEgSCLberx4wfQZBCua7LnE",
//     authDomain: "xpressdawadev.firebaseapp.com",
//     projectId: "xpressdawadev",
//     storageBucket: "xpressdawadev.appspot.com",
//     messagingSenderId: "317891675877",
//     appId: "1:317891675877:web:3d3bff314519aa3b15760c",
//     measurementId: "G-NFEY501TB2"
// }
// firebase.initializeApp(config);
// firebase.auth().languageCode = 'it';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
