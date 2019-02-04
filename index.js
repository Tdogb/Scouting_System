var config = {
		apiKey: "AIzaSyDs-eaEU022QCGXE2Owc1mWfnRdeAtj4dI",
		authDomain: "scouting-system-b009f.firebaseapp.com",
		databaseURL: "https://scouting-system-b009f.firebaseio.com",
		projectId: "scouting-system-b009f",
		storageBucket: "scouting-system-b009f.appspot.com",
		messagingSenderId: "140177617153"
		};
firebase.initializeApp(config);

var usersRef = firebase.database().ref("users/");

userRef.set({
	Tigey: {
		number: 10
	},
	Tanner: {
		number: 2
	}
});

console.log(firebase.database().ref('users'));