/*Napisz funkcję, która przyjmie jako parametr str łańcuch znaków. 
Funkcja powinna zwrócić string stworzony ze znaków znajdujących się
 na nieparzystej pozycji. Jeżeli podczas wywołania funkcji 
 nie zostanie podany argument to domyślnie funkcja 
 jako parametr str przyjmie łańcuch 'koparka'*/

function marks (chars='koparka') {
    let new_string = '';
    let new_chars = chars.split('');
    let len = new_chars.length;
    for (let i = 0; i <= len; i += 2) {
        if (new_chars[i]) {
            //console.log(new_chars[i]);
            new_string += new_chars[i];
        }
        }
    return new_string;
    }

/*----------Secend version--Simple---------------------------*/

function marksSimpleVer (chars='koparka') {
    let new_string = '';
    let len = chars.length;
    for (let i = 0; i <= len; i += 2) {
        if (chars[i]) {
            //console.log(new_chars[i]);
            new_string += chars[i];
        }
        }
    return new_string;
    }
