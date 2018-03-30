//npm install for dotenv, request, twitter, spotify, omdb

require("dotenv").config();

//retrieve keys.js file
var keys = require("./keys.js")
//add variable for Twitter
var Twitter = require('twitter');
//add variable for Spotify
var Spotify = require('node-spotify-api');
//add variable for request
var request = require('request');
//add variable for read and write
var fs = require("fs");
//add variable for omdb
var omdb = require('omdb');


var action = process.argv[2];
var value = process.argv[3];


switch (action) {
  case "my-tweets":
  myTweets();
  break;

  case "spotify-this-song":
  mySpotify();
  break;

  case "movie-this":
  myMovie();
  break;

  case "do-what-it-says":
  itSays();
  break;


}
    
// Twitter--------------

function myTweets() {

  var client = new Twitter(keys.twitterKeys);

  var params = {screen_name: "Node_Practice1"};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}

// Spotify-----------

function mySpotify() {

  var spotify = new Spotify(keys.spotify);
  
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
}

//OMDB--------------





