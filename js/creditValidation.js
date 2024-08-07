import { creditValidation } from "./externalModule.js";


document.getElementById("credit").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    document.getElementById("msg").innerHTML=creditValidation(e.target.value)
})


