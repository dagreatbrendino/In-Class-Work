//create a function that can take a number 
//function checks to see if number is prime
//return true or false depending on if number was found to be prime 

//function 
//check to see if there is a remainder when the passed number is divided by every number inbetween 1- the passed number/2 
//if any of those results have a remainder of zero, then the number is not prime 

var primeChecker = function(num){
    
    for (i =2; i <= Math.ceil(num/2); i++){
        if (num % i === 0)
        return false;
    }

    //If the number is greater than 1, it is prime 
    return (num > 1);
}