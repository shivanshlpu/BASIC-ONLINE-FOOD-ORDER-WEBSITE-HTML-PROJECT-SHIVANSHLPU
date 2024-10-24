function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'shivansh' && password === 'password') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    } else {
        alert('Invalid login credentials');
        return false
    }
}