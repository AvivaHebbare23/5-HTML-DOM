function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = ''

    if (name === '') {
        message = 'Please enter a pet name.';
        msgBox.style.color = 'red';
    }
    else if (species === '') {
        message = 'Please enter your pet species.';
        msgBox.style.color = 'red';
    }
    else if (age === '') {
        message = 'Please enter your age.';
        msgBox.style.color = 'red';
    }
    else {
        message = 'Login Success!';
        msgBox.style.color = 'green';
    }
    msgBox.innerHTML = message;
}

document.getElementById("loginForm").onsubmit = validate;

//for real time validation:
// document.getElementById("email").oninput = () => validate({ preventDefault: () => { } });
// document.getElementById("password").oninput = () => validate({ preventDefault: () => { } });
// document.getElementById("age").oninput = () => validate({ preventDefault: () => { } });