document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Add your login logic here
    console.log('Login attempt:', { username, password });
    
    // Example validation
    if (username && password) {
        // Show success message with animation
        const loginBox = document.querySelector('.login-box');
        loginBox.style.animation = 'success 0.5s ease';
        setTimeout(() => {
            alert('Login successful!');
            // Add your redirect logic here
        }, 500);
    } else {
        alert('Please fill in all fields');
    }
});