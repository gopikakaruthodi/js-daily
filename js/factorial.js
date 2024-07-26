let i=1

function findFact(){
    let no=parseInt(document.getElementById("txt").value)
    setTimeout(()=>{
        document.getElementById("result").textContent=`Factorial of ${no} is ${fact(no)}`;

    },0)

}


function fact(no){
    if(no<=1){
        return 1
    }
    else{
        return no*fact(no-1);
    }

}