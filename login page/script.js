// Register User
document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
      registerForm.addEventListener("submit", function(e) {
          e.preventDefault();
          let username = document.getElementById("regUsername").value;
          let password = document.getElementById("regPassword").value;

          if (localStorage.getItem(username)) {
              document.getElementById("registerMessage").innerText = "User already exists!";
          } else {
              localStorage.setItem(username, password);
              document.getElementById("registerMessage").innerText = "Registration successful!";
              setTimeout(() => window.location.href = "login.html", 1000);
          }
      });
  }

  // Login User
  if (loginForm) {
      loginForm.addEventListener("submit", function(e) {
          e.preventDefault();
          let username = document.getElementById("loginUsername").value;
          let password = document.getElementById("loginPassword").value;
          let storedPassword = localStorage.getItem(username);

          if (storedPassword && storedPassword === password) {
              sessionStorage.setItem("loggedInUser", username);
              window.location.href = "secured.html";
          } else {
              document.getElementById("loginMessage").innerText = "Invalid credentials!";
          }
      });
  }

  // Display username on secured page
  if (document.getElementById("username")) {
      let loggedInUser = sessionStorage.getItem("loggedInUser");
      if (!loggedInUser) {
          window.location.href = "login.html";
      } else {
          document.getElementById("username").innerText = loggedInUser;
      }
  }
});

// Logout Function
function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
