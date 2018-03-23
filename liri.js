//npm install for dotenv, request, twitter, spotify

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
  var client = new Twitter(keys.twitter);
      
  var params = {screen_name: 'Node_Practice'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
}


// Spotify-----------


  var spotify = new Spotify(keys.spotify);
  
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


//OMDB--------------




