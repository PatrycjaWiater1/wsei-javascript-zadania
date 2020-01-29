
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Deklaracja funkcji
function sortArray() {

    //Deklaracja i inicjalizacja tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Funkcja sortująca od min do max
    points.sort(function (a, b) {
        //porównywanie i sortowanie elementów tablicy
        return a - b;
    });

    //zwraca już posortowaną tablicę
    return points;
}

//Wywołanie funkcji
sortArray();
