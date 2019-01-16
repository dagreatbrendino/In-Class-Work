var num = parseFloat(prompt("Enter a number"));

$(document).ready(function() {

    if(Number.isInteger(num)){
        $("#display").append("<h2>" + num + " is an integer</h2>");
    }
    else{
        $("#display").append("<h2>" + num + " is not an integer</h2>");
    }    
});
//alternate solution

console.log(parseInt(num) === num);

console.log(num % 1 === 0);

console.log(Math.floor(num) === num);