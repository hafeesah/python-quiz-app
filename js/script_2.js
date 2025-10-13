// Load sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// Questions
const questions = [
{
    question: "What keyword do we use to define a function?",
    options: ["print", "def", "call", "None of the above"],
    answer: "def",
    explanation: {
      "print": "This is used to display output, not define a function.",
      "def": "Correct! Functions in Python are defined using the 'def' keyword.",
      "call": "This is how you use a function, not how you define it.",
      "None of the above": "Incorrect. 'def' is the right answer."
    }
  },
  {
    question: "What is the name of the function in the given function definition?",
    code: `def greet(name):
    print("Hello, " + name)`,
    options: ["def", "greet", "name", "All of the above"],
    answer: "greet",
    explanation: {
      "def": "This is used to initialise the function.",
      "greet": "The function name comes right after the def keyword.",
      "name": "This is the parameter and it is used to pass value to the given function.",
      "All of the above": "Only one option above is applicable."
    }
  },
  {
    question: "How can we call the function defined below?",
    code: `def add(n1,n2):
    sum = n1 % n2
    return sum`,
    options: ["add()", "add(2,4)", "add", "All of the above"],
    answer: "add(2,4)",
    explanation: {
      "add()": "No parameters has been added to the bracket.",
      "add(2,4)": "To call a function, we simply type the function name with appropriate parameters.",
      "add": "No added parameter.",
      "All of the above": "Only one option above is applicable."
    }
  },
  {
    question: "What will be the output of the following block of code?",
    code: `def subtract(n1, n2):
    difference = n1 - n2
    print(difference)

num1 = 20
subtract(num1, 10)`,
    options: ["-5", "10", "30", "5"],
    answer: "10",
    explanation: {
      "-5": "Not quite right.",
      "10": "Because 20 has been stored into num1 and since we are calling the subtraction function, the difference between num1 and 10 is 10.",
      "30": "That is the sum of num1 and 10.",
      "5": "Not quite right."
    }
  },
  {
    question: "Which of the following are built-in python function?",
    options: [
      "print()",
      "input()",
      "type()",
      "All of the above"
    ],
    answer:"All of the above",
    explanation: {
      "print()": "It is a bulit-in but not the only one.",
      "input()": "It is a bulit in but not the only one.",
      "type()": "It is a built-in but not the only one.",
      "All of the above": "Every option is correct."
    }
  },
  {
    question: "Which is true about recursion in Python?",
    options: ["Functions can call themselves",
         "It is not allowed in Python",
         "It only works with numbers", 
         "It returns infinite loops always"],
    answer: "Functions can call themselves",
    explanation: {
      "Functions can call themselves": "Recursive functions call themselves unti a base condition stops them.",
      "It is not allowed in Python": "Python supports recursion.",
      "It only works with numbers": "Recursion works with any data type or problem structure.",
      "It returns infinite loops always": "Only happens if you forget to add a base case."
    }
  },
  {
    question: "What will be the result of the following code?",
    code: `def my_func():
    a = 5

my_func()
print(a)`,
    options: ["0", "NameError", "5", "None of the above"],
    answer: "NameError",
    explanation: {
      "0": "Not quite right.",
      "NameError": "Name 'a' has not been defined.",
      "5": "Not quite right.",
      "None of the above": "There is an answer amongst the options above."
    }
  },
  {
    question: "Complete the following code",
    code: `def greet(name)`,
    options: [".", ":", ";", "None of the above"],
    answer: ":",
    explanation: {
      ".": "Not quite right.",
      ":": "A colon comes right after function declaration.",
      ";": "Not quite right.",
      "None of the above": "One of the option is correct."
    }
  },
  {
    question: "What is the scope of a variable defined inside a function",
    options: ["Global", "Local", "Class-Level", "Static"],
    answer: "Local",
    explanation: {
      "Global": "Unless explicitly declared global.",
      "Local": "Variables defined inside a function are local to the function.",
      "Class-level": "Not related here.",
      "Static": "Not a python keyword for variables."
    }
  },
  {
    question: "Which statement is true about lambda functions?",
    options: ["They can only have one expression",
         "They must use def", 
         "They are faster than normal functions always",
          "They can contain multiple statements"],
    answer: "They can only have one expression",
    explanation: {
      "They can only have one expression": "Lamba is for short, anonymous functions with one expression.",
      "They must use def": "Lambda does not use def.",
      "They are faster than normal functions always": "Not always true.",
      "They can contain multiple statements": "They are limited to one expression."
    }
  },
  {
    question: "What will be the output of this code?",
    code: `def square(x):
    double = x * x
    return double

result = square(4)
print(result)
`,
    options: ["16", "Error", "8", "None"],
    answer: "16",
    explanation: {
      "16": " The result of 4*4 is 16.",
      "Error": "This code is valid, no error.",
      "8": "Wrong calculation.",
      "None": "There is an answer in the option."
    }
  },
  {
    question: "What happens if a function has no return statement?",
    options: ["Returns 0", "Returns None", "Returns Error", "Returns last value printed"],
    answer: "Returns None",
    explanation: {
      "Returns 0": "Not quite right.",
      "Returns None": "Functions without return automatically return None.",
      "Returns Error": "No error occurs.",
      "Returns last value printed": "Printing does not affect return."
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



