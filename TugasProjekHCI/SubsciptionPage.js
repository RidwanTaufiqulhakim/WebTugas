document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.package button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Subscription selected!');
        });
    });
});
