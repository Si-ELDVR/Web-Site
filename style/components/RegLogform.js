const closeSignInModalBtn = document.getElementById('closeSignInModalBtn');
const signInForm = document.getElementById('signInForm');
const signInBtn = document.getElementById('signInBtn');
const registrationButton = document.getElementById('registrationButton');
const logoutButton = document.getElementById('logoutButton');

if (closeSignInModalBtn && signInForm && signInBtn && registrationButton && logoutButton) {
    closeSignInModalBtn.addEventListener('click', () => {
        document.getElementById('md').style.display = 'none';
    });

    signInBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const login = document.getElementById('Login').value;
        const password = document.getElementById('password').value;

        if (login === 'admin' && password === '123') {
            isLoggedIn = true;
            toggleAuthButtons();
            document.getElementById('md').style.display = 'none';
        } else {
            alert('Неверный логин или пароль');
        }
    });

    logoutButton.addEventListener('click', () => {
        isLoggedIn = false;
        toggleAuthButtons();
    });
}

let isLoggedIn = false;

function toggleAuthButtons() {
    const signInButton = document.getElementById('signInButton');
    const registrationButton = document.getElementById('registrationButton');
    const logoutButton = document.getElementById('logoutButton');

    if (isLoggedIn) {
        signInButton.style.display = 'none';
        registrationButton.style.display = 'none';
        logoutButton.style.display = 'block';
    } else {
        signInButton.style.display = 'block';
        registrationButton.style.display = 'line';
        logoutButton.style.display = 'none';
    }
}

function openModal() {
    // Ваш код для открытия модального окна входа
}

function openRegModal() {
    // Ваш код для открытия модального окна регистрации
}

function logOut() {
    isLoggedIn = false;
    toggleAuthButtons();
}