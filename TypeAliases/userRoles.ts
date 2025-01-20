type Permission = {
    admin: string,
    editor: string,
    viewer: string,
}


type Roles = Permission & {
    userType: "Admin" | "Editor" | "Viewer",
}

const getUserPermission = (user: Roles): string => {
    if(user.userType === 'Admin'){
        return user.admin
    }else if(user.userType === 'Editor'){
        return user.editor
    }else{
        return user.viewer
    }
}

let user1: Roles =   {
    userType: 'Admin',
    admin: "Full access",
    editor: "Lmited access",
    viewer: "Read-only access"
}

console.log(getUserPermission(user1))

