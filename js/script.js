// Load sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// Questions
const questions = [
  {
    question: "What is the correct data type assigned to n?",
    code: "n = '24'",
    options: ["String", "Float", "Integer", "Boolean"],
    answer: "String",
    explanation: {
      "String": "'24' is wrapped in quotes, so it’s a String.",
      "Float": "Floats have decimals, e.g., 24.0.",
      "Integer": "Integers don’t use quotes.",
      "Boolean": "Booleans are True or False."
    }
  },
  {
    question: "What is the output of this code?",
    code: `print(2**3)`,
    options: ["5", "6", "8", "9"],
    answer: "8",
    explanation: {
      "8": "2**3 means 2 to the power of 3, which is 8.",
      "5": "That’s 2+3, not exponentiation.",
      "6": "That’s 2*3, not exponentiation.",
      "9": "That would be 3**2."
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
      "'52'": "Strings are concatenated, not added.",
      "7": "That would be integers, but here they’re strings.",
      "'25'": "Order matters: '5' + '2' = '52'.",
      "Error": "This is valid string concatenation."
    }
  },
  {
    question: "What is the output of the following code?",
    code: `a = 2.44
b = 2
result = a + b
print(type(result))`,
    options: ["<class 'int'>", "<class 'string'>", "<class 'float'>", "Error"],
    answer: "<class 'float'>",
    explanation: {
      "<class 'int'>": "It would be int if 'a' was an integer too.",
      "<class 'string'>": "Neither 'a' nor 'b' has quotes.",
      "<class 'float'>": "Adding a float and an int results in a float.",
      "Error": "This code runs fine, no error."
    }
  },
  {
    question: "Which of the following will output Hello World?",
    options: [
      "print('Hello World')",
      "print(\"Hello World\")",
      "print('Hello' + ' ' + 'World')",
      "All of the Above"
    ],
    answer: "All of the Above",
    explanation: {
      "print('Hello World')": "Correct, but not the only right answer.",
      "print(\"Hello World\")": "Correct, but not the only right answer.",
      "print('Hello' + ' ' + 'World')": "Correct, but not the only right answer.",
      "All of the Above": "Every option is correct."
    }
  },
  {
    question: "What line of code is used to ask the user to enter something?",
    options: ["input", "type", "enter", "def"],
    answer: "input",
    explanation: {
      "input": "Used to ask the user to enter something.",
      "type": "Used to check the data type of a value.",
      "enter": "Not correct Python syntax.",
      "def": "Used to define a function."
    }
  },
  {
    question: "What will be the result of the following code?",
    code: `a = 5
print(type(a))`,
    options: ["<class 'float'>", "<class 'int'>", "<class 'complex'>", "<class 'string'>"],
    answer: "<class 'int'>",
    explanation: {
      "<class 'float'>": "Float has a decimal point.",
      "<class 'int'>": "Positive and negative whole numbers.",
      "<class 'complex'>": "Contains real and imaginary parts.",
      "<class 'string'>": "Strings are inside quotes."
    }
  },
  {
    question: "Identify the type of error in this code",
    code: `print('Hello world\")`,
    options: ["TypeError", "SyntaxError", "NameError", "LogicError"],
    answer: "SyntaxError",
    explanation: {
      "TypeError": "Occurs when an operation is applied to the wrong type.",
      "SyntaxError": "Caused by mismatched quotes in the string.",
      "NameError": "Occurs when a variable is not defined.",
      "LogicError": "Occurs when code runs but gives the wrong result."
    }
  },
  {
    question: "What symbol is used to make comments in Python?",
    options: ["+", "*", "#", "!"],
    answer: "#",
    explanation: {
      "+": "Nope, used for addition.",
      "*": "Nope, used for multiplication.",
      "#": "Hash sign is used for comments in Python.",
      "!": "Nope, not for comments."
    }
  },
  {
    question: "Which operator returns the remainder of a division?",
    options: ["%", "**", "*", "/"],
    answer: "%",
    explanation: {
      "%": "Returns the remainder of a division.",
      "**": "Used for exponentiation.",
      "*": "Used for multiplication.",
      "/": "Used for division."
    }
  },
  {
    question: "What will be the output of this code?",
    code: `print((9 - 4) * 2 - 1)`,
    options: ["5", "Error", "11", "9"],
    answer: "9",
    explanation: {
      "5": "Wrong calculation.",
      "Error": "This code is valid, no error.",
      "11": "Wrong calculation.",
      "9": "Following BODMAS: (9-4)=5, *2=10, -1=9."
    }
  },
  {
    question: "A string literal is surrounded by?",
    options: ["Single", "Double", "Triple", "All of the above"],
    answer: "All of the above",
    explanation: {
      "Single": "Correct, but not the only one.",
      "Double": "Correct, but not the only one.",
      "Triple": "Correct, but not the only one.",
      "All of the above": "Best answer — strings can use single, double, or triple quotes."
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

  // Show code if exists
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

    const feedbackSpan = document.createElement("span");
    feedbackSpan.className = "option-feedback";
    feedbackSpan.style.display = "none";

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
  const isLast = index === questions.length - 1;
  nextBtn.textContent = isLast ? "Finish" : "Next Question";
  nextBtn.style.display = "none";

  // Next button behavior
  nextBtn.addEventListener("click", () => {
    if (isLast) {
      showFinalScore();
    } else {
      loadNext();
    }
  });

  btn.addEventListener("click", () => checkAnswer(q, section, btn, nextBtn));

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
