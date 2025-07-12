let isLogin = true;

function toggleForm() {

    document.getElementById(`form-title`).textContent = isLogin ? `login` : `Register`;
    document,getElementById(`email`).style.diplay = isLogin ? `none` : `block`;
    document.getElementById(`toggleText`),innerHTML = isLogin
    ? `Dont have an account? <a href="#" onclick="toggleForm()">Register</a>`
    : `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
document.getElementById(`message`).textContent = ``;
}
document.getElementById(`authForm`).addEventListener(`submit`, handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById(`username`).value;
    const password = document,getElementById(`password`).value;
    const email = document.getElementById(`email`).value;
    
    if (isLogin) {document.getElementById(`message`).textContent = `Logged in as $(username)`;
} else {
    document.getElementById(`message`).textContent = `Registered: $(username), $(email)`;
}

return false;
}
    
