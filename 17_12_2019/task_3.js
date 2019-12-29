/**
 * Dane tj. w zadaniu 1.
 *
 * napisz funkcje, ktora zwroci obiekt, w ktorym kluczem bedzie wartosc pola
 * "intelligence" a wartoscia bedzie lista z nazwami ras
 * kotow ktore maja intelligence o takiej wartosci
 *
 * const intelligenceList = {
 *  5: ["Abyssinian", "American Bobtail", ...],
 *  3: ["Aegean", ...],
 *  // ...
 * }
 */
const listaName = breeds.map(element => ({[element.intelligence] : element.name}));

 function task3 (data = breeds) {
     let solution = {}
     const listaName = data.map(element => ({[element.intelligence] : element.name}));
     for (let i = 0, len = listaName.length; i < len; i +=1) {
         let a = keys(listaName[i]);
         let b = listaName[i][a];
        //  console.log(a, b, solution);
        if (solution[a]) {
             (solution[a]).push(b);
        } else {
            solution[a] = [b];
        }
         
     }
     //const listaDocelowa = listaName.map( (item, vol) => ({[item] : [vol]}));
     //const listaDocelowa = listaName.reduce((idCat, group) => Object.assign(idCat,Array(group)));
     return solution;
 };


 function task3Foreach (data = breeds) {
    let solution = {}
    const listaName = data.map(element => ({[element.intelligence] : element.name}));
    listaName.forEach(element => {
        let a = keys(element);
        let b = element[a];
        if (solution[a]) {
            (solution[a]).push(b);
       } else {
           solution[a] = [b];
       }
    });       
    return solution;
};