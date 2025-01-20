"use strict";
const getUserPermission = (user) => {
    if (user.userType === 'Admin') {
        return user.admin;
    }
    else if (user.userType === 'Editor') {
        return user.editor;
    }
    else {
        return user.viewer;
    }
};
let user1 = {
    userType: 'Admin',
    admin: "Full access",
    editor: "Lmited access",
    viewer: "Read-only access"
};
console.log(getUserPermission(user1));
