console.log('this is loaded');

//Twitter
var twitterkeys = {
  consumer_key: 	ycDfFKceRutf8nXM0uI8KigxP,
  consumer_secret: BhzXnyd7ZMaiMZRShvkMYkbeDUPC9cdSgEr1wkwz6SRyWwCgu3,
  access_token_key: 976721974083969025-PVbOCTXCHHg5FX9rmUuHXeBb0x73CUv,
  access_token_secret: Of0JDE1J475EKQSmCF263zmJtZ7IyWwgEzH0oyv2XnqA8

};

//Spotify
var spotifykeys = {
  id: f628b580ec874f1ab78887445dffbb8f,
  secret: a45ea07037774e87b6ceffeb6ac61ca4
};

//OMDB
var omdbkeys = "9ad71e7c";

module.exports = {  //must use module.exports in order for it to be used in multiple .js
	twitterkeys: twitterkeys,
  spotifykeys: spotifykeys,
  omdbkeys: omdbkeys
  
};