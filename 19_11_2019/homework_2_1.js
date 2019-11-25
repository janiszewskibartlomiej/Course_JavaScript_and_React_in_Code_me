/*Zadeklaruj stala CITY_SPEED_LIMIT i przypisz jej wartosc 50, zadeklaruj stala TWO_LANE_EXPRESSWAY_SPEED_LIMIT i przypisz jej wartosc 120, zadeklaruj stala HIGHWAY_SPEED_LIMIT i przypisz jej wartosc 140.

Utworz zmienna speed, w ktorej bedzie mozna zmieniac wartosc. Niech wartosc poczatkowow tej zmiennej  wynosi 49.
Utworz zmienna typeOfRoad, w ktorej bedzie mozna zmieniac wartosc. Niech wartosc poczatkowa tej zmiennej wynosi 'city'.

Napisz instrukcje warunkowa (if, switch lub jedna i druga), ktoryj jezeli zostana spelnione warunki: 

1. typeOfRoad ma wartosc 'city' i speed jest mniejsze od wartosci CITY_SPEED_LIMIT to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo' jezeli ta predkosc jest wieksza od wartosci CITY_SPEED_LIMIT - wyswietlony zostanie tekst: 'Miasto: przekroczyles prędkość'.

2.  typeOfRoad ma wartosc 'expressway' i speed jest mniejsze od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT to zostanie wyswietlony tekst 'Eska: jedziesz prawidlowo' jezeli ta predkosc jest wieksza od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT - wyswietlony zostanie tekst: 'Eska: przekroczyles prędkość'.

3.  typeOfRoad ma wartosc 'highway' i speed jest mniejsze od wartosci HIGHWAY_SPEED_LIMIT to zostanie wyswietlony tekst 'Autostrada: jedziesz prawidlowo' jezeli ta predkosc jest wieksza od wartosci HIGHWAY_SPEED_LIMIT - wyswietlony zostanie tekst: 'autostrada: przekroczyles prędkość'.
*/

const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 49;
let typeOfRoad = 'city';

if (typeOfRoad === 'city') {
    switch (speed) {
        case speed < CITY_SPEED_LIMIT:
            console.log('Miasto: jedzisz prawidłowo');
            break;
        case speed > CITY_SPEED_LIMIT:
            console.log('Miasto: przekroczyles prędkość');
            break;
    }
} else if (typeOfRoad === 'expressway') {
    switch(speed) {
        case speed < TWO_LANE_EXPRESSWAY_SPEED_LIMIT:
                console.log('Eska: jedzisz prawidłowo');
                break;
            case speed > TWO_LANE_EXPRESSWAY_SPEED_LIMIT:
                console.log('Eska: przekroczyles prędkość');
                break;
    } 
} else if (typeOfRoad === 'highway') {
    switch(speed) {
        case speed < HIGHWAY_SPEED_LIMIT:
        console.log('Autostrada: jedzisz prawidłowo');
        break;
        case speed > HIGHWAY_SPEED_LIMIT:
        console.log('Autostrada: przekroczyles prędkość');
        break;
    }         
}

