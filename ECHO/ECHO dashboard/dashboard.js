// Open Login Modal
function openLogin() {
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "flex";
    // Trigger animation for zoom-in effect
    loginModal.querySelector('.modal-content').style.animation = "zoomIn 0.5s ease-out forwards";
}

// Open Signup Modal
function openSignup() {
    const signupModal = document.getElementById("signupModal");
    signupModal.style.display = "flex";
    // Trigger animation for zoom-in effect
    signupModal.querySelector('.modal-content').style.animation = "zoomIn 0.5s ease-out forwards";
}

// Close Login Modal
function closeLogin() {
    const loginModal = document.getElementById("loginModal");
    loginModal.querySelector('.modal-content').style.animation = "zoomOut 0.5s ease-out forwards";
    setTimeout(() => {
        loginModal.style.display = "none";
    }, 500); // Wait for animation to finish before hiding modal
}

// Close Signup Modal
function closeSignup() {
    const signupModal = document.getElementById("signupModal");
    signupModal.querySelector('.modal-content').style.animation = "zoomOut 0.5s ease-out forwards";
    setTimeout(() => {
        signupModal.style.display = "none";
    }, 500); // Wait for animation to finish before hiding modal
}

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Send POST request to backend
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.ok) {
            // Redirect to dashboard on success
            window.location.href = 'dashboard.html';
        } else {
            // Show error message
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});

// Handle Signup Form Submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Send POST request to backend
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => {
        if (response.ok) {
            // Redirect to login on success
            alert('Signup successful! Please log in.');
            closeSignup();
        } else {
            // Show error message
            alert('Signup failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
