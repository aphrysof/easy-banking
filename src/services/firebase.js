import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAM9jItaJ3wrcC6QcCRE_ZOriAt_3f87Pc",
    authDomain: "easy-banking-6ec44.firebaseapp.com",
    projectId: "easy-banking-6ec44",
    storageBucket: "easy-banking-6ec44.appspot.com",
    messagingSenderId: "514516841884",
    appId: "1:514516841884:web:54c23158b6373ce2730459"
  };

const app = initializeApp(firebaseConfig);

//declaring the authentication variable 

export const authentication = getAuth(app)