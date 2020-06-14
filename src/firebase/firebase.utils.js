import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBpC_Pkb8329gkASdlGV_Y49jUr0J8kR8U",
    authDomain: "user-presence-app.firebaseapp.com",
    databaseURL: "https://user-presence-app.firebaseio.com",
    projectId: "user-presence-app",
    storageBucket: "user-presence-app.appspot.com",
    messagingSenderId: "770967970498",
    appId: "1:770967970498:web:b411dc43cbaf866ae0115b",
    measurementId: "G-XC4NSBS2CF"
};

firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore();



export default firebase