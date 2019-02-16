var inquire = require("inquirer");

function Member (name, pos, off, def){
    this.name = name;
    this.position = pos;
    this.offence = off;
    this.defence = def;

    this.goodGame = function(){
        var outcome = Math.ceil(Math.random()*2);

        if (outcome === 1){
            this.offence +=1;
        }
        else{
            this.defence +=1;
        }
    }
    this.badGame = function(){
        var outcome = Math.ceil(Math.random()*2);

        if (outcome === 1){
            this.offence --;
        }
        else{
            this.defence --;
        }
    }
    this.printStats = function(){
        console.log("Name: ", this.name, "\nPosition: ", this.position, "\nOffence: ", this.offence,
        "\nDefence: ", this.defence);
    }
}
var count = 0;
var players = [];

var askQ = function(){
    if (count < 3){

        inquire.prompt([
            {
                name: "name", 
                message: " Enter the player's name: "
            },
            {
                name: "position", 
                message: " Enter the player's position: "
            },
            {
                name: "offence", 
                message: " Enter the player's offence: "
            },
            {
                name: "defence", 
                message: " Enter the player's defence: "
            }

        ]).then(function(answer){
            var newPlayer = new Member(answer.name, answer.position, parseInt(answer.offence), parseInt(answer.defence));
            
            players.push(newPlayer);

            count++;
            askQ();
        })
    }else{
        for (i = 0; i < 3; i++){
        players[i].printStats();
        }
        playGame(0);
    }

}
askQ();
var gamesPlayed = 0;
var playGame = function(points){
    if(gamesPlayed < 5){
        var points = points;
        console.log(points);
        var randOff = Math.ceil(Math.random()*20);
        console.log("O Roll: " + randOff);
        var randDef = Math.ceil(Math.random()*20);
        console.log("D Roll: " + randDef);
        var teamOff = players[0].offence + players[1].offence;
        console.log("Team offence " +teamOff);
        var teamDef = players[0].defence + players[1].defence;
        console.log("Team defence " +teamDef);
        if (randOff < teamOff){
            points++;
        }
        if (randDef > teamDef){
            points--;
        }
        gamesPlayed++;
        playGame(points); 
    }
    else{
        if (points < 0){
            players[0].badGame();
            players[1].badGame();
            console.log("You lost!");
        }
        else if (points > 0){
            players[0].goodGame();
            players[1].goodGame();
            console.log("You won!");
        }
        else{
            console.log("You tied!");
        }
        for (j = 0; j < 3; j++){
            players[j].printStats();
        }
    }
}


