let Email = document.getElementById('email')
let Password = document.getElementById('password')
let loginBtn = document.getElementById('login');

let divBlock = document.getElementById('divBlock');

let emptyData = document.getElementById('emptyData');

let Users = JSON.parse(localStorage.getItem('users'));
let flag = false;


loginBtn.addEventListener('click', function () {

    if (Email.value == '' || Password.value == '') {

        divBlock.classList.replace('d-block', 'd-none');
        emptyData.classList.replace('d-none', 'd-block');
    }
    else {
        for (let i = 0; i < Users.length; i++) {

            if (Users[i].email.toLowerCase() == Email.value.toLowerCase() && Users[i].pass == Password.value) {
                localStorage.setItem('userSession', Users[i].name);
                flag = true;
                divBlock.classList.replace('d-block', 'd-none');
                emptyData.classList.replace('d-block', 'd-none');
                window.location.replace("home.html");
            }
        }

        if (!flag)
            divBlock.classList.replace('d-none', 'd-block');
    }
})
