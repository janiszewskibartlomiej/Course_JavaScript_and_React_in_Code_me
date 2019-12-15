/**
 * Napisz funkcje get, ktora jako parametry przyjmie odpowiednio obiekt (object),
 * szukane zagniezdzenie w drzewie obiektu (path), i opcjonalnie wartosc domyslna (defaultValue),
 * ktora zostanie zwrocona jezeli nie zostanie znaleziona wartosc w sciezce.
 * Funkcja ma zwrocic wartosc w szukanej sciezce lub defaultValue
 *
 * const obj = {a: {b: c: { d: 'super'} } };
 * 
 * get(obj, 'a.b.c.d', 'default');
 * // zwroci 'super'
 * 
 * get(obj, 'e.f.g.h');
 * // zwroci undefined;
 * 
 * get(obj, 'a.b');
 * // zwroci { c: { d: 'super' } }
 */

const obj = {a: {b: c: { d: 'super'} } };

function get(object, path, defaultValue)
const pathArray = 'a.b.c.d'.split('.');
let parent = obj;
for(let i = 0, ln = pathArray.length; i < ln; i += 1) {
    const name = pathArray[i];
    const child = parent[name];
    if (parent[pathArray[i]] !== undefined) {
        const child = parent[pathArray[i]];
        if (typeof child === 'object') {
            parent = child;
        } 
        
    }
}