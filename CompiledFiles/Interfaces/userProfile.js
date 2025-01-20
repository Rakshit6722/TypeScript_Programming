"use strict";
const updateBio = (user, newBio) => {
    if (newBio) {
        user.bio = newBio;
    }
    return user;
};
let profile_3 = {
    userId: 1133,
    username: "profile_3",
    friends: [],
    bio: "hi everyone"
};
let profile_2 = {
    userId: 1133,
    username: "profile_2",
    friends: [profile_3]
};
let profile_1 = {
    userId: 1133,
    username: "profile_1",
    friends: [profile_2]
};
console.log(updateBio(profile_1, "hi i am profile1"));
