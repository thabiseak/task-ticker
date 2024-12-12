// HTML elements
const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

// Toggle sign-up and sign-in
registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Handle sign-in functionality
document.querySelector(".sign-in form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    // Fetch the user from API
    fetch(`https://taskticker.runasp.net/api/User/GetUser?UserName=${username}&Password=${password}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid username or password");
        }
        return response.json();
      })
      .then((user) => {
        // Successful login, store userID in localStorage
        localStorage.setItem("userID", user.userID);
        console.log("Login successful:", user);
        window.location.href = "home_page.html"; // Redirect to home page
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("Invalid username or password. Please try again."); // Show error
      });
  } else {
    alert("Please enter both username and password.");
  }
});

function signUpUser() {
  // Get values from inputs
  const username = document.getElementById('sign-up-user').value;
  const password = document.getElementById('sign-up-pass').value;
  const confirmPassword = document.getElementById('sign-up-ConPass').value;

  // Ensure that the password and confirmation match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Prepare data for sending
  const userData = {
    userID: 0,  // Can be customized as needed
    userName: username,
    password: password
  };

  // Send data using fetch
  fetch('https://taskticker.runasp.net/api/User/AddNewUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(errorData => {
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
      });
    }
    return response.json();
  })
  .then(data => {
    // Add logic here to handle the response
    console.log('User created successfully:', data);
    alert("User created successfully!");
  })
  .catch(error => {
    console.error('Error:', error);
    alert("An error occurred while creating the user: " + error.message);
  });
}

// Call the signUpUser function when the sign-up button is clicked
document.getElementById('Up').addEventListener('click', signUpUser);

// Function to fetch tasks from the API
const userID = localStorage.getItem("userID");

if (userID) {
  // Function to fetch tasks from the API using the userID
  function fetchTasks() {
    fetch(`https://taskticker.runasp.net/api/List/AllTask?UserID=${userID}`)
      .then((response) => response.json()) // Parse the JSON from the response
      .then((data) => {
        renderTasks(data); // Render tasks once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }

  // Function to render tasks in the table
  function renderTasks(tasks) {
    const taskTable = document.getElementById("taskTable").querySelector("tbody");
    taskTable.innerHTML = "";  // Clear the current tasks

    if (tasks.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="3">No tasks available. Add a new task!</td>`;
        taskTable.appendChild(row);
    } else {
        tasks.forEach((task) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${task.name}</td>
              <td>${task.description}</td>
              <td>${task.dueDate}</td>
            `;
            taskTable.appendChild(row);
        });
    }
  }

  // Initial fetch of tasks when the page loads
  fetchTasks();
}