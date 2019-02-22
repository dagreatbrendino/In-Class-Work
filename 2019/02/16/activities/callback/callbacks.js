var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function first(cb){
    console.log("Some message");
    cb();

}

first(function(){
    console.log("I am a call back");
});

// Write a function that runs a function argument if
// its other argument is truthy.
function second(flag, cb){
    if (flag){
        cb();
    }
}
second(true, function(){
    console.log("This function will be excuted");
})
second(false, function(){
    console.log("This function will not be executed");
})

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function third(cb, value){
    return function(){
        return cb(value);
    }
}

console.log(third(
    function(arg){
        console.log(arg);
        arg += 3;
        return arg;
    },
    3)());
// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

fs.writeFile("log.txt", "log message!", function(err){
    
    if(err){
        console.log(err);
    }
    
    console.log("File written");
});

