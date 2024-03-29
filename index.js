 // Initialize Firebase
  // my web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyD2ea1WTnXPeH4l1cv0B1FeC9L6dcaHJKY",
    authDomain: "assignment-e87c8.firebaseapp.com",
    databaseURL: "https://assignment-e87c8.firebaseio.com",
    projectId: "assignment-e87c8",
    storageBucket: "assignment-e87c8.appspot.com",
    messagingSenderId: "126061342264",
    appId: "1:126061342264:web:80007293aa1b44d1e280cd",
    measurementId: "G-YNZPMNLJ46"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Refrence users collection
  var messagesRef= firebase.database().ref('users');

  // Listen for form submit
  document.getElementById('myform').addEventListener('submit', formSubmit);

  // Submit form
  function formSubmit(e) {
  e.preventDefault();

  // Get values
  var user= getInputVal('user');
  var email= getInputVal('email');
  var contact= getInputVal('contact');

  			// Save message
			saveMessage(user, email, contact);

			// Show alert
			document.querySelector('.alert').style.display= 'block';
}



// Functions to get the form values
function getInputVal(id){
	return document.getElementById(id).value;
}

		//Save message to firebase
		function saveMessage(user, email, contact){

			var newMessageRef= messagesRef.push();
			newMessageRef.set({

			user: user,
			email: email,
			contact: contact,	



			});
	
		}


  



