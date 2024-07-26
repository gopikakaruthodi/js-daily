function sendMessage(msg){
    console.log("sendMessage");
    console.log(msg);

}

function getMessage(callback){
    console.log("getMessage");
    callback("welcome all")
}


getMessage(sendMessage)