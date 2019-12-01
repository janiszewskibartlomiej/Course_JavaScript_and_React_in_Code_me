/*Napisz funkcję, która przyjmie jako parametr str łańcuch znaków. 
Funkcja powinna zwrócić string stworzony ze znaków znajdujących się
 na nieparzystej pozycji. Jeżeli podczas wywołania funkcji 
 nie zostanie podany argument to domyślnie funkcja 
 jako parametr str przyjmie łańcuch 'koparka'*/

function marks (chars='koparka') {
    new_string = '';
    new_chars = chars.split('');
    len = new_chars.length;
    for (let i = 0; i <= len; i += 2) {
            console.log(new_chars[i]);
            new_string += new_chars[i];
        }
    return console.log(new_string);
    }
