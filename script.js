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
        alert('Please enter a valid username and password.');
    }
}