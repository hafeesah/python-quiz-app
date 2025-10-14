// Load sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// Questions
const questions = [
  {
    question: "How can you create empty list?",
    options: ["list3{}", "list3()", "list3[]", "None of the above"],
    answer: "list3[]",
    explanation: {
      "list3{}": "The curly bracket is used to create ditionaries.",
      "list3()": "This curved bracket are used to create turples.",
      "list3[]": "The squared bracket is used to create a list.",
      "None of the above": "There is an answer in the options listed above"
    }
  },
  {
     question: "What is the result of this slice?",
  code: `letters = ['a', 'b', 'c', 'd', 'e']
print(letters[:3])`,
  options: ["['a', 'b', 'c']", "['a', 'b', 'c', 'd']", "['b', 'c', 'd']", "Error"],
  answer: "['a', 'b', 'c']",
  explanation: {
    "['a', 'b', 'c']": "Correct. Omitting the start index means start from 0.",
    "['a', 'b', 'c', 'd']": "The slice stops before index 3.",
    "['b', 'c', 'd']": "That would be [1:4].",
    "Error": "No error here."
    }
  },
  {
    question: "What will be the output of this nested list indexing?",
    code: `matrix = [[1, 2], [3, 4], [5, 6]]
print(matrix[2][0])`,
    options: ["1", "3", "5", "6"],
    answer: "5",
    explanation: {
    "1": "That’s matrix[0][0].",
    "3": "That’s matrix[1][0].",
    "5": "Correct. The third list is [5,6] and index 0 gives 5.",
    "6": "That’s matrix[2][1]."
    }
  },
  {
    question: "What is the correct way to access the last element of the given list?",
    code: `numbers = [1, 2, 3, 4, 5]`,
    options: ["numbers[1]", "numbers[5]", "numbers[-1]", "numbers[0]"],
    answer: "numbers[-1]",
    explanation: {
      "numbers[1]": "This would access the second element.",
      "numbers[5]": "This would access the sicth element. But there are only 5 element.",
      "numbers[-1]": "If you count from backwards -1 can be used to access the last element.",
      "numbers[0]": "This would access the first element."
    }
  },
  {
   question: "What is the output of this code?",
   code: `my_tuple = (10, 20, 30)
my_tuple[1] = 50`,
   options: ["(10, 50, 30)", "(10, 20, 30)", "Error", "None"],
   answer: "Error",
   explanation: {
    "(10, 50, 30)": "Tuples are immutable and cannot be changed.",
    "(10, 20, 30)": "This was the original tuple but the code produces an error.",
    "Error": "Correct. Attempting to assign to a tuple index raises an error.",
    "None": "No return value is produced here."
    }
  },
  {
    question: "Which is the correct way of copying list 'list1' into another list 'list2'?",
    options: ["list2 = list1.copy()",
         "list1 = list2",
         "list2 = list2(list1)", 
         "None of the Above"],
    answer: "list2 = list1.copy()",
    explanation: {
      "list2 = list1.copy()": "copy() is the correct way of copying a list.",
      "list1 = list2": ".",
      "It only works with numbers": "Recursion works with any data type or problem structure.",
      "It returns infinite loops always": "Only happens if you forget to add a base case."
    }
  },
  {
    question: "What is the proper way to access a range of items excluding the first two and the last element of the given list?",
    code: `numbers = [1, 3, 5, 2, 7, 10, 45]`,
    options: ["numbers[2:-1]", "numbers[3:-1]", "numbers[1:-2]", "None of the above"],
    answer: "numbers[2:-1]",
    explanation: {
      "numbers[2:-1]": "This would slice the list from the third element until the second last element.",
      "numbers[3:-1]": "This would slice the list from the fourth element until the second last element.",
      "numbers[1:-2]": "This would slice the list from the second elements until the third last element.",
      "None of the above": "There is an answer amongst the options above."
    }
  },
  {
     question: "What is the output of the following code?",
     code: `my_list = [10, 20, 30, 40]
print(my_list[1])`,
     options: ["10", "20", "30", "40"],
     answer: "20",
     explanation: {
    "10": "Index 0 refers to the first element.",
    "20": "Correct! Indexing starts at 0, so index 1 is 20.",
    "30": "Index 2 refers to 30.",
    "40": "Index 3 refers to 40."
    }
  },
  {
    question: "What is the output of this tuple slicing?",
    code: `t = (0, 1, 2, 3, 4, 5)
print(t[::2])`,
   options: ["(0, 2, 4)", "(1, 3, 5)", "(0, 1, 2)", "Error"],
   answer: "(0, 2, 4)",
   explanation: {
    "(0, 2, 4)": "Correct. ::2 takes every second element starting from index 0.",
    "(1, 3, 5)": "That would start from index 1.",
    "(0, 1, 2)": "That stops too early.",
    "Error": "This is valid slicing syntax."
    }
  },
  {
    question: "What is the difference between append() and extend() in lists?",
    options: [
    "append() adds one element; extend() adds multiple elements",
    "They are exactly the same",
    "append() creates a new list",
    "extend() removes elements"
  ],
    answer: "append() adds one element; extend() adds multiple elements",
    explanation: {
    "append() adds one element; extend() adds multiple elements": "Correct. append() adds a single item, extend() adds elements from another iterable.",
    "They are exactly the same": "No, they behave differently.",
    "append() creates a new list": "It modifies the list in place.",
    "extend() removes elements": "It adds elements instead."
    }
  },
  {
    question: "What will this code output?",
    code: `x = [1, 2, 3]
x[1] = 99
print(x)`,
   options: ["[1, 99, 3]", "[1, 2, 3]", "Error", "(1, 99, 3)"],
   answer: "[1, 99, 3]",
   explanation: {
    "[1, 99, 3]": "Lists are mutable, so you can change elements.",
    "[1, 2, 3]": "The second element was changed to 99.",
    "Error": "No error occurs here.",
    "(1, 99, 3)": "Curved bracket represent tuples, not lists."
    }
  },
  {
    question: "What happens when you use the + operator on two lists?",
    code: `a = [1, 2]
b = [3, 4]
print(a + b)`,
   options: ["[1, 2, 3, 4]", "[4, 6]", "[[1, 2], [3, 4]]", "Error"],
   answer: "[1, 2, 3, 4]",
   explanation: {
    "[1, 2, 3, 4]": "Correct. The + operator concatenates lists.",
    "[4, 6]": "That would be element-wise addition, not supported for lists.",
    "[[1, 2], [3, 4]]": "That’s what happens if you nest them manually.",
    "Error": "This is valid syntax."
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
