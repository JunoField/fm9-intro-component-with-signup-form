function validateForm(){

    if (document.getElementById("first-name-input").value == "") {
        showError("first-name");
    } else{
        removeError("first-name");
    }

    if (document.getElementById("last-name-input").value == "") {
        showError("last-name");
    } else{
        removeError("last-name");
    }


    if (!(document.getElementById("email-input").value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
        showError("email");
    } else{
        removeError("email");
    }

    if (document.getElementById("password-input").value == "") {
        showError("password");
    } else{
        removeError("password");
    }

}

function showError(caller){
    document.getElementById(caller + "-error").classList.add("error-message-active");
    document.getElementById(caller + "-input").classList.add("input-error-state");
}

function removeError(caller){
    document.getElementById(caller + "-error").classList.remove("error-message-active");
    document.getElementById(caller + "-input").classList.remove("input-error-state");
}