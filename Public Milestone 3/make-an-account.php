<?php
	



?>
<!DOCTYPE html>
<html>
	<head>
		<title>Create A CurrentWire Account!</title>
		<meta name="mobile-web-app-capable" content="yes"> <!--Allows for mobile app launch. -->
		<meta name="apple-mobile-web-app-cpable" content="yes">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width">
		<meta http-equiv="refresh" content="900">

		<link rel="icon" href="css/icons/add.png">
		<link rel="shortcut icon" sizes="256x256" href="css/icons/add.png">
		
		<!-- Parse JS -->
		<script src="//www.parsecdn.com/js/parse-1.2.19.min.js"></script>

		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/uikit.css">
		<link rel="stylesheet" href="css/main.css">

		<meta name="author" content="Matt Hamlin">
		<meta name="keywords" content="CurrentWire, curated, simple, news">
		<meta name="description" content="CurrentWire: The news reimagined">
		<meta name="application-name" content="CurrentWire">
	</head>
	<body>
		<article>
          <section id="form">
            <div id="error"></div>
            <form id="account-form" method="post" class="uk-form uk-form-horizontal">
              <fieldset data-uk-margin>
                <div class="field uk-form-row uk-form-horizontal">
                  <label for="name">Name: </label>
                  <input type="text" id="name" name="name" required>
                </div>
                <div class="field uk-form-row">
                  <label for="uname">Username: </label>
                  <input type="text" id="uname" name="uname" required>
                </div>
                <div class="field uk-form-row">
                  <label for="email">Email: </label>
                  <input type="text" id="email" name="email" required>
                </div>
                <div class="field uk-form-row">
                  <label for="password">Password: </label>
                  <input type="password" id="password" name="password" required>
                </div>
                <div class="submit uk-form-row" id="form-submit">
                  <button type="submit" class="ghost-btn" id="submit">Register!</button>
                </div>
              </fieldset>
            </form>
          </section>
		</article>
		<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="js/uikit.min.js"></script>
		<script src="js/makeaccount.js"></script>
	</body>
</html>