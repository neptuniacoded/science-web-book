// Example JavaScript code

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');

    // Example: Adding an event listener to a button
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});
