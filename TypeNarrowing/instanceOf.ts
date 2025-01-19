class Dog2{
    bark(){
        console.log("Woof!")
    }
}

class Cat2{
    meow(){
        console.log("Meow!")
    }
}

function animalSounds(animal: Dog2 | Cat2){
    if(animal instanceof Dog2){ // instanceOf checks if an object is an isntance of a specific class
        animal.bark()
    }else if(animal instanceof Cat2){
        animal.meow()
    }
}

animalSounds(new Dog2())
animalSounds(new Cat2())