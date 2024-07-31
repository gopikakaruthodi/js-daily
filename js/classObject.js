class Vehicle{
    // wheel=4;
    // color= "white";
    // wheel;
    // color;
    constructor(wheel,color){
        this.wheel=wheel
        this.color=color
        console.log("is the Costructor");
    }


    working(){
        console.log("car is working",this.wheel,this.color);
    }
}



car= new Vehicle(4,"white")
car.working()
// wheel=10
// console.log(car.wheel);
// console.log(car.color);


