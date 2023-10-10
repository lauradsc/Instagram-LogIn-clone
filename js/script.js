// código para habilitar o Show/Hide password
var pwd = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye");

 function toggle() {

    if(pwd.type === "password") {
        pwd.type = "text";
        eyeIcon.classList.replace("bx-show", "bx-hide");
    } 
    else {
        pwd.type = "password";
        eyeIcon.classList.replace("bx-hide", "bx-show");
    }

};