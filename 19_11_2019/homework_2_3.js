/*adanie dodatkowe dla chetnych, ale zachecam zeby kazdy z Was sprobowal

Zmien tak wytyczne zadania [2][1], zeby napisac funkcje, ktora bedzie przyjmowala dwa parametry: speed i typeOfRoad gdzie wartosc domyslna typeOfRoad jest rowna 'city' funkcja powinna wypisywac to co jest zapisane w zadaniu [2][1] kiedy przy wywolaniu podajemy speed i/lub typeOfRoad:

czyli jezeli wywolam funkcje 
myFunction(30); to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
myFunction(150, 'expressway'); zostanie wyswietlony tekst  'Eska: przekroczyles prędkość'

itd.*/

const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let road = ['Miasto: ', 'Eska: ', 'Autostrada: ']
let tooMuch = 'przekroczyłeś prędkość'
let corectSpead = 'jedziesz prawidłowo'

function speed_test(speed, typeOfRoad='city') {

switch (typeOfRoad) {
    case 'city':
        if (speed < CITY_SPEED_LIMIT) {
            return console.log(road[0] + corectSpead);
        } else {
            return console.log(road[0] + tooMuch);
        }
    case 'expressway':
        speed < TWO_LANE_EXPRESSWAY_SPEED_LIMIT ? 
        console.log(road[1] + corectSpead) : 
        console.log(road[1] + tooMuch);
        break;
    case 'highway':
        speed < HIGHWAY_SPEED_LIMIT ? console.log(road[2] + corectSpead) : 
        console.log(road[2] + tooMuch);
        break;
}
}
