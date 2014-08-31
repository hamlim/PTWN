$(document).ready(function() {
  //So I need to develop a simple JS object (essentially storing user data in a JSON array
  //We will need to gather the values from input forms and then insert those values into an array
  //then push that array into a PHP storage script to save it as a plaintext format
  //-----------------------------------------------------------------
  //The below segment of code will take whatever json we have and store it
  //var request = new XMLHttpRequest;
  //request.open("POST", "./store.php", true);
  //request.setRequestHeader("Content-Type", "application/json");
  //var data = JSON.stringify(alltweetsnoformatting);
  //request.send(data);
  //Now we simply need to setup the JSON and then have it called when someone clicks the submit button
  
  /**
    * username.txt
    *     |
    *   stevmith: {
    *     Details: [
    *       Name: "Steve Smith",
    *       Pass: "stevesmith123",
    *       Uname: "Stevmith"
    *     ],
    *     Sections: [
    *       surl: "sports.php",
    *       surl: "science.php",
    *       surl: "c-stevmith-local.php"
    *     ]
    *   }
    *   Notes: 
    *     - surl is the section URL that links up to the sections that the user wants access to
    *     - What the user sees is a top panel with their sections, then a bettom panel for all sections
    *     - the third panel remains as always the homepage panel
    *     - a copy of this json file is stored in local storage, so all you need to do is ask for the uname,
    *     - and check it against that that is stored locally and if it isn't there then check the server (w/ uname + pass)
  */
	var form = $("#account-form");
	var error_elem = $("#form-error");
	var submit = $("#submit");
	//simultaneously from doing all the code and JSON generation I also want to get an email when someone signs up
	// using tutorial from: http://blog.teamtreehouse.com/create-ajax-contact-form
	//we need an event listener for when the form is submitted
  //-----------------------------------------------------------------
	//Frome here on out we are using Parse to handle the user accounts
	
	//initalize the parse app for Currentwire
	Parse.initialize("YgDl0bR96ttn6sU7QZlxg19UpRJYO3bYopYmjnga", "EdbYCzk1mvFZaavibA4oytclJ08iMrQGbhVkcbEZ");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
		alert("yay! it worked");
	});
//	$("#submit").click(function() {
		console.log("form submit button clicked");
		// we need to scheck if the input is valid
		var nameelem = $("#real-name");
		var unameelem = $("#username");
		var emailelem = $("#email");
		var passelem = $("#password");
		
//		if(nameelem.value != ""  && unameelem.value != "" && emailelem.value != "" && passelem.value != ""){
			var user = new Parse.User();
			user.set("username", "matth");
			user.set("password", "test");
			user.set("email", "hamlinm@outlook.com");
			user.set("name", "matt hamlin");
			
			user.signUp(null, {
				success: function(user) {
					console.log("you are logged in");
					//redirect to account page
					window.location.assign("http://n.myrpi.org/account.php");
				},
				error: function(user, error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
//		};
//	});
	
});
                  