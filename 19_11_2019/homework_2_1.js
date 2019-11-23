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

