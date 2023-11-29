document.getElementById('userForm').addEventListener('input', function(event) {
    // Check if the event occurred on an input field
    if (event.target.tagName === 'INPUT') {
      // Perform validation based on the input field's id
      const inputId = event.target.id;
      const inputValue = event.target.value;
      const errorElement = document.getElementById(`${inputId}Error`);
  
      switch (inputId) {
        case 'username':
          validateUsername(inputValue, errorElement);
          break;
        case 'email':
          validateEmail(inputValue, errorElement);
          break;
        // Add more cases for other input fields if needed
      }
    }
  });
  
  function validateUsername(username, errorElement) {
    // Simple validation for demonstration purposes
    if (username.length < 5) {
      errorElement.textContent = 'Username must be at least 5 characters long.';
    } else {
      errorElement.textContent = '';
    }
  }
  
  function validateEmail(email, errorElement) {
    // Simple validation for demonstration purposes
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorElement.textContent = 'Enter a valid email address.';
    } else {
      errorElement.textContent = '';
    }
  }
  