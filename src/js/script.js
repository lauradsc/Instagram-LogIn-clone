// code for Show/Hide password
let inputPassword = document.getElementById("inputPassword");
let eyeIcon = document.getElementById("eye");

function toggle() {
    if(inputPassword.type === "password") {
        inputPassword.type = "text";
        eyeIcon.classList.replace("bx-show", "bx-hide");
    } 
    else {
        inputPassword.type = "password";
        eyeIcon.classList.replace("bx-hide", "bx-show");
    }

};
