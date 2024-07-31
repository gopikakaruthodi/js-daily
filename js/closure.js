function first(a,b){
   function myFun(){
    c=a+b
    return c
   }
   return myFun
    
}

let x=first(3,5);
let y=x()
console.log(y);
console.dir(x)