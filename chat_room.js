//Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCfXfORGd37dzdGIQNqKP7oSmnfCoGv-Po",
    authDomain: "lets-chat-89435.firebaseapp.com",
    projectId: "lets-chat-89435",
    storageBucket: "lets-chat-89435.appspot.com",
    messagingSenderId: "1009522795921",
    appId: "1:1009522795921:web:a675fdefce350ca6b0a630",
    measurementId: "G-DSPBCXLNDF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name
room_name

firebase.database().ref(room_name).push({
    name: user_name,
    massage: msg,
    like: 0
});
