//Zad0

const distFromAvarage = (arr) => {
    let avg = 0;
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    })

    avg = sum / arr.length;
    let newArr = [];

    arr.forEach(item => {
        newArr.push(item - avg);
    })
    console.log(newArr);
    return newArr;
}
distFromAvarage([1,2,3,4,5,6,7]);


//Zad1

var table=["kiwi", "arbuz", "melon", "borówka"];

console.log(table[0]);

console.log(table[table.length - 1]);

for(i=0;i<table.length;i++){
    console.log(table[i])
}

//Zad2

function createArray(number) {
    var newArray = [];

    for (var i = 0; i <= number; i++) {
        newArray.push(i);
    }

    return newArray
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

//zad3

function printTable(array){
    for(i=0; i<array.lenght; i++){
        console.log(array[i])
    }
}
printTable([1,2,3,4]);

//zad4

function multiply(array) {
    let sum = 1; 
    for(var i=0; i<array.length; i++) {
        sum*=array[i];

    }
    console.log(sum);
    return sum;

}
multiply([1,2,3,4,5,6,7]);

//zad5

function getEvenAverage(array){
    let evenSum = 0;
    let evenCounter =0;
    for(i=0;i<array.length; i++){
        if(array[i]%2 == 0){
            evenSum += array[i];
            evenCounter++;
        }
    }
    let evenAvg = evenSum / evenCounter;
    console.log(evenAvg);
    if(evenCounter == 0) {
        return null;
    }
    else return evenAvg;
}

getEvenAverage([1,2,3,4,5,6,7]);
getEvenAverage([1,1,1,1]);
getEvenAverage([2,8,3,7,4]);

//zad6

function sortArray(array){
    array.sort((a,b) => a-b);
    console.log(array);
    return array;
}

sortArray([145,11,3,64,4,6,10])


// zad7

function addArrays(arrayOne, arrayTwo){
    
    let len;
    let newArr = [];
    
    if(arrayOne.length > arrayTwo.length){
        len = arrayOne.length;
    } 
    else {
        len = arrayTwo.length;
    }

    for(let i=0; i < len; i++){

       if(typeof(arrayOne[i]) === "undefined") {
           newArr.push(arrayTwo[i]);
       }
       else if(typeof(arrayTwo[i]) === "undefined"){
           newArr.push(arrayOne[i]);
       }
       else{
        newArr.push(arrayOne[i] + arrayTwo[i]);
       }
       
    }
    console.log(newArr);
    return newArr;
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17])