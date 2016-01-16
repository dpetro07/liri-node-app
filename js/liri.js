var fs = require("fs");
var twitterKeysJs = ("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var movie = require('movie');
var doWhatItSays = require('doWhatItSays')
var request = require('request');
var params = process.argv.slice(2);


function getTwitter(){
var client = new Twitter({
  consumer_key: ' WPlYxORD0QmgOopmexMO743oF',
  consumer_secret: '2p1YOb0L3KklzuPgqfpBuIRfM3p2oBk6IdVwDnsqnb07MSJQYK',
  access_token_key: '4680090378-Pi1go3W6KqiQBiRQrfjSBt2JQPCJTwEjSywYxwt',
  access_token_secret: 'GGCP14E8XZDoutdH0HTBd1RSjPD4roahECuX43DAttzvX',
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
}

function getSpotify(){
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});
}