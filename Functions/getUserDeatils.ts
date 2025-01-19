function getUserDetails(user: {id: number, name: string}): string{
    return `User ID: ${user.id}, Name: ${user.name}`;
}

console.log(getUserDetails({id: 1, name: 'John Doe'})); 