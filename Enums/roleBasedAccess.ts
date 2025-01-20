enum UserRole{
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER",
}

const getPermissions = (role: UserRole) => {
    switch(role){
        case UserRole.Admin:
            return ["READ", "WRITE", "DELETE"];
        case UserRole.Editor:
            return ["READ", "WRITE"];
        case UserRole.Viewer:
            return ["READ"];
        default:
            return [];
    }
}

const userRole: UserRole = UserRole.Admin;
const permissions = getPermissions(userRole);
console.log(permissions)