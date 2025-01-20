enum WeatherConditions{
    Sunny,
    Cloudy,
    Rainy,
    Stormy,
}

const suggestActivity = (weather: WeatherConditions): string => {
    if(weather === WeatherConditions.Sunny){
        return 'Go for a walk';
    } else if(weather === WeatherConditions.Cloudy){
        return 'Play football';
    } else if(weather === WeatherConditions.Rainy){
        return 'Watch a movie';
    } else if(weather === WeatherConditions.Stormy){
        return 'Stay home';
    } else {
        return 'Unknown weather condition';
    }
}

const weatherToday: WeatherConditions = WeatherConditions.Sunny
console.log(suggestActivity(weatherToday))
