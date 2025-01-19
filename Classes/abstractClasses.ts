abstract class Animal1{//abstract  class, cannot create instance of abstract class
    abstract makeSound(): void//abstract method

    move(): void{
        console.log("Moving...")
    }
}

class Dog1 extends Animal1{//all abstract methods should be overriden
    makeSound(): void {
        console.log("Bark!")
    }
}

const dog2 = new Dog1()
dog2.makeSound()
dog2.move()