
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

//1 - Skrypt wykrywa błąd i nie działa poprawnie. 
// Pobieramy element ze strony mimo że nie jest jeszcze załadowany.

//2 - Sytuacja się poprawiła.

//3 - Nie ma żadnej różnicy.