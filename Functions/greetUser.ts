function greetUser(name: string, greeting?: string): string{
    if(greeting){
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greetUser('rakshit'));
console.log(greetUser('rakshit', 'Hi'));