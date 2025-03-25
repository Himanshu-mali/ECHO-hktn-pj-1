// Handling form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your feedback has been submitted successfully!');
        form.reset(); // Reset the form fields after submission
    });
});
