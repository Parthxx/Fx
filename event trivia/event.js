// Correct answers for each question
const correctAnswers = {
  q1: "A", // 1st Question
  q2: "B", // 2nd Question
  q3: "B", // 3rd Question
  q4: "A", // 4th Question
  q5: "C", // 5th Question
  q6: "A", // 6th Question
  q7: "A", // 7th Question
  q8: "C", // 8th Question
  q9: "C", // 9th Question
  q10: "A", // 10th Question
  q11: "A", // 11th Question
  q12: "A", // 12th Question
  q13: "A", // 13th Question
  q14: "B", // 14th Question
  q15: "A", // 15th Question
  q16: "B"  // 16th Question
};

// Adding event listeners for the options
const options = document.querySelectorAll('.option');
options.forEach(option => {
  option.addEventListener('click', function() {
    const questionId = this.name;
    const selectedAnswer = this.value;

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswers[questionId]) {
      this.style.backgroundColor = "#AFE1AF"; // Green for correct answer
      this.parentElement.style.color = "#AFE1AF"; // Color of the text
      alert("Correct answer!");

      // Reset the color back after 2 seconds
      setTimeout(() => {
        this.style.backgroundColor = "";
        this.parentElement.style.color = "";
      }, 2000);
      
    } else {
      this.style.backgroundColor = "#D22B2B"; // Red for incorrect answer
      this.parentElement.style.color = "#D22B2B"; // Color of the text
      alert("Incorrect answer. Try again.");

      // Reset the color back after 2 seconds
      setTimeout(() => {
        this.style.backgroundColor = "";
        this.parentElement.style.color = "";
      }, 2000);
    }
  });
});

// Function to check all answers and show the final score
function checkAllAnswers() {
  let score = 0;

  // Loop through each question and check the selected answers
  for (let question in correctAnswers) {
    const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
    
    if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
      score++;
    }
  }

  // Display the final score to the user
  alert(`Your score: ${score} out of 16`);
}

// Event listener for the "Check Answers" button (if present)
document.getElementById('check-answers-btn')?.addEventListener('click', function() {
  checkAllAnswers();
});

// Event listener for RSVP Button (for other interactions in the page)
document.getElementById('rsvp-btn')?.addEventListener('click', function() {
  alert("Thank you for RSVPing! We look forward to seeing you at the Football Trivia Challenge.");
});

// Event listener for the footer link
document.querySelector('#community-footer p')?.addEventListener('click', function() {
  alert("Thank you for visiting The Fieldstead! We appreciate your support.");
});

// Event listener for the "Register for Special Event" button
document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.querySelector("#special-event .special-button");

  if (registerButton) {
    registerButton.addEventListener("click", function() {
      // Show the message with an alert
      alert("Go to the subscribe button on the Home page, enter your full ID, and you will be registered for the event!");
    });
  }
});
