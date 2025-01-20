"use strict";
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Cloudy"] = 1] = "Cloudy";
    WeatherConditions[WeatherConditions["Rainy"] = 2] = "Rainy";
    WeatherConditions[WeatherConditions["Stormy"] = 3] = "Stormy";
})(WeatherConditions || (WeatherConditions = {}));
const suggestActivity = (weather) => {
    if (weather === WeatherConditions.Sunny) {
        return 'Go for a walk';
    }
    else if (weather === WeatherConditions.Cloudy) {
        return 'Play football';
    }
    else if (weather === WeatherConditions.Rainy) {
        return 'Watch a movie';
    }
    else if (weather === WeatherConditions.Stormy) {
        return 'Stay home';
    }
    else {
        return 'Unknown weather condition';
    }
};
const weatherToday = WeatherConditions.Sunny;
console.log(suggestActivity(weatherToday));
