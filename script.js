// Define fixed credentials
const validEmail = "haiqua12@gmail.com";
const validPassword = "Haiqua@12";

// Login form validation
document.querySelector(".btnn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (!email || !password) {
    alert("Please fill in both email and password.");
  } else if (email === validEmail && password === validPassword) {
    alert("Login successful!");
    // You can redirect to another page if needed:
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password. Try again.");
  }
});
