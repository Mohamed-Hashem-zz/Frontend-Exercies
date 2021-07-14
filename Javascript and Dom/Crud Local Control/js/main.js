let input = document.getElementById('textInput');
let results = document.getElementById('showData')

let btn = Array.from(document.querySelectorAll('.btn button'));

btn[0].addEventListener('click', function () {  /////// Check Btn

    if (input.value == '')
        results.innerHTML = "Input Can't Be Empty";
    else {
        if (localStorage.getItem(input.value))
            results.innerHTML = `The Item <span> ${input.value} </span> is Found in Local Storage`;
        else
            results.innerHTML = `This input item is Not Found in Local Storage`;
    }
})

btn[1].addEventListener('click', function () {  ///// Add Btn

    if (input.value != '') {
        if (localStorage.getItem(input.value))
            results.innerHTML = `This input item Found once in Local Storage`;
        else {
            results.innerHTML = `The Item <span> ${input.value} </span> has been added`;
            localStorage.setItem(input.value, 'input-value');
            input.value = "";
        }
    }
    else
        results.innerHTML = "Input Can't Be Empty";
})

btn[2].addEventListener('click', function () {   ////// Delete Btn

    if (localStorage.getItem(input.value)) {
        localStorage.removeItem(input.value);
        results.innerHTML = `This item  ${input.value} has been deleted from Local Storage`;

    }
    else
        results.innerHTML = `This input item is Not Found in Local Storage`;
})

btn[3].addEventListener('click', function () { /////// Show Items Btn
    if (localStorage.length) {
        results.innerHTML = '';
        for (const [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span class="keys">${key}</span>`;

            // results.style.height += '70px';
        }
    }
    else
        results.innerHTML = "Local Storage is Empty";
})