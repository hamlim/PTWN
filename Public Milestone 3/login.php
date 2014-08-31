<?php
  /* here we will handle the user requesting access to their account.
    Date: 14/8/14 12:19 pm PST
  */
  
  // First we will need to grab values from the sign-in form that will be on this page.
  
  //Now we need to find the file named username.txt on the server

  //If that is found we need to check that the username and the password match the data stored in the file

  // Now comes the hard stuff, we need to dynamicaly generate a php page with the sections that are stored in their txt file

  // NOTE : Refer to the examples that we did in class first semester sophomore year.



?>
<!DOCTYPE html>
<html>
	<head>
		<title>Login to CurrentWire</title>
		<meta name="mobile-web-app-capable" content="yes"> <!--Allows for mobile app launch. -->
		<meta name="apple-mobile-web-app-cpable" content="yes">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width">
		<meta http-equiv="refresh" content="900">

		<link rel="icon" href="css/icons/add.png"><!-- TODO : Change icon to generic account icon. -->
		<link rel="shortcut icon" sizes="256x256" href="css/icons/add.png">


		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/uikit.css">
		<link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/login.css">

		<meta name="author" content="Matt Hamlin">
		<meta name="keywords" content="CurrentWire, curated, simple, news">
		<meta name="description" content="CurrentWire: The news reimagined">
		<meta name="application-name" content="CurrentWire">
	</head>
	<body>
		<article>
			<section id="form">
				<div id="error"></div>
				<form id="account-form" method="post" action="accounts.php" class="uk-form uk-form-horizontal">
					<fieldset data-uk-margin>
						<div class="field uk-form-row uk-form-horizontal">
							<label for="username">Username: </label>
							<input type="text" id="uname" name="uname" required>
						</div>
						<div class="field uk-form-row">
							<label for="password">Password </label>
							<input type="password" id="password" name="password" required>
						</div>
						<div class="submit uk-form-row">
							<button type="submit" class="ghost-btn">Login</button>
						</div>
					</fieldset>
				</form>
			</section>
		</article>
		<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="js/uikit.min.js"></script>
        <!-- <script src="js/main.js"></script> -->
		<script src="js/accounts.js"></script>
	</body>
</html>