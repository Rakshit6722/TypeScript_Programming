"use strict";
const markAsLive = (event) => {
    if (!event.isLive) {
        event.isLive = true;
    }
    return event;
};
let event2 = {
    id: "eve12341",
    title: "ML_seminar",
    date: new Date(),
    location: "Online",
    link: "https://www.url.com",
    isLive: false,
};
console.log(markAsLive(event2));
