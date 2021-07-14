let Username = document.getElementById('username');
let Email = document.getElementById('email');
let Password = document.getElementById('password');
let signUpBtn = document.getElementById('signUp');
let divBlock = document.getElementById('divBlock');
let successRegister = document.getElementById('successRegister');

let usernameWarning = document.getElementById('usernameWarning');
let emailWarning = document.getElementById('emailWarning');
let passwordWarning = document.getElementById('passwordWarning');

let flag = true;

let Users = [];

if (localStorage.getItem('users') == null)
    Users = [];
else
    Users = JSON.parse(localStorage.getItem('users'));

signUpBtn.addEventListener('click', function () {

    if (!isExist() && Validation()) {

        let user = {
            name: Username.value,
            email: Email.value,
            pass: Password.value
        }

        Users.push(user);
        localStorage.setItem('users', JSON.stringify(Users));
        clearItem();
        successRegister.classList.replace('d-none', 'd-block');
        divBlock.classList.replace('d-block', 'd-none');

        Username.classList.remove('is-invalid');
        Email.classList.remove('is-invalid');

        Username.classList.remove('is-valid');
        Email.classList.remove('is-valid');

        Password.classList.remove('is-valid');
        Password.classList.remove('is-invalid');
    }
    else {
        divBlock.classList.replace('d-none', 'd-block');
        successRegister.classList.replace('d-block', 'd-none');
    }
})

function clearItem() {
    Username.value = "";
    Email.value = "";
    Password.value = "";
}

function userNameValidation() {
    let regex = /^[a-zA-z]{3,}/  // Enter username from a to z and at least 3 characters

    if (regex.test(Username.value) && Username.value != '') {
        Username.classList.add('is-valid');
        Username.classList.remove('is-invalid');
        usernameWarning.classList.replace('d-block', 'd-none')
        return true;
    }
    else {
        Username.classList.add('is-invalid');
        Username.classList.remove('is-valid');
        usernameWarning.classList.replace('d-none', 'd-block')
        return false;
    }
}

function passwordValidation() {
    let regex = /^.{8,}/ // Enter Password >= 8 characters

    if (regex.test(Password.value) && Password.value != '') {
        Password.classList.add('is-valid');
        Password.classList.remove('is-invalid');
        passwordWarning.classList.replace('d-block', 'd-none')

        return true;
    }
    else {
        Password.classList.add('is-invalid');
        Password.classList.remove('is-valid');
        passwordWarning.classList.replace('d-none', 'd-block')

        return false;
    }
}

function emailValidation() {
    let regex = /\S+@\S+\.\S+/ // Email Validation as name@example.com

    if (regex.test(Email.value) && Email.value != '') {
        Email.classList.add('is-valid');
        Email.classList.remove('is-invalid');
        emailWarning.classList.replace('d-block', 'd-none')

        return true;
    }
    else {
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
        emailWarning.classList.replace('d-none', 'd-block')

        return false;
    }
}

function Validation() {
    return userNameValidation() && passwordValidation() && emailValidation();
}

function isExist() {
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].email.toLowerCase() == Email.value.toLowerCase() || Users[i].name.toLowerCase() == Username.value.toLowerCase()) {
            Username.classList.add('is-invalid');
            Email.classList.add('is-invalid');
            return true;
        }
    }
    return false;
}