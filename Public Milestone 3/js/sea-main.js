$(document).ready(function() {
	/**
	 * The Below code is the main.js file contents for Curratd currantly in alpha build 0.2.5 . 
	 * The file is broken up into segments, with each segment containing a header formatted like this
	 * This code is the property of Forge Labs and may not be used by others without permission. Copywritten 2014
	 */
	
	/**
	 * First a small section of comments mapping things we might need to know later on in the document.
	 * this will include some todo's that are also located on the trello project board
	 */
	//TODO: Implement the individual trust calculations
	//TODO: Find a simpler way to optimize adding to the 150 object array
	//TODO: find a way to calculate long term trust
	//TODO: Find a simpler way to optimize adding to the 150 object array
	
	/**
	 * The first section is for the function definitions that we will use later on in this file.
	 * This first is a simple one that will grab the id of the tweet, the text, the retweet count and
	 * will also calculate the score and then push all these objects to an array and return that array.
	 * 
	 * The second function simply checks if the tweet is not original content and will slice the tweet 
	 * that is a retweet and remove it from the source arrays. Notice that when implemented this 
	 * function is performed first on the tweet arrays.
	 */
	
	//we have 15 arrays each of ten scores
	function makeTweet(arr){
		tweets = new Array();
		for (var i = 0; i<arr.length; i++){
			if (arr[i] != null){
				tweet = new Object();
				tweet.id = arr[i]["id_str"];
				tweet.text = arr[i]["text"];
				tweet.rtcount = arr[i]["retweet_count"];
				tweet.score = ((arr[i]["retweet_count"]) + (arr[i]["retweet_count"]))/2.5; 
				tweets.push(tweet);
			}
		};
		return tweets;
	}

	function checkForRT(arr){
		var arrf = [];
		for(var i=0;i<arr.length;i++){
			if (arr[i] != null){
				if (arr[i].hasOwnProperty("retweeted_status")){
					arr.splice(i,1);
				}
			}
		};
		arrf = arr;
		return arrf;
	};
	/**
	 * The Next segment of code is to add all the tweets to one array that will then be stored
	 * as a .txt file on the server. This is to allow Curratd to be used by many people all 
	 * within the same 15 minute period intervals (This is done because of the twitter API limitations.)
	 * 
	 */
	
	var alltweetsnoformatting = [];
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr1[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr2[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr3[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr4[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr5[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr6[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr7[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr8[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr9[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr10[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr11[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr12[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr13[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr14[i]);
	}
	for (var i=0;i<10; i++){
		alltweetsnoformatting.push(arr15[i]);
	}
	console.log(alltweetsnoformatting.length);
	if(sbool){
		var request = new XMLHttpRequest;

		request.open("POST", "./store-sea.php", true);
		request.setRequestHeader("Content-Type", "application/json");
		var data = JSON.stringify(alltweetsnoformatting);
		request.send(data);
	};
	
	/**
	 * Below we actually get into the meat of the javascript that is being performed. 
	 * First we operate the checkForRT() function on all the arrays to remove the duplicates.
	 * Second we push the RT "Cleansed" arrays into one larger array simply to test if the RT 
	 * check function works properly.
	 * Third we Make the tweet objects ourselvesusing the maketweet() function. We thn push 
	 * back each object to a larger array.
	 */
	//a break down of the individual arrays and what their tweets are
	//arr1 = cnnbrk
	//arr2 = bbcbreaking
	//arr3 = nytimes
	//arr4 = reuters
	//arr5 = ap
	//arr6 = wsj
	//arr7 = breakingnews
	//arr8 = cnn
	//arr9 = bbcworld
	//arr10 = theeconomist
	//arr11 = time
	//arr12 = huffpo
	//arr13 = abc
	//arr14 = npr
	//arr15 = washington post
		
	// Now to properly implement the removal of rt's from all the 15 arrays:
	
	arr1 = checkForRT(arr1);
	arr2 = checkForRT(arr2);
	arr3 = checkForRT(arr3);
	arr4 = checkForRT(arr4);
	arr5 = checkForRT(arr5);
	arr6 = checkForRT(arr6);
	arr7 = checkForRT(arr7);
	arr8 = checkForRT(arr8);
	arr9 = checkForRT(arr9);
	arr10 = checkForRT(arr10);
	arr11 = checkForRT(arr11);
	arr12 = checkForRT(arr12);
	arr13 = checkForRT(arr13);
	arr14 = checkForRT(arr14);
	console.log(arr14.length);
	arr15 = checkForRT(arr15);

	if (arr1.length > 0){
		var arr1objects = [];
		arr1objects = makeTweet(arr1);
	};
	if(arr2.length > 0){
		var arr2objects = [];
		arr2objects = makeTweet(arr2);
	};
	if(arr3.length > 0){
		var arr3objects = [];
		arr3objects = makeTweet(arr3);
	};
	if(arr4.length > 0){
		var arr4objects = [];
		arr4objects = makeTweet(arr4);
	};
	if(arr5.length > 0){
		var arr5objects = [];
		arr5objects = makeTweet(arr5);
	};
	if(arr6.length > 0){
		var arr6objects = [];
		arr6objects = makeTweet(arr6);
	};
	if(arr7.length > 0){
		var arr7objects = [];
		arr7objects = makeTweet(arr7);
	};
	if(arr8.length > 0){
		var arr8objects = [];
		arr8objects = makeTweet(arr8);
	};
	if(arr9.length > 0){
		var arr9objects = [];
		arr9objects = makeTweet(arr9);
	};
	if(arr10.length > 0){
		var arr10objects = [];
		arr10objects = makeTweet(arr10);
	};
	if(arr11.length > 0){
		var arr11objects = [];
		arr11objects = makeTweet(arr11);
	};
	if(arr12.length > 0){
		var arr12objects = [];
		arr12objects = makeTweet(arr12);
	};
	if(arr13.length > 0){
		var arr13objects = [];
		arr13objects = makeTweet(arr13);
	};
	if(arr14.length > 0){
		var arr14objects = [];
		arr14objects = makeTweet(arr14);
	};
	if(arr15.length > 0){
		var arr15objects = [];
		arr15objects = makeTweet(arr15);
	};
	
	//an ugly way to append everything but it works
	var totaltweets = [];
	if(arr1objects.length > 0){
		for(var i=0;i<arr1objects.length; i++){
			totaltweets.push(arr1objects[i]);
		}
	};
	if(arr2objects.length > 0){
		for(var i=0;i<arr2objects.length; i++){
			totaltweets.push(arr2objects[i]);
		}
	};
	if(arr3objects.length > 0){
		for(var i=0;i<arr3objects.length; i++){
			totaltweets.push(arr3objects[i]);
		}
	};
	if(arr4objects.length > 0){
		for(var i=0;i<arr4objects.length; i++){
			totaltweets.push(arr4objects[i]);
		}
	};
	if(arr5objects.length > 0){
		for(var i=0;i<arr5objects.length; i++){
			totaltweets.push(arr5objects[i]);
		}
	};
	if(arr6objects.length > 0){
		for(var i=0;i<arr6objects.length; i++){
			totaltweets.push(arr6objects[i]);
		}
	};
	if(arr7objects.length > 0){
		for(var i=0;i<arr7objects.length; i++){
			totaltweets.push(arr7objects[i]);
		}
	};
	if(arr8objects.length > 0){
		for(var i=0;i<arr8objects.length; i++){
			totaltweets.push(arr8objects[i]);
		}
	};
	if(arr9objects.length > 0){
		for(var i=0;i<arr9objects.length; i++){
			totaltweets.push(arr9objects[i]);
		}
	};
	if(arr10objects.length > 0){
		for(var i=0;i<arr10objects.length; i++){
			totaltweets.push(arr10objects[i]);
		}
	};
	if(arr11objects.length > 0){
		for(var i=0;i<arr11objects.length; i++){
			totaltweets.push(arr11objects[i]);
		}
	};
	if(arr12objects.length > 0){
		for(var i=0;i<arr12objects.length; i++){
			totaltweets.push(arr12objects[i]);
		}
	};
	if(arr13objects.length > 0){
		for(var i=0;i<arr13objects.length; i++){
			totaltweets.push(arr13objects[i]);
		}
	};
	if(arr14objects.length > 0){
		for(var i=0;i<arr14objects.length; i++){
			totaltweets.push(arr14objects[i]);
		}
	};
	if(arr15objects.length > 0){
		for(var i=0;i<arr15objects.length; i++){
			totaltweets.push(arr15objects[i]);
		}
	};
	
	/**
	 * In the next big section we sort the tweet objects by their scores and then collect
	 * the top ten tweets. from this we then begin the oEmbedd calls to twitter's servers.
	 */
	
	//now we compare the scores and choose the top 10
	//first a check that the scores work
	

	//sort the array
	var topsorttweet = totaltweets.sort(function(a,b){return (a.score - b.score);});
	var toptentweets = [];
	var buffer = [];
	topsorttweet.reverse();
	toptentweets = topsorttweet.slice(0,10);
	buffer = topsorttweet.slice(9,10);
	for(var i=0;i<toptentweets.length;i++){
		if(toptentweets[i].score > 200){
			toptentweets[i].score = 200;
		};
	};
	
	//clear out all the decimal points
	for (var i=0;i<toptentweets.length;i++){
		toptentweets[i].score = Math.floor(toptentweets[i].score);
	}
	//a sanity check console.log will tell us if we have selected the right items
	
	//toptentweets is the final array
	//now we must grab their embed stuff
	//first we set the preliminary html that will precede the data
	var pre = "<div class='tweet uk-container-center'>";
	var post = "</div>"
	var pres = "<li class='score'>";
	var posts = "</li>";
	var que = [];
	//now we do the oembed method to get the 10 tweet objects
	
	var baseURL = "https://api.twitter.com/1/statuses/oembed.json?id=";
	var addurl = "&hide_media=true&align=center&omit_script=true";
	
	$.when(aj1(), aj2(), aj3(), aj4(), aj5(), aj6(), aj7(), aj8(), aj9(), aj10()).done(function(a1, a2, a3,a4,a5,a6,a7,a8,a9,a10){
		//now we sort the que based on score
		que = que.sort(function(a,b){return (a.score - b.score);});
		que.reverse();
		//now we need to print out the stuff
		//the code below will append the divs and li elements to the relative sections
		for (var i=0; i<que.length;i++){
			$(".content").append(que[i].tweet);
			$(".scores ul").append(que[i].scoret);
		};
		//the below segment of code will take all links not referencing the document itself and will force the link to open in a new tab when clicked
		//this provides a better experience for the user because it keeps them on the site, and allows them to read the 10 tweets without the page refreshing
		$("a[href^=http]").each(function(){
    	if(this.href.indexOf(location.hostname) == -1) {
      	$(this).attr({
        	target: "_newtab",
          title: "Opens in a new window"
        });
      }
		});
		//now we want to try to change the classes of the sections based on the device that is viewing the webpage
		//we do this so that the content takes up more of the space providing a better experience to users
		if (window.matchMedia("(max-width: 500px)")){   //This does not yet currently work to my knowledge
			$("#1").toggleClass('uk-width-7-10 uk-width-8-10');
			$("#2").toggleClass('uk-width-3-10 uk-width-2-10');
			
		}
	});
	
	
	//the below ajax calls retreive the OEmbed data we need to represent the tweets
	//we use an ajax call to get the data
	//each ajax call is defined as a function so we can call all of them and then do stuff on the data once it is all gathered
	//this is required because we need the data that it returns in a certain order so we essentially have to make it synchronous 
	function aj1(){
		return $.ajax({
			type: "GET",
			url: baseURL + toptentweets[0].id + addurl,
			dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
			success: function(data, status) {
				var queObj = new Object(); //a simple object composing the tweet text, the tweet id, the score and the score formatted as well as the order so we can sort it later
				var tweet = pre + data["html"] + post;
				if (toptentweets[0].score > 100){
					var tweetscore = "<li class='score hot'>" + toptentweets[0].score + posts;
				} else if (toptentweets[0].score > 50) {
					var tweetscore = "<li class='score warm'>" + toptentweets[0].score + posts;
				} else {
					var tweetscore = pres + toptentweets[0].score + posts;
				}
				queObj.tweet = tweet;
				queObj.scoret = tweetscore;
				queObj.score = toptentweets[0].score;
				queObj.order = 1;
				que.push(queObj);
				
			}
		});
	};
	function aj2(){
		return 	$.ajax({
			type: "GET",
			url: baseURL + toptentweets[1].id + addurl,
			dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
			success: function(data, status) {
				var queObj = new Object();
				var tweet = pre + data["html"] + post;
				if (toptentweets[1].score > 100){
					var tweetscore = "<li class='score hot'>" + toptentweets[1].score + posts;
				} else if (toptentweets[1].score > 50){
					var tweetscore = "<li class='score warm'>" + toptentweets[1].score + posts;
				} else {
					var tweetscore = pres + toptentweets[1].score + posts;
				}
				queObj.tweet = tweet;
				queObj.scoret = tweetscore;
				queObj.score = toptentweets[1].score;
				queObj.order = 2;
				que.push(queObj);
				
			}
		});
	};
	function aj3(){
		return 	$.ajax({
			type: "GET",
			url: baseURL + toptentweets[2].id + addurl,
			dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
			success: function(data, status) {
				var queObj = new Object();
				var tweet = pre + data["html"] + post;
				if (toptentweets[2].score > 100){
					var tweetscore = "<li class='score hot'>" + toptentweets[2].score + posts;
				} else if (toptentweets[2].score > 50) {
					var tweetscore = "<li class='score warm'>" + toptentweets[2].score + posts;
				} else {
					var tweetscore = pres + toptentweets[2].score + posts;
				}
				queObj.tweet = tweet;
				queObj.scoret = tweetscore;
				queObj.score = toptentweets[2].score;
				queObj.order = 3;
				que.push(queObj);
				
			}
		});
	};
	function aj4(){
		return 	$.ajax({
			type: "GET",
			url: baseURL + toptentweets[3].id + addurl,
			dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
			success: function(data, status) {
				var queObj = new Object();
				var tweet = pre + data["html"] + post;
				if (toptentweets[3].score > 100){
					var tweetscore = "<li class='score hot'>" + toptentweets[3].score + posts;
				} else if(toptentweets[3].score > 50){
					var tweetscore = "<li class='score warm'>" + toptentweets[3].score + posts;
				} else {
					var tweetscore = pres + toptentweets[3].score + posts;
				}
				queObj.tweet = tweet;
				queObj.scoret = tweetscore;
				queObj.score = toptentweets[3].score;
				queObj.order = 4;
				que.push(queObj);
			}
		});
	};
	function aj5(){
		return $.ajax({
		type: "GET",
		url: baseURL + toptentweets[4].id + addurl,
		dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
		success: function(data, status) {
			var queObj = new Object();
			var tweet = pre + data["html"] + post;
			if (toptentweets[4].score > 100){
				var tweetscore = "<li class='score hot'>" + toptentweets[4].score + posts;
			} else if (toptentweets[4].score > 50){
				var tweetscore = "<li class='score warm'>" + toptentweets[4].score + posts;
			} else {
				var tweetscore = pres + toptentweets[4].score + posts;
			}
			queObj.tweet = tweet;
			queObj.scoret = tweetscore;
			queObj.score = toptentweets[4].score;
			queObj.order = 5;
			que.push(queObj);			
		}
	});
	};
	function aj6(){
		return 	$.ajax({
		type: "GET",
		url: baseURL + toptentweets[5].id + addurl,
		dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
		success: function(data, status) {
			var queObj = new Object();
			var tweet = pre + data["html"] + post;
			if (toptentweets[5].score > 100){
				var tweetscore = "<li class='score hot'>" + toptentweets[5].score +posts;
			} else if (toptentweets[5].score > 50 ){
				var tweetscore = "<li class='score warm'>" + toptentweets[5].score + posts;
			} else {
				var tweetscore = pres + toptentweets[5].score + posts;
			}
			queObj.tweet = tweet;
			queObj.scoret = tweetscore;
			queObj.score = toptentweets[5].score;
			queObj.order = 6;
			que.push(queObj);
		}
	});
	};
	function aj7(){
		return 	$.ajax({
		type: "GET",
		url: baseURL + toptentweets[6].id + addurl,
		dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
		success: function(data, status) {
			var queObj = new Object();
			var tweet = pre + data["html"] + post;
			if (toptentweets[6].score > 100){
				var tweetscore = "<li class='score hot'>" + toptentweets[6].score + posts;
			} else if (toptentweets[6].score > 50){
				var tweetscore = "<li class='score warm'>" + toptentweets[6].score + posts;
			} else {
				var tweetscore = pres + toptentweets[6].score + posts;
			}
			queObj.tweet = tweet;
			queObj.scoret = tweetscore;
			queObj.score = toptentweets[6].score;
			queObj.order = 7;
			que.push(queObj);
		}
	});
	};
	function aj8(){
		return 	$.ajax({
		type: "GET",
		url: baseURL + toptentweets[7].id + addurl,
		dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
		success: function(data, status) {
			var queObj = new Object();
			var tweet = pre + data["html"] + post;
			if (toptentweets[7].score > 100){
				var tweetscore = "<li class='score hot'>" + toptentweets[7].score + posts;
			} else if (toptentweets[7].score > 50 ){
				var tweetscore = "<li class='score warm'>" + toptentweets[7].score + posts;
			} else {
				var tweetscore = pres + toptentweets[7].score + posts;
			}
			queObj.tweet = tweet;
			queObj.scoret = tweetscore;
			queObj.score = toptentweets[7].score;
			queObj.order = 8;
			que.push(queObj);
		}
	});
	};
	function aj9(){
		return 	$.ajax({
		type: "GET",
		url: baseURL + toptentweets[8].id + addurl,
		dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
		success: function(data, status) {
			var queObj = new Object();
			var tweet = pre + data["html"] + post;
			if (toptentweets[8].score > 100){
				var tweetscore = "<li class='score hot'>" + toptentweets[8].score + posts;
			} else if (toptentweets[8].score > 50){
				var tweetscore = "<li class='score warm'>" + toptentweets[8].score + posts;
			} else {
				var tweetscore = pres + toptentweets[8].score + posts;
			}
			queObj.tweet = tweet;
			queObj.scoret = tweetscore;
			queObj.score = toptentweets[8].score;
			queObj.order = 9;
			que.push(queObj);
		}
	});
	};
	function aj10(){
		return 	$.ajax({
		type: "GET",
		url: baseURL + toptentweets[9].id + addurl,
		dataType: "jsonp", //notice the jsonp use is to avoid the Cross Domian problems
		success: function(data, status) {
			var queObj = new Object();
			var tweet = pre + data["html"] + post;
			if (toptentweets[9].score > 100){
				var tweetscore = "<li class='score hot'>" + toptentweets[9].score + posts;
			} else if (toptentweets[9].score > 50){
				var tweetscore = "<li class='score warm'>" + toptentweets[9].score + posts;
			} else {
				var tweetscore = pres + toptentweets[9].score + posts;
			}
			queObj.tweet = tweet;
			queObj.scoret = tweetscore;
			queObj.score = toptentweets[9].score;
			queObj.order = 10;
			que.push(queObj);
		}
	});
	};

});