import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBYqWUzwXanxk3-w-MtmVARlGuE_0GmsRc",
  authDomain: "real-time-chat-react-a0ac6.firebaseapp.com",
  projectId: "real-time-chat-react-a0ac6",
  storageBucket: "real-time-chat-react-a0ac6.appspot.com",
  messagingSenderId: "906373892",
  appId: "1:906373892:web:c63010b2f946faf9c97e51",
  measurementId: "G-128TB2RJ3W",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
