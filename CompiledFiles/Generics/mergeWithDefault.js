"use strict";
const mergeWithDefault = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const defaults = { theme: "dark", showNotifications: true };
const userSettings = { theme: 'light' };
console.log(mergeWithDefault(defaults, userSettings));
