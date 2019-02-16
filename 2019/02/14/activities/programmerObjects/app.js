function Programmer (name, job, age, fav){
    this.name = name;
    this.position = job;
    this.age = age;
    this.favPL = fav;

    this.info = function(){
        console.log(this.name, " ", this.position, " ", this.age, " ", this.favPL);
    }
}

var bill = new Programmer ("Bill","Backend Developer", 34, "Python");
bill.info();