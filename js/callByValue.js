function first(){
    var a=10
    second(a);
    console.log("value of first is "+a);     
    
}

function second(b){
    b+=1
    console.log("value of second is "+b);
}



first()