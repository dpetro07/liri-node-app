// console.log("this works, great");

// var fs = require("fs");
// var twitterKeysJs = ("./keys.js");
// var twitter = require('twitter');
var request = require('request');
var params = process.argv.slice(2);
// var spotify = require("spotify");



switch(params[0]){
  case "movie-this":
    getMovie();
    break;

  default:
    console.log("err");

}

function getMovie() {
  if (params[1] === undefined) {
    request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json', function (error, response, body){
        if (!error && response.statusCode == 200) {
          var movieData = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                                        "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                                        "About: " + JSON.parse(body)["Plot"] + "\r\n" +
                                        "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                                        "Genre: " + JSON.parse(body)["Genre"];

          console.log(movieData);
          return;
        }      
    })
  } else {
    request('http://www.omdbapi.com/?t=' + params[1] + '&y=&plot=short&r=json', function (error, response, body){
        if (!error && response.statusCode == 200) {
          var movieData = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                                        "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                                        "About: " + JSON.parse(body)["Plot"] + "\r\n" +
                                        "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                                        "Genre: " + JSON.parse(body)["Genre"];
          console.log(movieData);
          return;
        }      
    })          
    console.log("error when selecting a movie");
  }
}





// function movieThis() {
//     if (params[1] === undefined)
//       request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json', function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//           console.log(JSON.parse(body)["Title"]); // Show the HTML for the Google homepage. 
//           console.log(JSON.parse(body)["imdbRating"]);
//           console.log(JSON.parse(body)["Year"]);
//           console.log(JSON.parse(body)["Genre"]);
//           return;
//         }

//           console.log(JSON.parse(body)["Title"]); // Show the HTML for the Google homepage. 
//           console.log(JSON.parse(body)["imdbRating"]);
//           console.log(JSON.parse(body)["Year"]);
//           console.log(JSON.parse(body)["Genre"]);
//       })
// }


// function myTweets() {
//  var client = new twitter({
//     consumer_key: twitterKeys.twitterKeys.consumer_key,
//     consumer_secret: twitterKeys.twitterKeys.consumer_secret,
//     access_token_key:  twitterKeys.twitterKeys.access_token_key,
//     access_token_secret: twitterKeys.twitterKeys.access_token_secret   
//    });



