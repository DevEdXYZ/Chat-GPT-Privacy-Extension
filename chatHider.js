// Define the eye icons
const eyeOpen = chrome.runtime.getURL('eye-open.svg');
const eyeClosed = chrome.runtime.getURL('eye-closed.svg');

// Create the eye icon element
const eyeIcon = document.createElement('img');
eyeIcon.src = eyeOpen;
eyeIcon.style.position = 'fixed';
eyeIcon.style.top = '2.2vh';  // 2% of the viewport height
eyeIcon.style.left = '11vw';  // 2% of the viewport width
eyeIcon.style.cursor = 'pointer';
eyeIcon.style.zIndex = 10000; // Ensure the eye icon is always on top

// Append the eye icon to the body
document.body.appendChild(eyeIcon);

// Define the chat container (replace with the actual selector)
const chatContainer = document.querySelector('.dark.flex-shrink-0.overflow-x-hidden.bg-gray-900');

// Toggle the chat visibility when the eye icon is clicked
eyeIcon.addEventListener('click', () => {
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = '';
        eyeIcon.src = eyeOpen;
    } else {
        chatContainer.style.display = 'none';
        eyeIcon.src = eyeClosed;
    }
});