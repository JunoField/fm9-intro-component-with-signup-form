function validateForm(){

    if (document.getElementById("first-name-input").value == "") {
        showEmptyError("first-name");
    } else{
        removeEmptyError("first-name");
    }

    if (document.getElementById("last-name-input").value == "") {
        showEmptyError("last-name");
    } else{
        removeEmptyError("last-name");
    }

    
    if(document.getElementById("email-input").value == ""){
        showEmptyError("email");
        document.getElementById("email-format-error").classList.remove("error-message-active");
    } else if (!(document.getElementById("email-input").value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
        document.getElementById("email-format-error").classList.add("error-message-active");
        document.getElementById("email-input").classList.add("input-error-state");
        document.getElementById("email-empty-error").classList.remove("error-message-active");

    } else{
        removeEmptyError("email");
        document.getElementById("email-format-error").classList.remove("error-message-active");

    }
    


    if (document.getElementById("password-input").value == "") {
        showEmptyError("password");
    } else{
        removeEmptyError("password");
    }

}



function showEmptyError(caller){
    document.getElementById(caller + "-empty-error").classList.add("error-message-active");
    document.getElementById(caller + "-input").classList.add("input-error-state");
}

function removeEmptyError(caller){
    document.getElementById(caller + "-empty-error").classList.remove("error-message-active");
    document.getElementById(caller + "-input").classList.remove("input-error-state");
}