function checkpassword() {
    const password = document.querySelector('input[name=password]');
    const help_password = document.querySelector(".help-password");
    const confirm = document.querySelector('input[name=confirm_password');
    if(confirm.value === password.value){
        password.classList.remove("error");
        help_password.classList.remove("error");
        confirm.classList.remove("error");
    } else {
        password.classList.add("error");
        help_password.classList.add("error");
        confirm.classList.add("error");
    }
}

function checkemail() {
    const password = document.querySelector('input[name=password]');
    const help_password = document.querySelector(".help-password");
    const confirm = document.querySelector('input[name=confirm_password');
    if(confirm.value === password.value){
        password.classList.remove("error");
        help_password.classList.remove("error");
        confirm.classList.remove("error");
    } else {
        password.classList.add("error");
        help_password.classList.add("error");
        confirm.classList.add("error");
    }
}