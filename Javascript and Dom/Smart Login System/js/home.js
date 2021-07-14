let smartLogin = document.getElementById('smartLogin');
let logout = document.getElementById('logout');

let userName = localStorage.getItem('userSession');

logout.addEventListener('click', function () {
    localStorage.removeItem('userSession');  // to reset localStorage
})

smartLogin.innerHTML = `<h3>Welcome ${userName}</h3>`;