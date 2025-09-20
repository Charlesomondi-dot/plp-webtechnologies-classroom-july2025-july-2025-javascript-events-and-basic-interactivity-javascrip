// script.js
// --- Light/Dark Mode Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle-btn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// --- Counter Feature ---
const counterBtn = document.getElementById('counter-btn');
const counterValue = document.getElementById('counter-value');
let count = 0;
counterBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

// --- Collapsible FAQ Section ---
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// --- Form Validation ---
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

function validateName(name) {
    return name.trim().length >= 2;
}
function validateEmail(email) {
    // Simple regex for email validation
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
function validatePassword(password) {
    // At least 6 chars, one number, one letter
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccess.textContent = '';

    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 2 characters.';
        valid = false;
    }
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
    }
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters and contain a number.';
        valid = false;
    }
    if (valid) {
        formSuccess.textContent = 'Sign up successful!';
        form.reset();
    }
});

// Real-time validation
nameInput.addEventListener('input', () => {
    nameError.textContent = validateName(nameInput.value) ? '' : 'Name must be at least 2 characters.';
});
emailInput.addEventListener('input', () => {
    emailError.textContent = validateEmail(emailInput.value) ? '' : 'Enter a valid email address.';
});
passwordInput.addEventListener('input', () => {
    passwordError.textContent = validatePassword(passwordInput.value) ? '' : 'Password must be at least 6 characters and contain a number.';
});
