$(document).ready(function() {
	//Parse initialization
	Parse.initialize("qTzkTI43BVTetq2BLGSaTnFRotYoxBrYXqufwo58", "51Dg6n7ImCznUABFLs5t1wkxON3V5cZSoKMXOUIG");
	$("#submit").click( function() {
		console.log("form submit button clicked");
		var $inputs = $('#account-form :input');
		
		var values = {};
		$inputs.each(function() {
			values[this.name] = $(this).val();
		});
		console.log(values["uname"]);
		if(values["uname"] != "" && values["password"] != ""){
			//input is there
//			Parse.User.logIn(values["uname"], values["password"], {
//				success: function(user){
//					//successfully loged in
//					window.location.href = "http://n.myrpi.org/account.php";
//				},
//				error: function(user, error){
//					console.log("Error: " + error.code + " " + error.message);
//				}
//			});
		}
	});
});