// console.log(this);  return window object


// return window object
// function asd(){
//     console.log(this);
// }

// asd()


// ===================================================
// fn inside object using this keyword

// person={
//     name:"aby",
//     age:20,
//     class:10,
//     getName(){
//         // console.log(this);
//         console.log(this.name);
//     }
    


// }

// console.log(person.name);
// console.log(person.age);
// person.getName()


// ====================================================
// anounymous

// person={
//         name:"aby",
//         age:20,
//         class:10,
//         getName:function(){
//             console.log(this.name);
//         }
//     }
    
//     console.log(person.name);
//     console.log(person.age);
//     person.getName()
// =========================================================
// 
// function getName(){
//     console.log(this.name);
// }

// person1={
//     name:"aby",
//     age:20,
   
//     method:getName
// }

// person2={
//     name:"eby",
//     age:20,
//     method:getName
    
// }

// person1.method()


// ========================================================
// apply and call for call many object using function
// function getName(a,b,c){
//     console.log(a,b,c);
//     console.log(this.name);
// }

// person1={
//     name:"aby",
//     age:20,
   
   
// }

// person2={
//     name:"eby",
//     age:20,
   
    
// }

// getName.call(person1,"1","2","3")
// getName.apply(person2,["1","2","3"]) 
// getName.apply(person2,"1","2","3") this create error in apply


// ==============================
// bind

// function getName(){
//     console.log();
//     console.log(this.name);
// }

// person1={
//     name:"aby",
//     age:20,
   
   
// }

// person2={
//     name:"eby",
//     age:20,
   
    
// }

// const zx=getName.bind(person1)
// zx()



// ================================================
// arrow function context in window



// person1={
//     name:"aby",
//     age:20, 
// }

// person2={
//     name:"eby",
//     age:20,
//     getName:()=>{
//         console.log(this);
//     }
   
    
// }

// person2.getName()


// ==============================================
// this in detail

std1={
        name:"aby",
        age:20, 
    }
std2={
        name:"eby",
        age:20, 
    }
std3={
        name:"iby",
        age:20, 
    }

function getName(){
    console.log(this.name);
}

getName.call(std3)




