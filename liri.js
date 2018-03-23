require("dotenv").config();

//retrieve keys.js file
var Keys = require("./keys.js")
//add variable for Twitter
var Twitter = require('twitter');
//add variable for Spotify
var Spotify = require('node-spotify-api');
//add variable for request
var request = require('request');

    
// Twitter--------------

function myTweets () {
  var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  });
   
  var params = {screen_name: 'Node_Practice'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
}


// Spotify-----------



//OMDB--------------




//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);