//Take sentence as string 

//Look for spaces in the string 

//for every space incriment a value that tells you the number of words by 1

var wordCount = function(str){
    var index=0;
    words = 1;
    while ((index = str.indexOf(' ', index + 1)) > 0) {
        words++
    }
    return words
}

var numwords = wordCount(prompt());

console.log(numwords);

var altWordCount = function(st){

    return st.split(" ").length;
}

var numWords2 = altWordCount(prompt());

console.log(numWords2);