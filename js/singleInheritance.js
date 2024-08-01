class Animal{
    // constructor(name){
    //     this.name=name

    // } 
    speak(a){
        console.log("make sound"+a);
    }

}

class Dog extends Animal{
    // constructor(name,breed){
    //     super(name)
    //     this.breed=breed

    // } 
    speak(a){
        console.log("barking"+a);
    }

    
}

let dog = new Dog()
dog.speak("puppy")
