// slider.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', function() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    slides[currentIndex].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', function() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    slides[currentIndex].classList.add('active');
});


//form.js

function submitForm(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Gather form data
    const fullName = document.getElementById('fullName').value;
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (!fullName) {
        document.getElementById('fullNameError').style.display = 'block';
        return;
    } else {
        document.getElementById('fullNameError').style.display = 'none';
    }

    if (!userEmail) {
        document.getElementById('userEmailError').style.display = 'block';
        return;
    } else {
        document.getElementById('userEmailError').style.display = 'none';
    }

    if (!password) {
        document.getElementById('passwordError').style.display = 'block';
        return;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        return;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

    // Check if the email already exists in localStorage
    if (localStorage.getItem(userEmail)) {
        alert(`User with email ${userEmail} already exists. Please login.`);
        return; // Prevent registration
    }

    // Store user details in localStorage
    const userDetails = {
        name: fullName,
        password: password
    };
    localStorage.setItem(userEmail, JSON.stringify(userDetails));
    
    // After registration, log user by storing username value in localStorage
    localStorage.setItem('username', fullName);
    alert("Registration successful");

    // Redirect to home page after registration
    window.location.href = 'home.html';
}

//eye-icon js.

function togglePasswordVisibility(fieldId) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}





