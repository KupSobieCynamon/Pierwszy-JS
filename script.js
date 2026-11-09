"use strict";

// TODO: utwórz zmienną przechowującą stan licznika
let counter = 0;
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
function addPoint() {
    counter++;
    document.getElementById(
        "counter-display"
    ).textContent = counter;
}
function resetCounter() {
    counter=0;
    document.getElementById(
        "counter-display"
    ).textContent = counter;

}
// TODO: utwórz tablicę z elementami do losowania
let items = [ "Marian", "Gaweł", "Krzysztof", "Tekla", "Anna", "Weronika", "Mirosław", "Danuta", "Jadwiga", "Ludwik", "Żaneta", "Ziemowit", "Amadeusz", "Aneta", "Adam", "Sebastian", "Sylwester", "Dariusz", "Grażyna", "Nadzieja", "Róża", "Emanuela", "Zenon", "Romana", "Barnaba", "Franciszek", "Elżbieta", "Tamara", "Wojciecha", "Robert", "Hipolit", "Józef", "Hieronim", "Gwidon", "Ada", "Tomasz", "Bartolomeusz", "Iwona", "Wiktor", "Jarosława", "Łukasz", "Czesław", "Michał", "Marceli", "Kacper" ]
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
function losowanie() {
    let randomIndex = Math.floor(Math.random() * items.length);
    let randomItem = items[randomIndex];
    document.getElementById(
        "random-display"
    ).textContent = randomItem;
}