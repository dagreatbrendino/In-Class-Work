//prompt user for word

var isPalindrom = function(str){
    var palendrome;
    for (var i = 0; i < (str.length/2); i++){
        if(str[i] === str[((str.length-1)-i)]){
            palendrome = true;
        }
        else{
            return false;
        }
    }

    return palendrome;
}


//assign word string to a variable 

var isitap = isPalindrom(prompt());

console.log(isitap);

//Second method
var isPalindromsimple = function (st){

    return st.split("").reverse().join("") === st;
}

var isp = isPalindromsimple(prompt());
console.log(isp);
//break down string into array of chars 

//loop through array of chars and at each index 

//compare character at first index to character at last index

//compare character at second index to character at second to last index

//move inword unti you reach middle character

//return true if the word turns out to be a palendrome 

