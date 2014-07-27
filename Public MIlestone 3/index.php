<!DOCTYPE html>
<html>
	<head>
		<title>CurrentWire</title>
		<meta name="mobile-web-app-capable" content="yes"> <!--Allows for mobile app launch. -->
		<meta name="apple-mobile-web-app-cpable" content="yes">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width">
		<meta http-equiv="refresh" content="900">
		
		<link rel="icon" href="css/icons/globe.png">
		<link rel="shortcut icon" sizes="256x256" href="css/icons/globe.png">
		
			
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/uikit.css">
		<link rel="stylesheet" href="css/main.css">
		
		<meta name="author" content="Matt Hamlin">
		<meta name="keywords" content="CurrentWire, simple, news">
		<meta name="description" content="CurrentWire: The news reimagined">
		<meta name="application-name" content="CurrentWire">
	</head>
	<body>
		<header>
			<!-- first the basic header structure. -->
			<nav>
				<div class="uk-grid">
					<h3 class="sections uk-width-1-3 uk-text-center"><a href="#section" data-uk-offcanvas class="nolink uk-container-center">Sections</a></h3>
					<h1 class="centre-title uk-width-1-3 uk-text-center"><span class="uk-container-center">Welcome to CurrentWire</span></h1><!-- NOTE: this will change when we introduce multiple sections-->
					<h3 class="about right-title uk-width-1-3 uk-text-center"><a href="#about" data-uk-offcanvas class="nolink uk-container-center">About</a></h3>
				</div>
			</nav>
		</header>
		<!-- Bellow are the divs for doing the off canvas navigation and information about the site. -->
		<!-- for the navigation. -->
		<div class="uk-offcanvas" id="section">
			<div class="uk-offcanvas-bar">
				<div class="uk-panel uk-panel-header">
					<h2 class="uk-panel-title">News Sections:</h2>
					<ul class="uk-nav uk-nav-offcanvas" data-uk-nav>
						<li class="uk-active"><a href="index.php" title="World News">World News</a></li>
						<li><a href="sports.php" title="Sports News">Sports News</a></li>
						<li><a href="business.php" title="Business News">Business News</a></li>
						<li><a href="technology.php" title="Technology News">Technology News</a></li>
						<li><a href="science.php" title="Science News">Science News</a></li>
<!--
						<li><a href="alt-sports.php" title="Alternative Sports">Alt-Sports News</a></li>
-->
					</ul>
				</div>
			</div>
		</div>
		<!-- for the about information. -->
		<div class="uk-offcanvas" id="about">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-flip">
				<div class="uk-panel">
					<h1 class="uk-panel-title">About CurrentWire:</h1>
					<p>CurrentWire was developed by Matt Hamlin (on Twitter: <a href="https://twitter.com/immatthamlin" target="_newtab">@immatthamlin</a>) over spring break (2014) at RPI. The idea was developed and then implemented using the Twitter API. You can find more work by Matt <a href="http://hamlim.campuslist.myrpi.org" target="_newtab">here</a>.</p>
				</div>
				<div class="uk-panel">
					<h1 class="uk-panel-title">Formatting:</h1>
					<p>Some may ask why the text formatting is the way that it is. The reason why these tweets don't look like other tweets on the web is because we at Forge Labs don't believe that the formatting of the tweets as provided from Twitter provides an easy way to read the content. We have kept all the classes and data the same for every element because we believe that the semantic data is important.</p>
				</div>
				<div class="uk-panel">
					<h1 class="uk-panel-title">What are these numbers in circles?</h1>
					<p>The numbers in the circles represent the score of the tweet. We have developed an advanced algorithm to track the trustworthiness of the sources and factor in the trustworthiness to calculate the score of specific tweets. This process is the method that we use to rank the tweets. The higher the score the more we think that that tweet is important to you.</p>
				</div>
				<div class="uk-panel">
					<h1 class="uk-panel-title">The website is not rendering properly for me!</h1>
					<p>Reach out to <a href="https://twitter.com/immatthamlin" target="_newtab">@immatthamlin</a> on twitter or email Matt at hamlim@outlook.com! We try to get back to every email or tweet; if you are tweeting use the hashtag #ptwn so we can find your questions easier.</p>
				</div>
			</div>
		</div>
		<article class="uk-grid">
			<div class="error-modal uk-modal">
				<div class="uk-modal-dialog">
					<h1>We're sorry but we can't retrieve any tweets right now.</h1>
					<p>Talk about a fail whale!</p>
				</div>
			</div>
			<div class="welcome-modal uk-modal">
				<div class="uk-modal-dialog">
					<h1>Welcome to CurrentWire!</h1>
				</div>
			</div>
			<section class="uk-align-center uk-panel uk-panel-space uk-panel-divider uk-panel-box uk-panel-box-secondary uk-container-center my-width">
				<h3 class="uk-panel-title my-title">What is CurrentWire?</h1>
				<p>CurrentWire is a curated news feed for you, the user. CurrentWire is full of sections that are created by curation specialists to create a better news reading experience. We the editors add in new secttions almost everyday!</p>
			</section>
			<section class="uk-align-center uk-panel uk-panel-space uk-panel-divider uk-panel-box uk-panel-box-secondary uk-container-center my-width">
				<h3 class="uk-panel-title my-title">How can I customize my experience?</h3>
				<p>Easily! Simply sign-up for an account (which is currently free) and you can enter news feeds into the form, or simply provide us with a subject that you want news on or about and we can make the feed for you!</p>
			</section>
			<section class="uk-align-center uk-panel uk-panel-space uk-panel-divider uk-panel-box uk-panel-box-secondary uk-container-center my-width">
				<h3 class="uk-panel-title my-title">Sign-Up Now!</h3>
				<p>Click the button below to begin signing up!</p>
				<button id="sign-up-button" type="button" title="Sign-Up">Sign-Up!</button>
			</section>
			<section class="uk-text-center uk-align-center uk-panel uk-panel-box uk-panel-box-secondary uk-container-center my-width-footer">
				<span>CurrentWire was developed independently by Matt Hamlin at Forge Labs. </span>
			</section>
		</article>
		
		
		<!-- Include the important scripts. -->
		<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="js/uikit.min.js"></script>
		<script src="js/main.js"></script>
			
	</body>
</html>