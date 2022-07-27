function validateForm(){
    //console.log("button pressed");

    if (document.getElementById("first-name-input").value == "") {
        console.log("first name empty");
    }

    if (document.getElementById("last-name-input").value == "") {
        console.log("last name empty");
    }


    if (!(document.getElementById("email-input").value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
        console.log("email not in correct format")
    }

    if (document.getElementById("password-input").value == "") {
        console.log("password empty");
    }

}