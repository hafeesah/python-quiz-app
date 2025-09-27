// Load sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// Questions
const questions = [
  {
    question: "In the following code, is assigned a/an____?",
    code: "n = '24'",
    options: ["String", "Float", "Integer", "Boolean"],
    answer: "String",
    explanation: {
      "String": " '24' is wrapped in quotes, so it’s a String.",
      "Float": "❌ Floats have decimals, e.g., 24.0.",
      "Integer": "❌ Integers don’t use quotes.",
      "Boolean": "❌ Booleans are True or False."
    }
  },
  {
    question: "What is the output of this code?",
    code: `print(2**3)`, // 👈 Python snippet
    options: ["5", "6", "8", "9"],
    answer: "8",
    explanation: {
      "8": "✅ 2**3 means 2 to the power of 3, which is 8.",
      "5": "❌ That’s 2+3, not exponentiation.",
      "6": "❌ That’s 2*3, not exponentiation.",
      "9": "❌ That would be 3**2."
    }
  },
  {
    question: "What is the correct output of this code?",
    code: `str1 = '5'
str2 = '2'
result = str1 + str2
print(result)`,
    options: ["'52'", "7", "'25'", "Error"],
    answer: "'52'",
    explanation: {
      "'52'": "✅ Strings are concatenated, not added.",
      "7": "❌ That would be integers, but here they’re strings.",
      "'25'": "❌ Order matters: '5' + '2' = '52'.",
      "Error": "❌ This is valid string concatenation."
    }
  },
  {
    question: "A string literal is surrounded by?",
    options: ["Single", "Double", "Triple", "All of the above"],
    answer: "All of the above",
    explanation: {
      "Single": "✔️ Correct, but not the only one.",
      "Double": "✔️ Correct, but not the only one.",
      "Triple": "✔️ Correct, but not the only one.",
      "All of the above": "✅ Best answer — Strings can use single, double, or triple quotes."
    }
  }
];

let currentIndex = 0;
let correctCount = 0;

const quizEl = document.getElementById("quiz");
const scoreEl = document.getElementById("score");

// Show one question at a time
function showQuestion(index) {
  quizEl.innerHTML = ""; // clear old content

  const q = questions[index];
  const section = document.createElement("section");
  section.className = "question-block";

  const questionP = document.createElement("p");
  questionP.className = "question";
  questionP.textContent = `Question ${index + 1} of ${questions.length}: ${q.question}`;
  section.appendChild(questionP);

  //If this question has code, show it highlighted//
  if (q.code) {
    const codeBlock = document.createElement("pre");
    const codeEl = document.createElement("code");
    codeEl.className = "language-python";
    codeEl.textContent = q.code;
    codeBlock.appendChild(codeEl);
    section.appendChild(codeBlock);
    Prism.highlightElement(codeEl); // highlight with Prism.js
  }

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "option-label";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `q${index}`;
    radio.value = opt;
    radio.id = `q${index}o${i}`;

    const span = document.createElement("span");
    span.textContent = " " + opt;

    const feedbackSpan = document.createElement("span");
    feedbackSpan.className = "option-feedback";
    feedbackSpan.style.display = "none"; // hidden until submit

    const iconSpan = document.createElement("span");
    iconSpan.className = "option-icon";

    label.appendChild(radio);
    label.appendChild(span);
    label.appendChild(iconSpan);
    label.appendChild(feedbackSpan);
    optionsDiv.appendChild(label);
  });

  const btn = document.createElement("button");
  btn.className = "submit-btn";
  btn.type = "button";
  btn.textContent = "Submit";

  const nextBtn = document.createElement("button");
  nextBtn.className = "next-btn";
  nextBtn.type = "button";
  nextBtn.textContent = "Next Question";
  nextBtn.style.display = "none";

  btn.addEventListener("click", () => checkAnswer(q, section, btn, nextBtn));
  nextBtn.addEventListener("click", () => loadNext());

  section.appendChild(optionsDiv);
  section.appendChild(btn);
  section.appendChild(nextBtn);

  quizEl.appendChild(section);
}

function checkAnswer(q, section, btn, nextBtn) {
  const options = section.querySelectorAll(".option-label");
  const selected = section.querySelector(`input[name="q${currentIndex}"]:checked`);

  if (!selected) {
    alert("⚠️ Please select an answer.");
    return;
  }

  options.forEach((optLabel) => {
    const input = optLabel.querySelector("input");
    const feedback = optLabel.querySelector(".option-feedback");
    const icon = optLabel.querySelector(".option-icon");
    feedback.style.display = "inline-block";
    feedback.textContent = " → " + q.explanation[input.value];

    if (input.value === q.answer) {
      feedback.style.color = "green";
      optLabel.classList.add("correct-option");
      icon.textContent = " ✅";
    } else {
      feedback.style.color = "red";
      optLabel.classList.add("wrong-option");
      icon.textContent = " ❌";
    }
    input.disabled = true;
  });

  if (selected.value === q.answer) {
    correctCount++;
    correctSound.play();
  } else {
    wrongSound.play();
  }

  btn.style.display = "none";
  nextBtn.style.display = "inline-block";
}

function loadNext() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion(currentIndex);
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  quizEl.innerHTML = "";
  const percent = Math.round((correctCount / questions.length) * 100);
  scoreEl.hidden = false;
  scoreEl.textContent = `🎉 You scored ${correctCount} out of ${questions.length} (${percent}%)`;

  if (percent === 100) {
    launchConfetti();
  }
}

// Confetti function
function launchConfetti() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Start quiz
showQuestion(currentIndex);
