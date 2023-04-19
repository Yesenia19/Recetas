 // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUJF8JhK10OC7Mdnia6hu9dikHRaNy7Lo",
  authDomain: "proyecto-716b9.firebaseapp.com",
  databaseURL: "https://proyecto-716b9-default-rtdb.firebaseio.com",
  projectId: "proyecto-716b9",
  storageBucket: "proyecto-716b9.appspot.com",
  messagingSenderId: "79981208811",
  appId: "1:79981208811:web:598ad7c1defae527b74aae",
  measurementId: "G-37ZKHLEPX8"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
// det database variable
const database =firebase.database();

var user_ref = database.ref('Recetas' )
user_ref.on('value', function(snapshot){
    var data = snapshot.val()
    console.log(data)
})

