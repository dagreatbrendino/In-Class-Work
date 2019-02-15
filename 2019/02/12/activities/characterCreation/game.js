function Character(name, prof, gender, age, str, hp){
    this.name = name;
    this.profession = prof;
    this.gender = gender;
    this.age = age;
    this.strength = str;
    this.HP = hp;
    this.printStats = function(){
        console.log("Name: " + this.name + " Profession: " + this.profession + " Gender: " + this.gender + " Age: " + this.age + " Strength: " +
        this.strength + " HP: " + this.HP);
    }
    this.isAlive = function(print){
        if (this.HP > 0){
            if (print){
                console.log(this.name + " has " + this.HP + " healthpoints and is alive!");
            }
            return true;
        }
        else{
            if (print){
                console.log(this.name + " is not alive!");
            }
            return false;
        }
    }
    this.attack = function(opponent){
        opponent.HP -= this.strength;
        console.log(this.name + " attacked " + opponent.name + " for " + this.strength + " points of damage")
        if(!opponent.isAlive(true)){
            this.levelUp();
        }
    }
    this.levelUp = function(){
        this.age ++;
        this.strength += 5;
        this.HP += 25;
        console.log(this.name + " has leveled up! Their new stats are ");
        this.printStats();
    }
}

var  merlin= new Character("Merlin","Wizzard", "male", 300, 30, 220);
merlin.printStats();

var xander = new Character("Xander", "Agent", "male", 32, 16, 180);
xander.printStats()

while(xander.isAlive(false) && merlin.isAlive(false)){
    merlin.attack(xander);
    if (xander.isAlive(false)){
        xander.attack(merlin);
    }
}
