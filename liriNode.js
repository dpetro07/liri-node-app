// console.log("this works, great");

// var fs = require("fs");
// var twitterKeysJs = ("./keys.js");
// var twitter = require('twitter');
var request = require('request');
var params = process.argv.slice(2);
var spotify = require("spotify");



switch(params[0]){
  case "movie-this":
    getMovie();
    break;

   case "spotify-this":
    getSpotify();
    break;   

  default:
    console.log("err");

}


//Movie Function to search for specific movies. If you don't put a movie in after movie-this it always defaults to Mr Nobody.
function getMovie() {
  if (params[1] === undefined) {
    request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json&tomatoes=true', function (error, response, body){
        if (!error && response.statusCode == 200) {
          var movieData = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                                        "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                                        "About: " + JSON.parse(body)["Plot"] + "\r\n" +
                                        "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                                        "Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"] + "\r\n" +
                                        "Genre: " + JSON.parse(body)["Genre"];
          console.log(movieData);
          return;
        }      
    })
  } else {
    request('http://www.omdbapi.com/?t=' + params[1] + '&y=&plot=short&r=json&tomatoes=true', function (error, response, body){
        if (!error && response.statusCode == 200) {
          var movieData = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                                        "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                                        "About: " + JSON.parse(body)["Plot"] + "\r\n" +
                                        "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                                        "Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"] + "\r\n" +
                                        "Genre: " + JSON.parse(body)["Genre"];
          console.log(movieData);
          return;
        }      
    })          
  }
}
// end of Movie Function

function getSpotify() {
  if (params[1] === undefined){
    spotify.search({ type: 'track', query: "What's My Age Again?" }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var spotifyData = "Song Name: " + data.tracks.items[0].name + "\r\n" + 
                                "Artist: " + data.tracks.items[0].artists[0].name;

       console.log(spotifyData);
  //   console.log(data.tracks.items[0].name); // gives the song name
  //   console.log(data.tracks.items[0].artists[0].name); // gives the artist name
  // // console.log(data.tracks.items[0].name);
  // // console.log(data.tracks.items[0].name);
});
  } else {
    spotify.search({ type: 'track', query: params[1] }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data.tracks.items[0].name); // gives the song name
    console.log(data.tracks.items[0].artists[0].name); // gives the artist name
  // console.log(data.tracks.items[0].name);
  // console.log(data.tracks.items[0].name);
});
  }


}









// function myTweets() {
//  var client = new twitter({
//     consumer_key: twitterKeys.twitterKeys.consumer_key,
//     consumer_secret: twitterKeys.twitterKeys.consumer_secret,
//     access_token_key:  twitterKeys.twitterKeys.access_token_key,
//     access_token_secret: twitterKeys.twitterKeys.access_token_secret   
//    });



