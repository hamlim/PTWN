<?php
	//require the proper twitter api class
	require_once('TwitterAPIExchange.php');
	
	//settings array including the application keys and secrets
	$settings = array(
			'oauth_access_token' => "118285131-FEeelL3wqjL1D0pk4x7L5CFyO36by8u824deVuqF",
			'oauth_access_token_secret' => "XJY54i1lNkEW5fdX2yFU38IddlVuhYzFwgl8p7z7CJr07",
			'consumer_key' => "XXn7b4ZknFWQIv5459u51g",
			'consumer_secret' => "cdDYhDuNwmvHWSe6iWTmTxX1SgHqtZLQU9S39uES9k"
	);
	//base uri for retreiving the tweets
	$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	
	//get fields for each news source
	//I am sure that this could be developed in a for loop but I will
	// simplify it as is for now (NOTE)
	$getfields1 = '?screen_name=cnnbrk&count=10';
	$getfields2 = '?screen_name=BBCBreaking&count=10';
	$getfields3 = '?screen_name=nytimes&count=10';
	$getfields4 = '?screen_name=Reuters&count=10';
	$getfields5 = '?screen_name=AP&count=10';
	$getfields6 = '?screen_name=WSJ&count=10';
	$getfields7 = '?screen_name=Breakingnews&count=10';
	$getfields8 = '?screen_name=CNN&count=10';
	$getfields9 = '?screen_name=BBCWorld&count=10';
	$getfields10 = '?screen_name=TheEconomist&count=10';
	$getfields11 = '?screen_name=TIME&count=10';
	$getfields12 = '?screen_name=HuffingtonPost&count=10';
	$getfields13 = '?screen_name=ABC&count=10';
	$getfields14 = '?screen_name=nprnews&count=10';
	$getfields15 = '?screen_name=WashingtonPost&count=10';
	
	//determine the method to request the tweets
	$requestMethod = 'GET';
	
	
	$twitter = new TwitterAPIExchange($settings);
	//now we build our twitter object for each get field

	//now to implement a method to save the tweets to a file on the server
	//we want to create a date object and add that to an array of these tweet json arrays
	//the date object will allow us to check if the time is > 15 minutes earlier, and if it is we 
	// will make the calls to retrieve the content.
	// two new variables one is $file which is the json object from the text file if it exists
	// the other is $timediff which if the text file exists then it calculates the diff in times from the current time
	/**
	 * Now we check for the file's existence
	*/
	$sbool = true;
	
	
	
	if (!file_exists("arr.txt")){// there is no file
		$sbool = true;
		//source 1
		$source1 = $twitter->setGetfield($getfields1)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();

		//source 2
		$source2 = $twitter->setGetfield($getfields2)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 3
		$source3 = $twitter->setGetfield($getfields3)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();

		//source 4
		$source4 = $twitter->setGetfield($getfields4)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 5
		$source5 = $twitter->setGetfield($getfields5)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 6
		$source6 = $twitter->setGetfield($getfields6)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 7
		$source7 = $twitter->setGetfield($getfields7)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 8
		$source8 = $twitter->setGetfield($getfields8)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 9
		$source9 = $twitter->setGetfield($getfields9)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 10
		$source10 = $twitter->setGetfield($getfields10)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 11
		$source11 = $twitter->setGetfield($getfields11)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 12
		$source12 = $twitter->setGetfield($getfields12)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 13
		$source13 = $twitter->setGetfield($getfields13)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 14
		$source14 = $twitter->setGetfield($getfields14)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
		//source 15
		$source15 = $twitter->setGetfield($getfields15)
									 ->buildOauth($url, $requestMethod)
									 ->performRequest();
	}	else {
		//the file is there and the time diff is within 15 minutes
		//we grab the stuff from the json file and read it into the $source variables
		$file = file_get_contents("arr.txt");
		//now we read in the array
		//first we need to un-serialize the content
		$data = unserialize($file); //should be the php array
		//make $data a js array
		$jsdata = json_encode($data);
		$sbool = false;
		$arrays = array_chunk($data, 10);
		$timestamp = $arrays[15];
		$currenttime = time();
		$diff = $currenttime - $timestamp[0];
		$diffmin = $diff / 60;
		
		if ($diffmin < 15){
			$sbool = false;
			$source1 = json_encode($arrays[0]);
			$source2 = json_encode($arrays[1]);
			$source3 = json_encode($arrays[2]);
			$source4 = json_encode($arrays[3]);
			$source5 = json_encode($arrays[4]);
			$source6 = json_encode($arrays[5]);
			$source7 = json_encode($arrays[6]);
			$source8 = json_encode($arrays[7]);
			$source9 = json_encode($arrays[8]);
			$source10 = json_encode($arrays[9]);
			$source11 = json_encode($arrays[10]);
			$source12 = json_encode($arrays[11]);
			$source13 = json_encode($arrays[12]);
			$source14 = json_encode($arrays[13]);
			$source15 = json_encode($arrays[14]);
		} else {
			$sbool = true;
			//source 1
			$source1 = $twitter->setGetfield($getfields1)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();

			//source 2
			$source2 = $twitter->setGetfield($getfields2)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 3
			$source3 = $twitter->setGetfield($getfields3)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();

			//source 4
			$source4 = $twitter->setGetfield($getfields4)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 5
			$source5 = $twitter->setGetfield($getfields5)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 6
			$source6 = $twitter->setGetfield($getfields6)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 7
			$source7 = $twitter->setGetfield($getfields7)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 8
			$source8 = $twitter->setGetfield($getfields8)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 9
			$source9 = $twitter->setGetfield($getfields9)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 10
			$source10 = $twitter->setGetfield($getfields10)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 11
			$source11 = $twitter->setGetfield($getfields11)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 12
			$source12 = $twitter->setGetfield($getfields12)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 13
			$source13 = $twitter->setGetfield($getfields13)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 14
			$source14 = $twitter->setGetfield($getfields14)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
			//source 15
			$source15 = $twitter->setGetfield($getfields15)
										 ->buildOauth($url, $requestMethod)
										 ->performRequest();
		}
	}
	
	
?>
<!DOCTYPE html>
<html>
	<head>
		<title>CurrentWire: World</title>
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
		<meta name="keywords" content="CurrentWire, siimple, news">
		<meta name="description" content="CurrentWire: The news reimagined">
		<meta name="application-name" content="CurrentWire">
	</head>
	<body>
		<header>
			<!-- first the basic header structure. -->
			<nav>
				<div class="uk-grid">
					<h3 class="sections uk-width-1-3 uk-text-center"><a href="#section" data-uk-offcanvas class="nolink uk-container-center">Sections</a></h3>
					<h1 class="centre-title uk-width-1-3 uk-text-center"><span class="uk-container-center">World News</span></h1><!-- NOTE: this will change when we introduce multiple sections-->
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
			<section class="content uk-width-7-10 uk-container" id="1">
				
			</section>
			<section class="scores uk-width-3-10 uk-container" id="2">
				<ul class="uk-list">
					
				</ul>
			</section>
		</article>
		<footer>
			
		</footer>
		
		<!-- Include the important scripts. -->
		<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="js/uikit.min.js"></script>
		<script>
			console.log(<?php echo $diffmin; ?>); //YESSSSS
			var arr1 = <?php echo $source1; ?>;
			var arr2 = <?php echo $source2; ?>;
			var arr3 = <?php echo $source3; ?>;
			var arr4 = <?php echo $source4; ?>;
			var arr5 = <?php echo $source5; ?>;
			var arr6 = <?php echo $source6; ?>;
			var arr7 = <?php echo $source7; ?>;
			var arr8 = <?php echo $source8; ?>;
			var arr9 = <?php echo $source9; ?>;
			var arr10 = <?php echo $source10; ?>;
			var arr11 = <?php echo $source11; ?>;
			var arr12 = <?php echo $source12; ?>;
			var arr13 = <?php echo $source13; ?>;
			var arr14 = <?php echo $source14; ?>;
			for(var i=0;i<arr14.length; i++){
				console.log(arr14[i]);
			}
			var arr15 = <?php echo $source15; ?>;
			
			if (arr1.length != 10){
				//error the site can't pull in the tweets
				console.log("Error the site can't load in tweets");
				var modal = new $.UIkit.modal.Modal(".error-modal");
				modal.show();
			};
			var sbool = <?php echo json_encode($sbool); ?>;
		</script>
		<script src="js/main.js"></script>
		
		
	</body>
</html>