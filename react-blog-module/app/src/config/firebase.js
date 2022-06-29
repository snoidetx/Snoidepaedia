import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnFLy-r2UiExGidL16FtsoWHnueZzoBkU",
  authDomain: "snoidepaedia.firebaseapp.com",
  projectId: "snoidepaedia",
  storageBucket: "snoidepaedia.appspot.com",
  messagingSenderId: "194530065782",
  appId: "1:194530065782:web:1983668c201522ead0ce57",
  measurementId: "G-4CVNZNXB9T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

auth.setPersistence('none');

export const authenticate = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.error(e);
  }
};
