import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDX48y0sAO2kO68UedNCyQLLUTTCegPbck",
    authDomain: "pizza-cf658.firebaseapp.com",
    databaseURL: "https://pizza-cf658.firebaseio.com",
    projectId: "pizza-cf658",
    storageBucket: "",
    messagingSenderId: "392835586013"
};
const firebaseApp = Firebase.initializeApp(config);

const db = firebaseApp.database();

export const dbMenuRef = db.ref('menu');