var nodeArg = process.argv;

var numArray = [];

for (var i =2; i < nodeArg.length; i++){

    numArray.push(parseFloat(nodeArg[i]));
}

console.log(numArray);
debugger;
console.log(numArray.sort(function(a, b){return a-b}));

// var sortThese = function (nums){
//     var sorted = []
//     nums.sort(function(a, b){return a-b})
//     console.log(nums);
// }

// sortThese(numArray)