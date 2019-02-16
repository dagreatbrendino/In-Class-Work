var toNeg = function(arg){

    try{
        var parsed = parseFloat(arg) * -1
        if(isNaN(arg)){
            throw "Not a number rep"
        }
        return parsed;
        
    }
    catch(e){
        console.error(e);
    }
}

console.log(toNeg("-22"));