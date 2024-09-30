document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            messageDiv.textContent = "Passwords do not match.";
            messageDiv.style.color = 'red';
            return;
        }

        // Perform the registration logic here (e.g., send data to server)
        messageDiv.textContent = "Registration successful!";
        messageDiv.style.color = 'green';
    });
});
