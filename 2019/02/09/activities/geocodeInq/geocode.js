// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "8j1bmNF0W9ZlEClt1eKQAycAGsrszcPh"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);

var inquirer = require("inquirer");

var address = ""
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter house number: ",
      name: "houseNumber"
    },
    {
      type: "input",
      message: "Enter the street name: ",
      name: "street"
    },
    {
      type: "input",
      message: "Enter the city",
      name: "city"
    },
    {
      type: "input",
      message: "Enter the State",
      name: "state"
    },
    {
      type: "input",
      message: "Enter the zip code",
      name: "zip"
    }

  ]).then(function(input){

    address += input.houseNumber + " " + input.street + ", " + input.city + " " + input.state + " " + input.zip
    console.log(address);
    geocoder.geocode({address: address}, function(err, result){
      if(err){
        console.log(err);
      }
      console.log(result);
    })
      
  });


// Take in the command line arguments

var args = process.argv;



// Build your address as an array or string
// var address = [];
// var addStr = "";
// for (var i = 2; i < args.length; i++){
//   address.push(args[i]);
// }

// for (var j = 0; j < address.length; j++){
//   addStr += address[j];
//   if (j != (address.length - 1)){
//     addStr += " ";
//   }
// }

// console.log(addStr)
// geocoder.geocode({address: addStr}, function(err, result){
//   if(err){
//     console.log(err);
//   }
//   console.log(result);
// })
// Then use the geocoder object to search the address
