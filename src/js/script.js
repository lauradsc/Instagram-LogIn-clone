import  CheckFields from './CheckFields.js';

const submitForm = document.getElementById("submit");

submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value;
    const pwdValue = document.getElementById("pwd").value;
    CheckFields.check(user, pwdValue);
})


// código para habilitar o Show/Hide password
const pwd = document.getElementById("pwd");
const eyeIcon = document.getElementById("eye");

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





 


