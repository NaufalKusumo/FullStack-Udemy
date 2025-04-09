/**
 * Login Form Handling Script
 */

// document.getElementById() - Selects an HTML element by its ID attribute
// In this case, we're selecting the form element with ID 'loginForm'
// 
// addEventListener() - Attaches an event handler to a specified element
// First parameter 'submit' - The type of event to listen for (form submission)
// Second parameter - An anonymous function that will be executed when the event occurs
document.getElementById('loginForm').addEventListener('submit', function(e) {
    // e.preventDefault() - Prevents the default form submission behavior
    // This stops the page from refreshing when the form is submitted
    e.preventDefault();
    
    // document.getElementById().value - Gets the current value of an input element
    // We're retrieving what the user typed in the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Add your login logic here
    // console.log() - Outputs a message to the web console for debugging
    // This logs the entered username and password as an object
    console.log('Login attempt:', { username, password });
    
    // Example validation
    // if statement - Conditional logic that executes code if the condition is true
    // In this case, checking if both username and password have values
    if (username && password) {
        // document.querySelector() - Selects the first element that matches a CSS selector
        // Here we're selecting an element with the class 'login-box'
        const loginBox = document.querySelector('.login-box');
        
        // element.style - Accesses the inline CSS properties of an element
        // Setting the animation property to use a CSS animation named 'success'
        loginBox.style.animation = 'success 0.5s ease';
        
        // setTimeout() - Executes a function after a specified delay (in milliseconds)
        // First parameter - An arrow function to execute
        // Second parameter - The delay in milliseconds (500ms = 0.5 seconds)
        setTimeout(() => {
            // alert() - Displays a dialog box with a message and an OK button
            alert('Login successful!');
            // Add your redirect logic here
        }, 500);
    } else {
        // This alert is shown if either username or password is empty
        alert('Please fill in all fields');
    }
});