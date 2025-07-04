function login() {
  const username = document.getElementById("username").value;
  if (username.trim() !== "") {
    alert("Logged in as: " + username);
    // Example: window.location.href = "home.html";
  } else {
    alert("Please enter a username or email.");
  }
}

