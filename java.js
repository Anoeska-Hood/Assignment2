// PICTURE SLIDERS
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', showNextSlide);
document.getElementById('prevBtn').addEventListener('click', showPreviousSlide);

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    slides[currentIndex].classList.add('active');
}

function showPreviousSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    slides[currentIndex].classList.add('active');
}

// Auto-rotation every 5 seconds
setInterval(showNextSlide, 5000);





// FUNCTION TO HANDLE USER REGISTRATION
function register(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (!fullName || !userEmail || !password || !confirmPassword) {
        document.getElementById('formError').textContent = 'All fields are required.';
        return;
    }

    // Check if password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Check if user is already registered
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail === userEmail) {
        alert(`User with email ${userEmail} already exists. Please log in.`);
        return;
    }

    // Store user data in local storage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userPassword', password);

     // Login successful
     localStorage.setItem('isLoggedIn', "true");
     localStorage.setItem('username', storedEmail);
     alert('Registration successful!');
     window.location.href = 'index.html'; // Redirect to the home page
}





// FUNCTION TO TOGGLE PASSWORD VISIBILITY
function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}




// FUNCTION TO HANDLE USER LOGIN
function login(event) {
    event.preventDefault();

    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user data from local storage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Validation
    if (!userEmail || !password) {
        document.getElementById('formError').textContent = 'All fields are required.';
        return;
    }

    if (!storedEmail) {
        alert('Email not found. Please register.');
        return;
    }

    if (userEmail === storedEmail && password === storedPassword) {
        // Login successful
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('username', storedEmail);
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the home page
    } else {
        alert('Invalid password. Please try again');
    }
}




// FUNCTION TO DISPLAY CONTENT BASED ON LOGIN STATUS
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        // User is logged in, show logged-in content
        if (document.getElementById('userFullName')) {
            document.getElementById('userFullName').textContent = localStorage.getItem('fullName'); 
        }

        if (document.getElementById('guestContent')) {
            document.getElementById('guestContent').style.display = 'none';
        }
        if (document.getElementById('loggedInContent')) {
            document.getElementById('loggedInContent').style.display = 'block';
        }
    } else {
        // User is not logged in, show guest content
        if (document.getElementById('guestContent')) {
            document.getElementById('guestContent').style.display = 'block';
        }
        if (document.getElementById('loggedInContent')) {
            document.getElementById('loggedInContent').style.display = 'none';
        }
    }
});




// FUNCTION TO HANDLE THE LOGIN AND LOGOUT NAV BAR
document.addEventListener("DOMContentLoaded", () => {
    const navLoginLink = document.querySelector(".nav-link[href='login.html']");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn && navLoginLink) {
        // Change "Login" to "Logout"
        navLoginLink.textContent = "Logout";
        navLoginLink.href = "#";
        navLoginLink.addEventListener("click", () => {
            // Log the user out
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            alert("You have been logged out.");
            location.reload(); // Refresh the page to reset the view
        });
    }
});

//localStorage.clear();