import { usernameValidation } from "./externalModule.js";

document.getElementById("names").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    document.getElementById("msg").innerHTML=usernameValidation(e.target.value)
})