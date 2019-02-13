// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:
var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Enter a user name: ",
            name: "username"
        },
        {
            type: "password",
            message: "Enter a password",
            name: "password"
        },
        {
            type: "list",
            message: "What is your favorite color",
            choices: ["Red", "Orange", "Blue", "Green", "Yellow"],
            name: "color"
        },
        {
            type: "checkbox",
            message: "Which of these are things you like?",
            choices: ["Video Games", "Movies", "Sports", "TV", "Plays", "Music"],
            name: "things"
        },
        {
            type: "confirm",
            message: "Lock in your choices?",
            name: "lockin",
            default: true
        }
    ]).then(function(inqResp){
        var things = "";
        if (inqResp.lockin){
            // JSON.stringify
            for (var property1 in inqResp.things){
                things+= property1 + " ";
            }
            debugger;
            console.log(things);
            console.log("\nWelcome " + inqResp.username);
            console.log("\nYour favorite color is " + inqResp.color + " and you are into " + inqResp.things);
            if (inqResp.password === "password"){
                console.log("\nYour choice of password is not very strong!");
            }
        }
        else{
            console.log("Alright " + inqResp.username + " try again when you are ready!");
        }

    }

    )
//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
