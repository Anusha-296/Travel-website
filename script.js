// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Sign In Form Submission
document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign In Successful!");
    closeModal("signinModal");
});

// Sign Up Form Submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign Up Successful! Please Sign In.");
    closeModal("signupModal");
});
