/**
 * Dane tj. w zadaniu 1.
 *
 * napisz funkcje, ktora zwroci obiekt, w ktorym kluczem bedzie wartos pola id
 * a wartoscia bedzie obiekt w ktorym beda dwa pola
 * :: name z wartoscia pola name z podanej stalej
 * :: description z waroscia pola description
 *
 * {
 *    abys: {
 *      name: "Abyssinian",
 *      description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
 *    },
 *    // ...
 * }
 */

 //pierwsza wersja z funkcja strzalkową przypisaną do zmiennej
 let task2 = breeds.map(dane => ({[dane.id] : 
    {["name"] : dane.name, ["description"] : dane.description}}));

//wersja druga - funkcja

function task2Fun (dane = breeds) {
    return breeds.map( function(item) {
        return {[item.id] : 
            {["name"] : item.name, ["description"] : item.description}}},);
};


//reduce

const zestawienieTask2 = task2.reduce((obj1, obj2) => Object.assign(obj1,obj2)
,
{});