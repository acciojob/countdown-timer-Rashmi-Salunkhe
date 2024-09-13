// Your script here.
// Select elements from the DOM
const userInput = document.getElementById('userInput');
const countDown = document.getElementById('countDown');
const endTime = document.getElementById('endTime');
const startButton = document.querySelector('button');

let countdownInterval;

// Function to start the countdown timer
function startTimer(minutes) {
  clearInterval(countdownInterval); // Clear any previous timer

  const now = Date.now();
  const then = now + minutes * 60 * 1000;
  displayEndTime(then);

  countdownInterval = setInterval(() => {
    const timeLeft = Math.round((then - Date.now()) / 1000);

    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      return;
    }

    displayTimeLeft(timeLeft);
  }, 1000);
}

// Function to display remaining time in mm:ss format
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  countDown.textContent = `Time Left: ${display}`;
}

// Function to display the end time when the countdown finishes
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `End Time: ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

// Event listener for the Start button
startButton.addEventListener('click', () => {
  const minutes = parseInt(userInput.value);
  startTimer(minutes);
});

// Event listener to start the timer on pressing Enter
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const minutes = parseInt(userInput.value);
    startTimer(minutes);
  }
});
