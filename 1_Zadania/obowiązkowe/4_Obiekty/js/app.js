//zad 0a

const city = {
    capital : 'Warsaw',
    population : 45000,
    president : 'TenCzłowiek',
    primeMinisters : [
        'Pierwszy Minister',
        'Drugi Ministerek',
        'Niemampomysłu Nanazwisko'
    ]
};
console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//zad 0b
const timeMachine = {
    shape : 'romb',
    model : 'Whirl540',
    run : function(date, place) {

        console.log(`The time is ${date}, we are in ${place}`)
    }
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run('2 Stycznia 2039', 'Florida')

//zad 1

const book ={
title: 'Malowany Człowiek',
author: 'Peter V.Brett',
numberOfPages: 852
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//zad 2

const person ={
    name: 'Pjoter',
    age: 15,
    sayHello: function(){
        console.log('hello')
    }
    };
    
    console.log(person.name);
    console.log(person.age);
    person.sayHello();

    //zad 3

    const mojUlubionyPrzepis ={
        title: 'Babka Piaskowa',
        servings: 4,
    };
    mojUlubionyPrzepis.ingredients = ['piasek', 'woda', 'mąka', 'jaja', 'cukier'];

    console.log(mojUlubionyPrzepis.title);
    console.log(mojUlubionyPrzepis.servings);
    console.log(mojUlubionyPrzepis.ingredients);

    //zad 4
    var movie = {
        director: "Peter Jackson",
        writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
        stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        country: "New Zealand | USA",
        budget: "$93,000,000",
        imdbPoints: 8.8,
        year: 2001,
        time: "2h 58 min",
        category: " Adventure, Drama, Fantasy"
    };
    for (const key in movie){
        console.log(`${key} : ${movie[key]}`)
    };

//zad 5

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for (let i=0; i<animals.length; i++){
    for (const key in animals[i]){
        console.log(`${key}: ${animals[i][key]}`);
    };
};

//zad 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);