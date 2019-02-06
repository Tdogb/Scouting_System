 frontend
document.getElementById('date').innerHTML = new Date().toDateString();
=======
var config = {
		apiKey: "AIzaSyDs-eaEU022QCGXE2Owc1mWfnRdeAtj4dI",
		authDomain: "scouting-system-b009f.firebaseapp.com",
		databaseURL: "https://scouting-system-b009f.firebaseio.com",
		projectId: "scouting-system-b009f",
		storageBucket: "scouting-system-b009f.appspot.com",
		messagingSenderId: "140177617153"
		};
firebase.initializeApp(config);


      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        // [START authanon]
        firebase.auth().signInAnonymously().catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/operation-not-allowed') {
            alert('You must enable Anonymous auth in the Firebase Console.');
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        });
        // [END authanon]
      }
      //document.getElementById('quickstart-sign-in').disabled = true;
    

// //var firebase = require('firebase');
// //var firebaseui = require('firebaseui');

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     // List of OAuth providers supported.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   // Other config options...
// });

var userRef = firebase.database().ref('teams');

userRef.set({
	Tigey: {
		number: 10
	},
	Tanner: {
		number: 2
	}
});

console.log(firebase.database().ref('teams'));
 master
