document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            let formData = {
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                dob: document.getElementById("dob").value,
                phone: document.getElementById("phone").value,
                street: document.getElementById("street").value,
                city: document.getElementById("city").value,
                state: document.getElementById("state").value,
                zip: document.getElementById("zip").value
            };
            localStorage.setItem('formData', JSON.stringify(formData));
            console.table(formData);
            form.reset();
        }
    });
    document.getElementById('username').addEventListener('input', validateUsername);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('password').addEventListener('input', validatePassword);
    document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);
    document.getElementById('dob').addEventListener('input', validateDOB);
    document.getElementById('phone').addEventListener('input', validatePhone);
    document.getElementById('street').addEventListener('input', validateStreet);
    document.getElementById('city').addEventListener('input', validateCity);
    document.getElementById('state').addEventListener('input', validateState);
    document.getElementById('zip').addEventListener('input', validateZip);
});

function validateForm() {
    return (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword() && validateDOB() && validatePhone() && validateStreet() && validateCity() && validateState() && validateZip());
}

function validateUsername() {
    const username = document.getElementById('username').value.trim();
    const usernameError = document.getElementById('usernameError');
    if (!isValidUsername(username)) {
        usernameError.textContent = 'Username must not be start with number .';
        return false;
    } else if (username.length < 5 || username.length > 15) {
        usernameError.textContent = 'Username must be between 5 and 15 characters.';
        return false;
    }
    usernameError.textContent = '';
    return true;
}

function isValidUsername(username) {
    let char = username.charAt(0);
    let cond = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') if (!cond) {
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!/^\S+@\S+.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&]).{8,}$/;
    if (!passwordRegex.test(password)) {  passwordError.textContent = 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'; // return false; // } else { // passwordError.textContent = ''; // return true; // } if (password.length < 8) { passwordError.textContent = 'Password must be of at least 8 characters'; return false; } // 8+ , a let haveLowerCh = false, haveUpperCh = false, haveSpecial = false; for (let x of password) { if (x >= 'a' && x <= 'z') { haveLowerCh = true; } if (x >= 'A' && x <= 'Z') haveUpperCh = true } if (!haveLowerCh) { passwordError.textContent = "Password must have a lowerCase character" return false } if (!haveUpperCh) { passwordError.textContent = "Password must have a upperCase character" return false } let allowedSpecial = "!@#$%^&"; for (let x of allowedSpecial) { if (password.include(x)) { haveSpecial = true; break; } } if (!haveSpecial) { passwordError.textContent = 'Password must have special character' return false } passwordError.textContent = ''; return true; } function validateConfirmPassword() { const password = document.getElementById('password').value; const confirmPassword = document.getElementById('confirmPassword').value; const confirmPasswordError = document.getElementById('confirmPasswordError'); if (confirmPassword !== password) { confirmPasswordError.textContent = 'Passwords do not match.'; return false; } confirmPasswordError.textContent = ''; return true; } function validateDOB() { const dob = new Date(document.getElementById('dob').value); const dobError = document.getElementById('dobError'); const currentDate = new Date(); const age = currentDate.getFullYear() - dob.getFullYear(); if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) { age--; } if (age < 18) { dobError.textContent = 'You must be at least 18 years old.'; return false; } dobError.textContent = ''; return true; } function validatePhone() { const phone = document.getElementById('phone').value.trim(); const phoneError = document.getElementById('phoneError'); if (!isValidPhoneNumberFormat(phone)) { phoneError.textContent = 'Please enter a valid phone number.'; return false; } phoneError.textContent = ''; return true; } function isValidPhoneNumberFormat(phone) { const strippedPhone = phone.replace(/[^\d]/g, ''); return strippedPhone.length === 10; } function validateStreet() { const street = document.getElementById('street').value; const streetError = document.getElementById('streetError'); if (street.trim() === '') { streetError.textContent = 'Street cannot be empty.'; return false; } else { streetError.textContent = ''; return true; } } function validateCity() { const city = document.getElementById('city').value; const cityError = document.getElementById('cityError'); if (city.trim() === '') { cityError.textContent = 'City cannot be empty.'; return false; } else { cityError.textContent = ''; return true; } } function validateState() { const state = document.getElementById('state').value; const stateError = document.getElementById('stateError'); if (!/^[A-Z]{2}$/.test(state)) { stateError.textContent = 'State must be 2 letter capital abberivation'; return false; } else { stateError.textContent = ''; return true; } } function validateZip() { const zip = document.getElementById('zip').value.trim(); const zipError = document.getElementById('zipError'); if (!isValidZipFormat(zip)) { zipError.textContent = 'Please enter a valid ZIP code.'; return false; } zipError.textContent = ''; return true; } function isValidZipFormat(zip) { return /^\d{5}(-\d{4})?$/.test(zip); }