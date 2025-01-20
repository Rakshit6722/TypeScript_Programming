"use strict";
const renewSubscription = (subscription, months) => {
    let currentDate = new Date();
    let newDate = currentDate.setMonth(currentDate.getMonth() + months);
    let newValidity = newDate.toLocaleString();
    subscription.validTill = newValidity;
    return subscription;
};
let television_susbcription = {
    planId: "pla123",
    user: "rakshit435",
    planType: "basic",
    validTill: new Date().toDateString()
};
console.log(renewSubscription(television_susbcription, 2));
