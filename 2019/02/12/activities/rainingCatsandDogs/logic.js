var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function(){
        if(this.raining){
            console.log(this.noise);
        }
    }
}
var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function(){
        if(this.raining){
            console.log(this.noise);
        }
    }
}

dogs.makeNoise();
cats.makeNoise();
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dRain, cRain) {
    if(dRain && cRain){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}
massHysteria(dogs.raining, cats.raining);