import { emailValidation } from "./externalModule.js";

document.getElementById("email").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    document.getElementById("msg").innerHTML=emailValidation(e.target.value)
})