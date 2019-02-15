function DigitalPal(){
    this.hungry = false;
    this.sleepy = true;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if (this.hungry){
            console.log("That was yummy!");
            this.sleepy = true;
        }
        else{
            console.log("No thanks! I'm full.");
        }
    }
    this.sleep = function(){
        if(this.sleepy){
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else{
            console.log("No way! I'm not tired.");
        }
    }
    this.play = function(){
        if (this.bored){
            console.log("Yay! Let's play.");
            this.bored = false;
            this.hungry = true;
        }
        else{
            console.log("Not right now. Later?");
        }
    }
    this.increaseAge = function(){
        this.age ++;
        console.log("Happy birthday to me! I am " + this.age + " years old!");
    }
}

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function(){
    console.log("Woof! Woof!");
}
dog.goOutside = function(){
    if (!this.outside){
        console.log("Yay I love outside!");
        this.outside = true;
        this.bark();
    }
    else{
        console.log("We're already outside though...");
    }
}
dog.goInside = function(){
    if (this.outside){
        console.log("Do we have to? Fine...");
        this.outside = false;
    }
    else{
        console.log("We're already inside...");
    }
}
dog.feed();
dog.play();
dog.feed();
dog.sleep();
dog.goInside();
dog.goOutside();
dog.goOutside();
dog.goInside();

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function(){
    console.log("Meow! Meow!");
}
cat.destroyFurniture = function(){
    if (this.houseCondition > 0){
        this.houseCondition -= 10;
        console.log("Muuwhahahaa! Take that furniture!");
        this.bored = false;
        this.sleepy = true;
    }
}
cat.buyNewFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure about that?")
}
for(i = 0; i < 15; i++){
    cat.destroyFurniture()
}
cat.buyNewFurniture();

cat.destroyFurniture();