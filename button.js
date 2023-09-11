// Check if the page is loaded inside an iframe
if (window.self !== window.top) {
    // If we are inside an iframe, show the button
    const button = document.getElementById('open-button');
        if (button) {
        button.style.display = 'block';
        }
} else {
    // If we are not inside an iframe, hide the button
    const button = document.getElementById('open-button');
        if (button) {
        button.style.display = 'none';
        }
}