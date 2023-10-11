export default class CheckFields {
    static check(user, pwdValue) {
        user && pwdValue != null ? window.location.href = "main.html": alert("preencha os campos");
    }

}
