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

var user = document.getElementById("user").value;
var pwdValue = document.getElementById("pwd").value;

function checkFields() {
    user && pwdValue === null ? alert("please, fullfill the fields") : alert("welcome back!");
}

checkFields();