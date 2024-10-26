// SLIDERS.js

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


//REGISTER FORM.js

function register(event) {
   

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

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again."); // Display alert if passwords don’t match
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

    // Redirect to home page
    window.location.href = 'index.html';
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

//LOGIN FORM.js

function login(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Gather login form data
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;

    // Check if the email exists in localStorage
    const storedUser = localStorage.getItem(userEmail);

    if (!storedUser) {
        // Email not found, alert user to register
        alert("Email not found. Please register.");
        return;
    }

    // Parse the stored user data to get the password
    const userDetails = JSON.parse(storedUser);

    // Check if the entered password matches the stored password
    if (userDetails.password === password) {
        // Store username in localStorage (logged-in user)
        localStorage.setItem('username', userDetails.name);
        alert("Login successful");

        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        // Password mismatch
        alert("Invalid password. Please try again.");
    }

     // Redirect or reload to show the logged-in content
     window.location.reload(); // This will trigger DOMContentLoaded again
}

//CHECK IF USER IS LOGGED IN.js

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in by looking for email
    const userEmail = localStorage.getItem('userEmail');
    const fullName = localStorage.getItem('fullName'); // Used only for display if logged in

    //use this for the index.html page
    if (userEmail) {
        // User is logged in, show bulletin board
        document.getElementById('guestContent').style.display = 'none';
        document.getElementById('loggedInContent').style.display = 'block';

        // Display user's full name if available, else just the email
        document.getElementById('userFullName').textContent = fullName || userEmail;
    } else {
        // User is not logged in, show registration prompt
        document.getElementById('guestContent').style.display = 'block';
        document.getElementById('loggedInContent').style.display = 'none';
    }

    });





