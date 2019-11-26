const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 49;
let typeOfRoad = 'city';

    switch (typeOfRoad) { /*50 === true*/
        case 'city':
            if (speed < CITY_SPEED_LIMIT) {
                console.log('Miasto: jedzisz prawidłowo');
            } else {
                console.log('Miasto: przekroczyles prędkość');
            }
            break;
        case 'expressway':
            if (speed < TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
                console.log('Eska: jedzisz prawidłowo');
            } else {
                console.log('Eska: przekroczyles prędkość');
            }
            break;
        case 'highway':
            if (speed < HIGHWAY_SPEED_LIMIT) {
                console.log('Autostrada: jedzisz prawidłowo');
            } else {
                console.log('Autostrada: przekroczyles prędkość');
            }
            break;
    }

