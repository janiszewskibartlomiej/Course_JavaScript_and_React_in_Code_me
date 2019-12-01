/*Napisz funkcję, która przyjmie jako parametr str łańcuch znaków. 
Funkcja powinna zwrócić string stworzony ze znaków znajdujących się
 na nieparzystej pozycji. Jeżeli podczas wywołania funkcji 
 nie zostanie podany argument to domyślnie funkcja 
 jako parametr str przyjmie łańcuch 'koparka'*/

function mark (chars='koparka') {
    new_string = '';
    new_chars = chars.split('');
    for (let i = 0; i <= new_chars.lenght; i += 2) {
            console.log(new_chars[i]);
            new_string += new_chars[i];
        }
    return new_string;
    }
    
    