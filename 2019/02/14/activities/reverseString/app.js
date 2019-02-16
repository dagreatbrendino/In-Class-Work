var args = process.argv;

var start = args[2];

function reverseStr (str) {
    if (str === "") {
        return "";
    } else {
        console.log(str);
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse(start));