// grab DOM elements

const titleInput = document.getElementById('title-input');
const titleDisplay = document.getElementById('title-display');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

titleInput.addEventListener('input', () => {
    titleDisplay.textContent = titleInput.value;
});