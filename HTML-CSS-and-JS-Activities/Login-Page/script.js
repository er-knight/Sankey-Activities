const EMAIL = "john@doe.com";
const PASSWORD = "johndoe";

const form = document.forms["login-form"];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.forms["login-form"]["email"].value;
    let password = document.forms["login-form"]["password"].value;

    if (email === EMAIL && password === PASSWORD) {
        window.location = "https://www.sankeysolutions.com/";
    }

    if (email !== EMAIL) {
        document.getElementsByClassName("incorrect-email")[0].innerHTML = "Incorrect Email";
    }

    if (password !== PASSWORD) {
        document.getElementsByClassName("incorrect-password")[0].innerHTML = "Incorrect Password";
    }
});

