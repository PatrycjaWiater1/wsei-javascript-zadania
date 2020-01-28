/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Funkcja
function jeden() {

    //Zmienna w funkcji "jeden"
    var zmienna1 = 1;

    //Funkcja wewnątrz funcji "jeden"
    function dwa() {

        //Wypisuje w konsoli wartość zmiennej1
        console.log(zmienna1);

        //Zmienna wewnątrz funkcji "dwa" - "jeden" nie ma do niej dostępu
        var zmienna2 = 3;
    }

    //wywołanie funkcji "dwa"
    dwa();

    //wypisanie w konsoli wartości zmiennej2
    console.log(zmienna2)
}

//wywołanie zewnętrznej funkcji "jeden"
jeden()