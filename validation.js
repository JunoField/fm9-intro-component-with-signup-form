function validateForm(){
    //console.log("button pressed");

    resetErrorStates();

    if (document.getElementById("first-name-input").value == "") {
        showError("first-name");
    }

    if (document.getElementById("last-name-input").value == "") {
        showError("last-name");
    }


    if (!(document.getElementById("email-input").value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
        showError("email");
    }

    if (document.getElementById("password-input").value == "") {
        showError("password");
    }

}

function showError(caller){
    document.getElementById(caller + "-error").classList.add("error-message-active");
    document.getElementById(caller + "-input").classList.add("input-error-state");
}

function resetErrorStates(){
    document.getElementById("first-name-error").classList.remove("error-message-active");
    document.getElementById("last-name-error").classList.remove("error-message-active");
    document.getElementById("email-error").classList.remove("error-message-active");
    document.getElementById("password-error").classList.remove("error-message-active");


    document.getElementById("first-name-input").classList.remove("input-error-state");
    document.getElementById("last-name-input").classList.remove("input-error-state");
    document.getElementById("email-input").classList.remove("input-error-state");
    document.getElementById("password-input").classList.remove("input-error-state");
}