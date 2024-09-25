// Sample user data for authentication
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
  ];
  
  function login(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    // Check for matching user
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      message.style.color = "green";
      message.innerText = "Login successful! Welcome " + username + "!";
      // Redirect or perform any other actions
    } else {
      message.style.color = "red";
      message.innerText = "Invalid username or password!";
    }
  }
  