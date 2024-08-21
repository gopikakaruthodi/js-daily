export function phoneValidation(phone){
    let regEx=/^[6-9]\d{2}-\d{3}-\d{4}/
    if(regEx.test(phone)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Not Valid</span>`
    }


}

export function usernameValidation(name){
    let regEx=/^[a-z,A-Z,_]{3,}/
    if(regEx.test(name)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Not Valid</span>`
    }


}

export function creditValidation(credit){
    let regEx=/^\d{4}-\d{4}-\d{4}-\d{4}/
    if(regEx.test(credit)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Not Valid</span>`
    }


}

export function emailValidation(credit){
    let regEx=/^[a-z][a-z,0-9,.]+@[a-z]+([\.][a-z]{3})/
    if(regEx.test(credit)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Not Valid</span>`
    }


}

export function passwordValidation(credit){
    let regEx=/^[a-z,A-Z,0-9,@,#,$,%,^,&,*,\.]/
    if(regEx.test(credit)){
        return `<span class="smsg">Success</span>`
    }
    else{
        return `<span class="emsg">Not Valid</span>`
    }


}

