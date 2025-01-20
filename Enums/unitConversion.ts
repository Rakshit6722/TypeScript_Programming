enum DistanceUnit{
    Kilometer = 1,
    Meter,
    Mile
}

const convertDistance = (distance: number, unit: DistanceUnit): number => {
    switch(unit){
        case DistanceUnit.Kilometer:
            return distance * 1.60934;
        case DistanceUnit.Meter:
            return distance * 1609.34;
        case DistanceUnit.Mile:
            return distance;
    }
}

let distance = 10;

console.log(`Distance in kilometers: ${convertDistance(distance, DistanceUnit.Kilometer)}`);