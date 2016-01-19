// console.log("this works, great");

// var fs = require("fs");
// var twitterKeysJs = ("./keys.js");
// var twitter = require('twitter');
// var request = require('request');
// var params = process.argv.slice(2);
// var spotify = require("spotify");



// switch(params[0]){
//   case "movie-this":
//   case
//     getMovie();
//     break;

//   default:
//     console.log("err");

// }



var request = require('request');
request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    
    console.log(JSON.parse(body)["Title"]); // Show the HTML for the Google homepage. 
  }
})




// function myTweets() {
//  var client = new twitter({
//     consumer_key: twitterKeys.twitterKeys.consumer_key,
//     consumer_secret: twitterKeys.twitterKeys.consumer_secret,
//     access_token_key:  twitterKeys.twitterKeys.access_token_key,
//     access_token_secret: twitterKeys.twitterKeys.access_token_secret   
//    });



