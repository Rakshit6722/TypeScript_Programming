"use strict";
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit[DistanceUnit["Kilometer"] = 1] = "Kilometer";
    DistanceUnit[DistanceUnit["Meter"] = 2] = "Meter";
    DistanceUnit[DistanceUnit["Mile"] = 3] = "Mile";
})(DistanceUnit || (DistanceUnit = {}));
const convertDistance = (distance, unit) => {
    switch (unit) {
        case DistanceUnit.Kilometer:
            return distance * 1.60934;
        case DistanceUnit.Meter:
            return distance * 1609.34;
        case DistanceUnit.Mile:
            return distance;
    }
};
let distance = 10;
console.log(`Distance in kilometers: ${convertDistance(distance, DistanceUnit.Kilometer)}`);
