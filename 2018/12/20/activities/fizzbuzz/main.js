//create an array of numbers 1-100
var myNums = []
for (var i =1; i <=100; i++){
    myNums.push(i);
}


var fizzbuzz = function(nums){
//iterate through every number in the array
for(var j = 0; j < nums.length; j++){
//at each index, first check if there is a not remainder when dividing by 5 & 3, if so console log fizzbuzz
    if(nums[j]%3 ===0 && nums[j]%5 ===0){
        console.log("Fizzbuzz")
    }
    //else check if there is not a remainder when dividing by 5, if so log buzz
    else if(nums[j]%5 ===0){
        console.log("Buzz")
    }
    //else check if there is not a remainder when dividing by 3, if so log fizz
    else if(nums[j]%3 ===0){
        console.log("Fizz")
    }
    //else log the number
    else{
        console.log(nums[j]);
    }
}
}

var switchfizzbuzz = function(nums){
    for(var j = 0; j < nums.length; j++){

        switch(true){
            case (nums[j] % 3 ===0 && nums[j] % 5 ===0 ):
                console.log("fizzbuzz");
                break;
            case (nums[j] % 3 ===0):
                console.log("fizz");
                break;
            case (nums[j] % 5 ===0 ):
                console.log("buzz");
                break;
            default:
                console.log(nums[j]);
            
        }
    }
}

fizzbuzz(myNums);
switchfizzbuzz(myNums);