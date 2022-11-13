// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// import 'firebase/storage'; // <----
// import { getAuth } from 'firebase/auth';
// import * as firebase from 'firebase/app';
// import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   // apiKey: 'AIzaSyDQOgoaVtDKFr46OzMEM_AkwfP1LpFuHkU',
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDQOgoaVtDKFr46OzMEM_AkwfP1LpFuHkU',

  authDomain: 'virya-e55ef.firebaseapp.com',

  projectId: 'virya-e55ef',

  storageBucket: 'virya-e55ef.appspot.com',

  messagingSenderId: '115885637528',

  appId: '1:115885637528:web:0a4c6091b4b92c0732f5ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
