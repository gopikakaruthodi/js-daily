function first(){
    var a=[10]
    second(a);
    console.log("value of first is "+a[0]);     
    
}

function second(b){
    b[0]+=1
    console.log("value of second is "+b[0]);
}



first()