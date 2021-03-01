import firebase from 'firebase/app';
import "@firebase/firestore";


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app =  firebase.initializeApp({
    apiKey: "AIzaSyCK_v5jUGGML5ripEoUAKyJrF_Px9XEW0c",
    authDomain: "a-mark.firebaseapp.com",
    projectId: "a-mark",
    storageBucket: "a-mark.appspot.com",
    messagingSenderId: "74765623920",
    appId: "1:74765623920:web:9307697f51444d30d24ab5",
    measurementId: "G-K93RF1YQP7"
});

export const getFirebase = () => {
    return app;
}
export const getFirestore = () => {
    return firebase.firestore(app);
}