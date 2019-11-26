/*adanie dodatkowe dla chetnych, ale zachecam zeby kazdy z Was sprobowal

Zmien tak wytyczne zadania [2][1], zeby napisac funkcje, ktora bedzie przyjmowala dwa parametry: speed i typeOfRoad gdzie wartosc domyslna typeOfRoad jest rowna 'city' funkcja powinna wypisywac to co jest zapisane w zadaniu [2][1] kiedy przy wywolaniu podajemy speed i/lub typeOfRoad:

czyli jezeli wywolam funkcje 
myFunction(30); to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
myFunction(150, 'expressway'); zostanie wyswietlony tekst  'Eska: przekroczyles prędkość'

itd.*/

function speed_test(speed, typeOfRoad='city') {

const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

this.speed = speed;
this.typeOfRoad = typeOfRoad;

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
}
