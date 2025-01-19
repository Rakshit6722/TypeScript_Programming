"use strict";
function getUserDetails(user) {
    return `User ID: ${user.id}, Name: ${user.name}`;
}
console.log(getUserDetails({ id: 1, name: 'John Doe' }));
