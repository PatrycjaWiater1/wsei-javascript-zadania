// // Zad0

// function checkArray(arrayTwoD) {
//     let newArr = [];

//     for (let i = 0; i < arrayTwoD.length; i++) {

//         let second = arrayTwoD[i];

//         for (let j = 0; j < second.length; j++) {

//             if (arrayTwoD[i][j] % 2 === 0) {
//                 newArr.push(true);
//             }
//             else {
//                 newArr.push(false);
//             }

            
//         }
        
//     }
//     console.log(newArr);
//     return newArr;
 
// }

// var arr = [
//     [11, 12],
//     [42, 2],
//     [-4, -120],
//     [0, 0],
//     [1, 34],
// ];
// checkArray(arr);


// zad1

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
//console.log(task1Array[3][2]);

for(let i = 0; i<task1Array.length; i++){
    if(i===1){
        //console.log(task1Array[i].length);
    }
}

//console.log(task1Array[4][2]);

//zad2

//task2Array.forEach(num => console.log(num));
//task2Array.forEach(num => console.log(num.length));

for(let i = 0; i<task2Array.length; i++){
    
    for(let j = 0; j<task2Array[i].length; j++){
        //console.log(task2Array[i][j]);
    }
}

function  print2DArray(arrayTwoD){
    arrayTwoD.forEach(element => element.forEach(num => console.log(num)));
}


//print2DArray(task2Array);

//zad4

var my2DArray = [
[5,6,"banan",9],
[3,"jablko",6,8],
[2,"truskawka",1,7]
];

print2DArray(my2DArray);


// zad5

function create2DArray(rows, columns){
    var newTable = [];
    var temporarytable = [];
    var number = 1;

    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            temporarytable.push(number++);
        }

        newTable.push(temporarytable);
        temporarytable = [];
    }


    console.log(newTable);
    return newTable;
}

//create2DArray(4,4);

