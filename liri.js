console.log("this is working so far");

var fs = require("fs");
var keys = require("./keys.js");
var twitter = require("twitter");
var params = process.argv.slice(2);

//gets the twitter api from keys.js
function myTweets() {
  var client = new twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key:  keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret   
  });


  switch(params[0]){
    case "my-tweets":
    case "tweets":
      myTweets();
  }

//grabs the last 20 tweets of the user from the twitter api and displays and logs them
function myTweets(){
  client.get('statuses/user_timeline', function(error, tweets, response){
    console.log(error);
    if(error) {
      console.log(error);
      throw error;
    }
    console.log("Your last 20 tweets:")
    for (i = 0; i < 20; i++){
      console.log(i+1 + ". On " + tweets[i].created_at + " You Tweeted: " + tweets[i].text);
      fs.appendFile("log.txt", i+1 + ". On " + tweets[i].created_at + " You Tweeted: " + tweets[i].text + "\n", function(err){
      })
    }
  });
}