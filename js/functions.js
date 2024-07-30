ob=[{name:"aby",age:20,dep:"MERN",exp:2},
    {name:"jenny",age:22,dep:"MERN",exp:1},
    {name:"jiz",age:21,dep:"Network",exp:2},
    {name:"dona",age:19,dep:"UI/UX",exp:1},
    {name:"aby",age:20,dep:"MERN",exp:3},
]

// -----------------------------------------------
// for(i in obj){
//     console.log(obj[i].name);
// }
// obj.forEach((item,index)=>{
//     console.log(item.exp);
// })
// -----------------------------------------------


// obj.map((item)=>{
//     console.log(item.name);
// })

// -----------------------------------------------


// let x=obj.find((item)=>{
//     return item.name=="aby"
// })
// console.log(x);
// console.log(typeof(x));

// -----------------------------------------------


// let x=obj.filter((item)=>{
//         return item.name=="aby"
//     })
//     console.log(x);
//     console.log(typeof(x));

// ===========================================reduce return last object,total intialised in last as 0 or any number and can calcuate the total using this
const x=ob.reduce((total,item)=>{
    // return item
    return total+=item.age


},0)

console.log(x);

    