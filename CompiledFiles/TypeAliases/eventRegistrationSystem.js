"use strict";
const registerUserForEvent = (event, userName) => {
    if (event.type === 'Physical') {
        return `${userName} registered for ${event.name} at ${event.location}`;
    }
    else {
        return `${userName} registered for ${event.name} at ${event.link}`;
    }
};
let physicalEvent = {
    type: 'Physical',
    id: 'eve12341',
    name: 'ML_seminar',
    date: new Date(),
    location: 'Online',
};
let virtualEvent = {
    type: 'Virtual',
    id: 'eve12342',
    name: 'React_Conference',
    date: new Date(),
    link: 'https://www.url.com',
};
console.log(registerUserForEvent(physicalEvent, 'Rakshit'));
console.log(registerUserForEvent(virtualEvent, 'Rakshit'));
