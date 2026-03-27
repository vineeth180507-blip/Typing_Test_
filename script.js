const quote = document.getElementById("text-to-type").innerText;
const inputField = document.getElementById("user-input");

let startTime = Date.now();

// --- Existing Typing Test Logic ---
inputField.addEventListener("input", () => {
  const userInput = inputField.value;
  let correctChars = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === quote[i]) {
      correctChars++;
    }
  }
  const accuracy = (correctChars / quote.length) * 100;
  document.getElementById("accuracy").innerText = `Accuracy: ${accuracy.toFixed(2)}%`;
  
  const wpm = (
    userInput.split(" ").length /
    ((Date.now() - startTime) / 60000)
  ).toFixed(2);
  document.getElementById("wpm").innerText = `Words_per_Minute: ${wpm}`;
});

// --- NEW: Review Section Logic ---
const reviewForm = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');

reviewForm.addEventListener('submit', (e) => {
  // 1. Prevent the page from refreshing
  e.preventDefault();

  // 2. Get values from the input fields
  const name = document.getElementById('reviewer-name').value;
  const text = document.getElementById('review-text').value;

  // 3. Create a new list item (li) for the review
  const newReview = document.createElement('li');
  newReview.style.marginBottom = "10px"; // Simple inline CSS command
  newReview.innerHTML = `<strong>${name}:</strong> "${text}"`;

  // 4. Add the new review to the list
  reviewsList.appendChild(newReview);

  // 5. Clear the form for the next user
  reviewForm.reset();
});