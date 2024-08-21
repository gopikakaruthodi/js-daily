

document.getElementById("btn").addEventListener('click',()=>{
    // Create an object for xhr
    let xhr=new XMLHttpRequest();
    // open api
    xhr.open("GET",'https://dummyjson.com/posts/1')
    // get data from api
    
    xhr.onload=()=>{
        // console.log(xhr.response);
        if(xhr.status==200){
            let data= JSON.parse(xhr.response)
            console.log(data.title);

        }
        else{
            alert("Invalid API")
        }
    }

    // network error
    xhr.onerror=()=> console.log("error");
    // send xhr
    xhr.send()
    

})