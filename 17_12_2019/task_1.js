/**
 * W pliku breeds znajduje sie stala o tej samej nazwie co plik.
 * Stala ta przechowuje zestaw danych.
 *
 * napisz funkcje ktora zwroci obiek, ktory jako klucz przyjmie wartosc pola "country_code"
 * a wartoscia bedzie wartosc z pola "origin"
 *
 * Czyli ma to byc obiekt reprezentujacy kod kraju i nazwe kraju
 *
 * {
 *  CA: 'Canada',
 *  US: 'United States',
 *  // ...
 * }
 */

 //rozwiązanie na fora


function task1 (data = breeds) {
    let spis_panstw = {};
    for(let i = 0, len = data.length; i < len; i += 1) {
      let dataCut = data[i];
      let shortName= dataCut.country_code;
      let nameOfCountry = dataCut.origin;
      spis_panstw[shortName] = nameOfCountry; 
    }
    return spis_panstw;
  }


  //rzowiazanaie na map


function task1Map (data = breeds) {
    return data.map(function(item) {
        
        return {[item.country_code] : item.origin};
    });
}

// rozwiazanie map wersja strzałkowa

let zestawienieMap = breeds.map(usr => ({[usr.country_code]: usr.origin}))

// rozwiazanie reduce

const zestawienieReduce  = zestawienieMap.reduce(
    (obj1, obj2) => Object.assign(obj1,obj2)
    ,
    
);