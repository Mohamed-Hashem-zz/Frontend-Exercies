let productName = document.getElementById('productName');
let productCate = document.getElementById('productCate');
let productPrice = document.getElementById('productPrice');
let productDesc = document.getElementById('productDesc');

let addProductBtn = document.getElementById('addProductBtn');

let dataContainer = document.getElementById('dataContainer');

var Alert = document.getElementById('alert')

let Products = [];

let flag = false;
let indexUpdate = 0;


if (localStorage.getItem('Products') == null)
    Products = [];
else {
    Products = JSON.parse(localStorage.getItem('Products'));
    Display();
}

addProductBtn.addEventListener('click', function () {

    let product = {
        pName: productName.value,
        pCate: productCate.value,
        pPrice: productPrice.value,
        pDesc: productDesc.value
    }

    if (flag)
        Products[indexUpdate] = product;
    else
        Products.push(product);

    Display();
    localStorage.setItem('Products', JSON.stringify(Products));
    clearInputs();
    addProductBtn.textContent = "Add Product";

    productName.classList.remove("is-invalid");
    productName.classList.remove("is-valid");
    flag = false;
})

function clearInputs() {

    productName.value = "";
    productCate.value = "";
    productPrice.value = "";
    productDesc.value = "";
}

function Display() {

    let copya = ''

    for (let i = 0; i < Products.length; i++) {
        copya += `  <tr>   
                        <td>${i}</td>
                        <td>${Products[i].pName}</td>
                        <td>${Products[i].pCate}</td>
                        <td>${Products[i].pPrice}</td>
                        <td>${Products[i].pDesc}</td>
                        <td><button onclick="deleteBtn(${i})" id ="deleteBtn" class="btn btn-danger">Delete</button></td>
                        <td><button onclick="updateBtn(${i})" class="btn btn-info">Update</button></td>
                    </tr> `
    }
    dataContainer.innerHTML = copya;
}

function deleteBtn(i) {
    let confirm = window.confirm("Are you sSure to delete this record or Not ?");

    if (confirm == true)
        Products.splice(i, 1);

    localStorage.setItem('Products', JSON.stringify(Products));
    Display();
}

function updateBtn(i) {
    flag = true;
    indexUpdate = i;
    productName.value = Products[i].pName;
    productCate.value = Products[i].pCate;
    productPrice.value = Products[i].pPrice;
    productDesc.value = Products[i].pDesc;
    addProductBtn.textContent = "Update";
    validateName(Products[i].pName);
}

function Search() {
    let searchItems = '';
    let searchInput = document.getElementById('search').value;

    for (let i = 0; i < Products.length; i++) {
        if (Products[i].pName.toLowerCase().includes(searchInput.toLowerCase())) {
            searchItems += `  <tr>   
                        <td>${i}</td>
                        <td >${Products[i].pName.replace(searchInput, `<span> ${searchInput} </span>`)}</td>
                        <td>${Products[i].pCate}</td>
                        <td>${Products[i].pPrice}</td>
                        <td>${Products[i].pDesc}</td>
                        <td><button onclick="deleteBtn(${i})" id ="deleteBtn" class="btn btn-danger">Delete</button></td>
                        <td><button onclick="updateBtn(${i})" class="btn btn-info">Update</button></td>
                    </tr> `
        }
        dataContainer.innerHTML = searchItems;
    }
}

function validateName(value) {
    var regex = /^[A-Z]{1}[a-zA-Z]{3,}$/

    if (regex.test(value) == true) {
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
        Alert.style.display = "none";
        addProductBtn.style.pointerEvents = "visible";
    } else {
        productName.classList.add("is-invalid");
        productName.classList.remove("is-valid");
        Alert.style.display = "block";
        addProductBtn.style.pointerEvents = "none";
    }

    if (productName.value == '') {
        productName.classList.remove("is-invalid");
        productName.classList.remove("is-valid");
        Alert.style.display = "none";
    }
}