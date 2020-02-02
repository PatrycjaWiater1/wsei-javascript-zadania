    //zad 1.
    function getNumber(number, array) {
        let ifContains = false;

        array.forEach(e => {
            if (e === number) {
                ifContains = true;
            }
        });
        return ifContains;
    }

    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100] ));

    //zad 2.

    function createIdentityMatrix(rows, columns) {
        let arrow1 = [];

        for (let i = 0; i < rows; i++) {
            let arrow2 = [];

            for (let j = 0; j < columns; j++) {
                
                if (i === j) {
                    arrow2.push(1);
                } else {
                    arrow2.push(0);
                }
            }
            arrow1.push(arrow2);
        }
        return arrow1;
    }

    console.log(createIdentityMatrix(4,4));

    //zad 3.
    
    var planets = [
        {
            name: "Merkury",
            numberOfMoons: 0
        },
        {
            name: "Wenus",
            numberOfMoons: 0
        },
        {
            name: "Ziemia",
            numberOfMoons: 1
        },
        {
            name: "Mars",
            numberOfMoons: 2
        },
        {
            name: "Jowisz",
            numberOfMoons: 63
        },
        {
            name: "Saturn",
            numberOfMoons: 60
        },
        {
            name: "Uran",
            numberOfMoons: 27
        },
        {
            name: "Neptun",
            numberOfMoons: 13
        }
    ];

    function sortPlanets(planets) {
        let arrow = [];

        arrow = planets.sort((x, y) => {
            return y.numberOfMoons - x.numberOfMoons;
        });
        return arrow;
    }
    let sorted = sortPlanets(planets);
    console.log('sorted planets', sorted);

    //zad 1 - dodatkowe

    function addTheSameNumbers(number, array) {
        let added = 0;
        exists = false;

        array.forEach(elem => {
            if (elem === number) {
                added += elem;
                exists = true;
            }
        });
        if (added === 0 && exists === false) {
            return null;
        }
        return added;
    }

    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ));
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));


//zad 2 - dodatkowe

function factors(n) {
    let arr = [];
    if (n <= 0) {
        return arr;
    }
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));

//zad 3 - dodatkowe

function getMissingElement(arr) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i+1] - arr[i] > 1) {
            return arr[i] + 1;
        }
    }
    return null;
}

console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));
//zad 4 - dodatkowe

function getLastNumbers(number, arr) {
    if (number === 'undefined' || typeof(number) !== 'number') {
        return [];
    }

    let from = arr.length - number;
    let outcome = [];

    for (let i = from; i < arr.length; i++) {
        outcome.push(arr[i]);
    }
    return outcome;
}
console.log(getLastNumbers(2, [1,2,3,4,5,6,7]));
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15]));
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4]));
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));
