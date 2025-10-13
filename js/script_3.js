// Load sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// Questions
const questions = [
{
    question: "What keyword is used for multiple conditions in Python?",
    options: ["elseif", "elif", "else if", "then"],
    answer: "elif",
    explanation: {
      "elseif": "Python uses elif, not elseif.",
      "elif": "correct keyword for else-if conditions.",
      "else if": "This is Javascript or C syntax not Python.",
      "then": "Not used in Python conditionals."
    }
  },
  {
    question: "What is returned by the following lines of code?",
    code: `print((True and True) or (False and True))`,
    options: ["true", "True", "False", "false"],
    answer: "True",
    explanation: {
      "true": "Python is case-sensitive, true is not a boolean value.",
      "True": "True and True will produce True, False and True will give False; the result of True or False is True.",
      "False": "True and True will produce True, False and True will give False; the result of True or False is True not True.",
      "false": "Python is case-sensitive, false is not a boolean value."
    }
  },
  {
    question: "What will be the output of this code?",
    code: `x = 5
y = 10
if x < y:
   print("x is smaller")`,
    options: ["y is smaller", "x is smaller", "Error", "No output"],
    answer: "x is smaller",
    explanation: {
      "y is smaller": "y is greater than x, so the condition print False.",
      "x is smaller": "x is smaller than y so the condition print True.",
      "Error": "There is no syntax error.",
      "No output": "There is output, because the condition is True."
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
    question: "Which of the following statement will return to True?",
    options: [
      "print( 9 < 13)",
      "print(9 != 13)",
      "print(9 <= 13)",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: {
      "print( 9 < 13)": "It is True but not the only one.",
      "print(9 != 13)": "It is True but not the only one.",
      "print(9 <= 13)": "It is True but not the only one.",
      "All of the Above": "Every option is correct."
    }
  },
 {
  question: "Which of these values are considered False in Python?",
  options: [
    "0",
    "'' (empty string)",
    "[] (empty list)",
    "All of the above"
  ],
  answer: "All of the above",
  explanation: {
    "0": "zero is a False value, but not the only one amongst the option.",
    "'' (empty string)": "empty strings are considered False, but not the only one amongst the option",
    "[] (empty list)": "empty containers evaluate to False, but not the only one amongst the option",
    "All of the above": "all these are considered False in conditionals, but not the only one amongst the option"
  }
},
 {
  question: "Which of these statements will print 'Yes'?",
  code: `x = 7
if x == 7 or x > 10:
    print("Yes")`,
  options: [
    "x = 5",
    "x = 7",
    "x = 10",
    "None of the above"
  ],
  answer: "x = 7",
  explanation: {
    "x = 5": "Condition is False (5 is not 7 or greater than 10).",
    "x = 7": "Condition is True, because x == 7.",
    "x = 10": "False, since 10 is not greater than 10 (it is equal).",
    "None of the above": "x = 7 works, so this is incorrect."
  }
  },
  {
    question: "What is the output of this code",
    code: `x = 20
if (x % 2 ==0):
    print("Divisible by 2")
else:
    print("Not divisible by 2")`,
    options: ["Not divisible by 2", "Error", "Divisible by 2", "None of the above"],
    answer: "Divisible by 2",
    explanation: {
      "Not divisible by 2": "20 divided by 2 is 10 remainder 0.",
      "Error": "The code is right so no error message.",
      "Divisible by 2": "20 divided by 2 is 10 remainder 0.",
      "None of the above": "One of the option is correct."
    }
  },
  {
    question: "Which of the following displays False?",
    options: ["print(not False)",
              "print(not (5!=5))",
              "print(not(5 == 5))",
              "None of the above"],
    answer: "print(not(5 == 5))",
    explanation: {
      "print(not False)": "This expression evaluates to True because the operand is False .",
      "print(not (5!=5))": "This expression also evaluates to True because (5 !=5) = False.",
      "print(not(5 == 5))": "Since 5 == 5 is True , so therefore the expression will be False.",
      "None of the above": "There is an answer in the option."
    }
  },
  {
    question: "When do we use the 'pass' statement?",
    options: ["When constructing a body that does nothing",
         "When passing paramers to functions", 
         "When passing the control to other programs",
          "None of the above"],
    answer: "When constructing a body that does nothing",
    explanation: {
      "When constructing a body that does nothing": "The 'pass' statement are used inside the body of loops, functions that you are not ready to run.",
      "When passing parameters to function": "'pass' is not used for passing parameters to function.",
      "When passing the control to other programs": "Not used for this purpose.",
      "None of the above": "There is a definite answer in the options."
    }
  },
  {
  question: "What will this code output?",
  code: `a = 10
b = 20
if not a > b:
    print("a is not greater than b")`,
  options: ["a is not greater than b", "a is greater than b", "Error", "No output"],
  answer: "a is not greater than b",
  explanation: {
    "a is not greater than b": "Since a > b is False, not False is True, so the message prints.",
    "a is greater than b": "That would be False.",
    "Error": "Valid syntax.",
    "No output": "There is output."
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