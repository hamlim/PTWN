var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: "zV4V7BI1TainNbCqcvNukQ",
  consumer_secret: "jsGEvqIZ95yBiBOTx84TpXTxuDUQiuLZvpvSzO87Lo",
  access_token_key: "118285131-SPuBN9vASoUW8WGPcci9LQq42LTDiJgqVLf1po11",
  access_token_secret: "xOcMOh5wbIl8vZpbue8xlwhsWOXPqzUCYiSzXr3nLAgch"
});

var uname = 'hamlinn';
twit.stream('user', {track: uname}, function(stream) {
  stream.on('data', function (data) {
		console.log(data);
  });
});