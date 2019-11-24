//zad 0

var car = {
    brand: "opel",
    color: "matte black",
    numberOfKilometers: 0,

    printCarinfo: function() {
        console.log(this.brand + " " + this.color + " " + this.numberOfKilometers)
    },

    drive: function(kilometers) {
        this.numberOfKilometers += kilometers;
    }
}

car.dates = ["styczeń", "marzec", "maj"];

function addDate(data){
    car.dates.push(data)
};
function viewDates() {
    for(i=0;i<car.dates.length;i++){
        console.log(car.dates[i])
    }
};

viewDates();
addDate("kwiecien");
viewDates();
car.printCarinfo(); 
car.drive(20);
car.printCarinfo();

//zad 1

car.list = ['2019-02-02'];

car.add = function(data) {
    this.list.push(data)
}
car.display = function() {
    return this.list;
}
car.add = function(data){
    this.list.push(data)
}

//zad 2

var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function (num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.result = num1 + num2;
        //return this.result;
        this.historiaOperacji.push("added " + this.num1 + " to " + this.num2 + " got " + this.result)
    },
    
    multiply: function(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
        this.result = num1 * num2;
        //return this.result;
        this.historiaOperacji.push("multiplied " + this.num1 + " by " + this.num2 + " got " + this.result)
    }

};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());


//zad 3

var stairs = {
    step: 0,

    up: function() {
        this.step++
    },
    down: function(){
        this.step--
    },
    printStep: function(){
        console.log(this.step)
    }
}
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();