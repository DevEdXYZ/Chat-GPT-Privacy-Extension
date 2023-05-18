// Define the eye icons
const eyeOpen = chrome.runtime.getURL('eye-open.svg');
const eyeClosed = chrome.runtime.getURL('eye-closed.svg');

// Create the eye icon element
const eyeIcon = document.createElement('img');
eyeIcon.src = eyeOpen;
eyeIcon.style.position = 'fixed';
eyeIcon.style.top = '2vh';  
eyeIcon.style.left = '11vw';  
eyeIcon.style.cursor = 'pointer';
eyeIcon.style.zIndex = 10000; // Ensure the eye icon is always on top

// Apply the invert color filter to the eye icon
eyeIcon.style.filter = 'invert(100%)';

// Append the eye icon to the body
document.body.appendChild(eyeIcon);

// Define the chat container 
const chatContainer = document.querySelector('.dark.flex-shrink-0.overflow-x-hidden.bg-gray-900');

// Apply initial CSS transform and transition properties to the chat container
chatContainer.style.transform = 'translateX(0)';
chatContainer.style.transition = 'transform 0.5s ease-in-out';

// Toggle the chat visibility when the eye icon is clicked
eyeIcon.addEventListener('click', () => {
    if (chatContainer.style.transform === 'translateX(0px)') {
        chatContainer.style.transform = 'translateX(-100%)';
        eyeIcon.src = eyeClosed;
    } else {
        chatContainer.style.transform = 'translateX(0)';
        eyeIcon.src = eyeOpen;
    }
});
