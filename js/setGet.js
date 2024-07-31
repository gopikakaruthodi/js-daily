class Button{
    constructor(name){
        this.btn=document.createElement("button")
        this.btn.textContent=name
        document.body.appendChild(this.btn)

    }

    set Width(width){
        this.btn.style.width=width+"px";
     

    }
    set Height(height){
       
        this.btn.style.height=height+"px";

    }

    // getWidth(){
    //     return this.btn.style.width
     

    // }
    // getHeight(){
       
    //     return this.btn.style.height

    // }

    get Width(){
        return this.btn.style.width
     

    }
    get Height(){
       
        return this.btn.style.height

    }
}

b= new Button("Click Me")
// b.setWidth(200)
// b.setHeight(200)

b.Width=200
b.Height=200

console.log(b.Width);
console.log(b.Height);




