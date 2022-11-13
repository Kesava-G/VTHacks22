// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export default storage;