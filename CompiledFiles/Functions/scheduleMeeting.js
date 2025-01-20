"use strict";
function scheduleMeeting(date, time, location = "Online") {
    return `Meeting scheduled on ${date} at ${time} at ${location}`;
}
console.log(scheduleMeeting('2021-09-01', '10:00'));
console.log(scheduleMeeting('2021-09-01', '10:00', 'Office'));
