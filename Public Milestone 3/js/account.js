$(document).ready(function() {
	// the page is loaded in
	
	// we need to initialize parse stuff
	Parse.initialize("YgDl0bR96ttn6sU7QZlxg19UpRJYO3bYopYmjnga", "EdbYCzk1mvFZaavibA4oytclJ08iMrQGbhVkcbEZ");
	
	// now to check if the user is logged in
	var $contentdiv = $("#dynamic-account-content");
	var currentUser = Parse.User.current();
	if (currentUser){
		//now we display stuff
		alert("logged in!");
		console.log(Parse.User.current().attributes());
		// id: dynamic-account-content
		var toput = "<div class='uk-panel'> Welcome "
	} else {
		//now the user needs to login
		alert("NOT logged in!");
	}
});