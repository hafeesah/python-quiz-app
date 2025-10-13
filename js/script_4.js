// Load sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const victorySound = new Audio("sounds/victory.mp3");

// Questions
const questions = [
  {
   question: "How can you make an infinite loop in Python?",
   options: [
    "while True:",
    "for i in range(infinity):",
    "while (1 == 2):",
    "while 0:"
  ],
  answer: "while True:",
  explanation: {
    "while True:": "The condition True is always true, creating an infinite loop.",
    "for i in range(infinity):": "Python’s range() cannot take ‘infinity’.",
    "while (1 == 2):": "This condition is always false.",
    "while 0:": "0 is treated as False, so this never runs."
    }
  },
  {
    question: "What will be the output of the following block of code?",
    code: `my_range = range(1, 5)
a = 0
for val in my_range:
    a +=1
print(a)`,
    options: ["5", "4", "0", "6"],
    answer: "4",
    explanation: {
      "5": "Not quite right.",
      "4": "The range()function return will iterate the loop 4 times, so the value stored in a wil be added 1 four times.",
      "0": "Not quite right.",
      "6": "Not quite right."
    }
  },
  {
    question: "What will be the output of this code?",
  code: `count = 0
while count < 3:
    print(count)
    count += 1`,
  options: ["0 1 2", "1 2 3", "0 1 2 3", "Infinite loop"],
  answer: "0 1 2",
  explanation: {
    "0 1 2": "The loop runs while count < 3, printing 0, 1, and 2.",
    "1 2 3": "The loop starts at 0, not 1.",
    "0 1 2 3": "The loop condition stops before count reaches 3.",
    "Infinite loop": "The counter increases by 1 each time, so it stops properly."
    }
  },
  {
   question: "What is the output of the following for loop?",
  code: `for i in range(1, 5):
    print(i)`,
  options: ["1 2 3 4 5", "0 1 2 3 4", "1 2 3 4", "None of the above"],
  answer: "1 2 3 4",
  explanation: {
    "1 2 3 4 5": "range(1,5) goes up to but does not include 5.",
    "0 1 2 3 4": "Starts at 1, not 0.",
    "1 2 3 4": "Correct. range(1,5) gives 1,2,3,4.",
    "None of the above": "There is a correct answer above."
    }
  },
  {
  question: "Which statement will immediately end a loop?",
  options: ["stop", "exit", "break", "continue"],
  answer: "break",
  explanation: {
    "stop": "Not a Python keyword for loops.",
    "exit": "Can exit the program but not just the loop.",
    "break": "Correct. ‘break’ stops the loop immediately.",
    "continue": "Skips to the next iteration but doesn’t stop the loop."
  }
  },
 {
  question: "What will be the final value i in the following program?",
  code: `n = 3
i = 1

while i <= n:
  i = i + 1
print(i)`,
  options: ["3", "4", "1", "None of the above"],
  answer: "4",
  explanation: {
    "3": "Not quite right.",
    "4": "i was initially stored has 1 and the with each iteration, it increases by 1 till the condition is met.",
    "1": "Not quite right",
    "None of the above": "There is an answer in the above options."
  }
},
 {
  question: "What will this code print?",
  code: `for i in range(3):
    print("Hello")`,
  options: [
    "Prints Hello once",
    "Prints Hello three times",
    "Prints Hello infinitely",
    "Error"
  ],
  answer: "Prints Hello three times",
  explanation: {
    "Prints Hello once": "The loop runs three times (0,1,2).",
    "Prints Hello three times": "It prints Hello on each iteration.",
    "Prints Hello infinitely": "range(3) is finite.",
    "Error": "The syntax is valid."
  }
  },
  {
   question: "Which of the following loops will never execute its body?",
   code: `x = 10
while x < 5:
    print(x)`,
   options: [
    "This one",
    "while True:",
    "for i in range(5):",
    "while x > 0:"
  ],
   answer: "This one",
   explanation: {
    "This one": "x = 10, and 10 < 5 is false from the start.",
    "while True:": "This one runs infinitely.",
    "for i in range(5):": "Runs five times.",
    "while x > 0:": "Would run as long as x > 0."
    }
  },
  {
    question: "What does range(5, 0, -1) produce?",
    options: [
    "5 4 3 2 1",
    "0 1 2 3 4 5",
    "Error",
    "1 2 3 4 5"
  ],
  answer: "5 4 3 2 1",
  explanation: {
    "5 4 3 2 1": "Starts at 5, stops before 0, steps by -1.",
    "0 1 2 3 4 5": "That would be range(6).",
    "Error": "Negative step is allowed.",
    "1 2 3 4 5": "That would be range(1,6)."
    }
  },
  {
    question: "What will be the output of the following code?",
    code:`str1 = 'Hello'
for s in str1:
    if s == 'o'
       print(s)
    else:
       continue`,
    options: ["o", "0", "Error", "s"],
    answer: "o",
    explanation: {
      "o": "The for loop will iterate over the string str1 until the condition matches the value of s at a particular iteration, then it will be displayed.",
      "0": "Not quite right.",
      "Error": "The code is correct.",
      "s": "s will only be printed if there was a quotation mark to represent a string."
    }
  },
  {
  question: "What is the output of the following code?",
  code: `for i in range(2):
    for j in range(2):
        print(i, j)`,
  options: [
    "(0,0) (0,1) (1,0) (1,1)",
    "(1,1) (1,2) (2,1) (2,2)",
    "(0,0) (1,1)",
    "Error"
  ],
  answer: "(0,0) (0,1) (1,0) (1,1)",
  explanation: {
    "(0,0) (0,1) (1,0) (1,1)": "Nested loops print all combinations of i and j.",
    "(1,1) (1,2) (2,1) (2,2)": "range(2) gives only 0 and 1.",
    "(0,0) (1,1)": "Missing pairs.",
    "Error": "Code runs fine."
  }
  },
  {
    question: "What is the main purpose of the 'break' statement?",
    options: ["Stop execution of program for 1 second",
              "Terminate the loop immediately",
              "Skip the rest of the code for the current iteration only",
              "Terminate the whole program"],
    answer: "Terminate the loop immediately",
    explanation: {
      "Stop execution of program for 1 second": "Not quite right.",
      "Terminate the loop immediately": "When the 'break' statement is encountered the loop automatically terminate.",
      "Skip the rest of the code for the current iteration only": "This is only true for the 'continue' statement.",
      "Terminate the whole program": "The 'break' statement does not affect the whole program."
    }
  }
];
let currentIndex = 0;
let correctCount = 0;
let userAnswers = []; // ✅ Added this missing array

const quizEl = document.getElementById("quiz");
const scoreEl = document.getElementById("score");

// Show one question at a time
function showQuestion(index) {
  quizEl.innerHTML = "";

  const q = questions[index];
  const section = document.createElement("section");
  section.className = "question-block";

  const questionP = document.createElement("p");
  questionP.className = "question";
  questionP.textContent = `Question ${index + 1} of ${questions.length}: ${q.question}`;
  section.appendChild(questionP);

  if (q.code) {
    const codeBlock = document.createElement("pre");
    const codeEl = document.createElement("code");
    codeEl.className = "language-python";
    codeEl.textContent = q.code;
    codeBlock.appendChild(codeEl);
    section.appendChild(codeBlock);
    Prism.highlightElement(codeEl);
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

    label.appendChild(radio);
    label.appendChild(span);
    optionsDiv.appendChild(label);
  });

  const btn = document.createElement("button");
  btn.className = "submit-btn";
  btn.textContent = "Submit";
  btn.addEventListener("click", () => checkAnswer(q, section, btn));

  section.appendChild(optionsDiv);
  section.appendChild(btn);
  quizEl.appendChild(section);
}

function checkAnswer(q, section, btn) {
  const selected = section.querySelector(`input[name="q${currentIndex}"]:checked`);
  if (!selected) {
    alert("⚠️ Please select an answer.");
    return;
  }

  const chosen = selected.value;
  const correct = chosen === q.answer;

  // Save user's choice
  userAnswers.push({
    question: q.question,
    code: q.code || "",
    userAnswer: chosen,
    correctAnswer: q.answer,
    allExplanations: q.explanation,
    isCorrect: correct
  });

  if (correct) {
    correctCount++;
    correctSound.play();
  } else {
    wrongSound.play();
  }

  const feedback = document.createElement("p");
  feedback.innerHTML = correct
    ? `✅ Correct! ${q.explanation[chosen]}`
    : `❌ Wrong! ${q.explanation[chosen]}`;
  feedback.className = correct ? "feedback-correct" : "feedback-wrong";
  section.appendChild(feedback);

  btn.style.display = "none";

  const nextBtn = document.createElement("button");
  nextBtn.className = "next-btn";
  const isLast = currentIndex === questions.length - 1;
  nextBtn.textContent = isLast ? "Finish Quiz" : "Next Question";

  nextBtn.addEventListener("click", () => {
    if (isLast) {
      showFinalScore();
    } else {
      currentIndex++;
      showQuestion(currentIndex);
    }
  });

  section.appendChild(nextBtn);
}

function showFinalScore() {
  quizEl.innerHTML = "";
  const percent = Math.round((correctCount / questions.length) * 100);
  scoreEl.hidden = false;
  scoreEl.innerHTML = `🎉 You scored <strong>${correctCount}</strong> out of <strong>${questions.length}</strong> (${percent}%)`;

  if (percent >= 70) {
    launchConfetti();
    setTimeout(() => victorySound.play(), 400);
  }

  const reviewSection = document.createElement("div");
  reviewSection.className = "review-section";

  userAnswers.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "review-item";

    let optionsHtml = "";
    for (const [option, exp] of Object.entries(item.allExplanations)) {
      const isCorrect = option === item.correctAnswer;
      optionsHtml += `
        <p class="${isCorrect ? "correct-option" : "wrong-option"}">
          <strong>${option}:</strong> ${exp}
        </p>`;
    }

    div.innerHTML = `
      <div class="question-box">
        <h3>Question ${idx + 1}: ${item.question}</h3>
        ${item.code ? `<pre><code class="language-python">${item.code}</code></pre>` : ""}
        <p><strong>Your answer:</strong> ${item.userAnswer} ${item.isCorrect ? "✅" : "❌"}</p>
        <p><strong>Correct answer:</strong> ${item.correctAnswer}</p>
        <div class="explanations">
          <h4>All options explained:</h4>
          ${optionsHtml}
        </div>
      </div>
    `;
    reviewSection.appendChild(div);
  });

  quizEl.appendChild(reviewSection);
}

function launchConfetti() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Start quiz
showQuestion(currentIndex);
