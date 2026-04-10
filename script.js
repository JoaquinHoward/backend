let greet_user = document.getElementById('greet-user');
const params = new URLSearchParams(window.location.search);
const first_name = params.get('first-name');
const middle_name = params.get('middle-name');

greet_user.textContent = "Welcome, " + first_name + " " + middle_name + "!";