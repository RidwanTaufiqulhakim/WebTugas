document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.course-card button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More information about the course coming soon!');
        });
    });
});
