// Get elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Function to create delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  // Wait for the specified delay
  await wait(delay);

  // Display the message
  output.textContent = text;
}

// Event listener for button click
button.addEventListener("click", showMessage);