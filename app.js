// grab DOM elements

const titleInput = document.getElementById('title-input');
const titleDisplay = document.getElementById('title-display');
const messageInput = document.getElementById('message-input');
const messageDisplay = document.getElementById('message-display');
const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('card-image');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

titleInput.addEventListener('input', () => {
    titleDisplay.textContent = titleInput.value;
});

messageInput.addEventListener('input', () => {
    messageDisplay.textContent = messageInput.value;
});

imageSelect.addEventListener('change', () => {
    imageDisplay.src = `/assets/${imageSelect.value}`;
});

