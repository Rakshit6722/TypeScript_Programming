"use strict";
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
const getPermissions = (role) => {
    switch (role) {
        case UserRole.Admin:
            return ["READ", "WRITE", "DELETE"];
        case UserRole.Editor:
            return ["READ", "WRITE"];
        case UserRole.Viewer:
            return ["READ"];
        default:
            return [];
    }
};
const userRole = UserRole.Admin;
const permissions = getPermissions(userRole);
console.log(permissions);
