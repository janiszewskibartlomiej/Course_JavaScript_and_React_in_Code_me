/*Napisz funkcję, która przyjmie dwa parametry min i max typu number - liczby całkowite, 
które będą określały przedział liczb całkowitych z obu stron
 zamknięty - czyli - liczby te należą do tego zbioru liczb.
Funkcja powinna wypisać (console.log) wszystkie liczby parzyste oraz zwrócić sumę 
wszystkich liczb z przedziału określonego przez parametr min i max.*/

function numberAndSum (min, max) {
    suma = 0;
    if (min % 2 != 0) {
        min = min + 1
    }
    for (let i = min; i <= max; i = i + 2) {
        suma += i
        console.log(i);
    }
    console.log("Suma liczb = ", suma);
}

numberAndSum(2,10);

numberAndSum(3,19)

numberAndSum(1,18)