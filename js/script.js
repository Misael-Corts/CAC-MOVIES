document.getElementById('myForm').addEventListener('submit', function(event) {
    let isValid = true;

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    if (!emailInput.value) {
        emailError.style.display = 'inline';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (!passwordInput.value) {
        passwordError.style.display = 'inline';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
});
