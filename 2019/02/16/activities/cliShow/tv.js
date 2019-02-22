var axios = require("axios");
var fs = require("fs");
var tvinfo;
var infoString;
var actorInfo;

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(
    function(response) {
      tvinfo = response.data;
      try{
        infoString = (
          "Title: " + tvinfo.name + 
          "\nGenre(s): " + tvinfo.genres.join(", ") + 
          "\nRating: " + tvinfo.rating.average + 
          "\nNetwork: " + tvinfo.network.name + 
          "\nSummary: " + tvinfo.summary + "\n\n");
      }
      catch{
        infoString= (
          "Title: " + tvinfo.name + 
          "\nGenre(s): " + tvinfo.genres.join(", ") + 
          "\nRating: " + tvinfo.rating.average + 
          "\nNetwork: " + "null" + 
          "\nSummary: " + tvinfo.summary + "\n\n");
      }
    
      fs.appendFile('log.txt', infoString, function(err) {
        if (err) {
          throw err;
        }
        console.log(infoString + ' was appended to file!');
      });    
    });
  };
  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    axios.get(URL).then(
      function(response){
        var actorInfo = response.data[0];
        try{
          infoString = (
            "Name: " + actorInfo.person.name + "\n" + 
            "Birthday: " + actorInfo.person.birthday + "\n" +
            "Gender: " + actorInfo.person.gender + "\n" + 
            "Country: " + actorInfo.person.country.name + "\n" +
            "TV-Maze URL: " + actorInfo.person.url + "\n\n"
          );
        }
        catch{
          console.log("error thrown!");
        }
        fs.appendFile("log.txt", infoString, function(err){
          if (err){
            throw err;
          }

          console.log(infoString + "was appended to the file!");
        })
      }
    )
  };
};

module.exports = TV;
