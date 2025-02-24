function showPage(pageId) {
    document.querySelectorAll('.container').forEach(div => div.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function login() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    if (user && pass) {
        showPage('homePage');
    } else {
        alert('Login failed: Please enter a valid username and password.');
    }
}

function confirmLogout() {
    let confirmAction = confirm("Are you sure you want to log out?");
    if (confirmAction) {
        showPage('loginPage');
    }
}

function showInventoryDetails() {
    document.getElementById("inventoryDetails").style.display = "block";
}