interface UserProfile{
    readonly userId: number,
    username: string,
    bio?: string,
    friends: UserProfile[]
}

const updateBio = (user: UserProfile, newBio?: string): UserProfile => {
    if(newBio){
        user.bio = newBio
    }

    return user
}

let profile_3: UserProfile = {
    userId: 1133,
    username: "profile_3",
    friends: [],
    bio: "hi everyone"
}


let profile_2: UserProfile = {
    userId: 1133,
    username: "profile_2",
    friends:[profile_3]
}

let profile_1: UserProfile = {
    userId: 1133,
    username: "profile_1",
    friends: [profile_2]
}

console.log(updateBio(profile_1,"hi i am profile1"))



