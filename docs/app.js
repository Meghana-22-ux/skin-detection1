// ---------------- MODAL HANDLING ----------------

// Login modal
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");

// Register modal
const registerModal = document.getElementById("registerModal");
const registerBtn = document.getElementById("registerBtn");

// Close buttons
document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
        loginModal.close();
        registerModal.close();
    });
});

// Open login modal
loginBtn.addEventListener("click", () => {
    loginModal.showModal();
});

// Open register modal
registerBtn.addEventListener("click", () => {
    registerModal.showModal();
});

// ---------------- LOGIN FORM ----------------
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // Simulated login success
    alert("Login successful!");

    loginModal.close();

    // 🔥 Redirect to dashboard
    window.location.href = "dashboard.html";
});

// ---------------- REGISTER FORM ----------------
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirmPassword = document.getElementById("registerConfirm").value.trim();
    const tosAgree = document.getElementById("tosAgree").checked;

    if (!name || !email || !password || !confirmPassword) {
        alert("Fill all fields");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    if (!tosAgree) {
        alert("Please agree to Terms of Service");
        return;
    }

    alert("Account created successfully!");
    registerModal.close();

    // 🔥 Redirect to dashboard after signup
    window.location.href = "dashboard.html";
});

// ---------------- GET STARTED BUTTON ----------------
document.getElementById("getStartedBtn").addEventListener("click", () => {
    // 🔥 Redirect to dashboard
    window.location.href = "dashboard.html";
});
