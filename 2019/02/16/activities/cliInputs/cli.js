// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
var args = process.argv;

var search = args[2];

var term = "";

term = args.slice(3).join(" ");

if(!search || search !== "show" || search != "actor"){
    search = "show";
}

if(!term){
    term = "Mary Tyler Moore";
}

if (search === "show"){
    console.log("Searching for show " + term);
}
else{
    console.log("Searching for actor " + term);
}

