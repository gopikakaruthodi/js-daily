import { passwordValidation } from "./externalModule.js";

document.getElementById("phone").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    document.getElementById("msg").innerHTML=phoneValidation(e.target.value)
})
