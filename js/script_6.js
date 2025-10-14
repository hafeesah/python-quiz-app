// Load sounds
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const victorySound = new Audio("sounds/victory.mp3");

// Questions
const questions = [
  {
   question: "Which of the following is an immutable data type?",
   options: ["List", "Turples", "Sets", "Dictionaries"],
   answer: "Turples",
  explanation: {
    "List": "They are mutable meaning their items can be changed.",
    "Turples": "They are immutable since their items cannot be changed.",
    "Sets": "They are mutable, but their elements must be immutable.",
    "Dictionaries": "Just like List, they are mutable meaning their items can be changed."
    }
  },
  {
    question: "What will be the output of the following block of code?",
    code: `result = 'a' in 'Hello'
print(result)`,
    options: ["False", "True", "Error", "None of the above"],
    answer: "False",
    explanation: {
      "False": "The substring does not exist within the given string.",
      "True": "The substring does not exist within the given code so it does not return True.",
      "Error": "The code will not return error message.",
      "None of the above": "Not quite right."
    }
  },
  {
     question: "Which of these creates an empty set?",
     options: ["s = {}", "s = []", "s = set()", "s = emptyset()"],
     answer: "s = set()",
     explanation: {
    "s = {}": "Creates an empty dictionary, not a set.",
    "s = []": "Creates an empty list.",
    "s = set()": "Correct! This is how to make an empty set in Python.",
    "s = emptyset()": "There’s no such built-in function."
    }
  },
  {
   question: "What is the output of the following of the following code?",
  code: `my_set = {1, 2}
my_set.update([2, 3, 5])
my_set.add(2)
print(my_set)`,
  options: ["{1, 2, 2, 2, 3, 5}", "{1, 2, 3, 5}", "{1, 2, 2, 3, 5, 2}", "None of the above"],
  answer: "{1, 2, 3, 5}",
  explanation: {
    "{1, 2, 2, 2, 3, 5}": "Sets is unique and removes any duplicate.",
    "{1, 2, 3, 5}": ".update will add multiple elements, while .add will add single elements. however, sets are uniques, it has no duplicate so '2' will only be added once.",
    "{1, 2, 2, 3, 5, 2}": "Sets is unique and removes any duplicate.",
    "None of the above": "There is a correct answer above."
    }
  },
  {
  question: "What is the correct way to create a dictionary in Python?",
  options: [
    "my_dict = {'name': 'Alice', 'age': 25}",
    "my_dict = ['name', 'Alice', 'age', 25]",
    "my_dict = ('name': 'Alice', 'age': 25)",
    "my_dict = {'name', 'Alice', 'age', 25}"
  ],
  answer: "my_dict = {'name': 'Alice', 'age': 25}",
  explanation: {
    "my_dict = {'name': 'Alice', 'age': 25}": "✅ Correct! Dictionaries use curly braces with key-value pairs separated by colons.",
    "my_dict = ['name', 'Alice', 'age', 25]": "❌ This creates a list, not a dictionary.",
    "my_dict = ('name': 'Alice', 'age': 25)": "❌ Tuples use parentheses, and this syntax is invalid.",
    "my_dict = {'name', 'Alice', 'age', 25}": "❌ Missing key-value pair structure — this makes a set, not a dictionary."
  }
  },
  {
  question: "What will be the output of the following?",
  code: `squares = {1:1, 2:4, 3:9}
  
for i in squares:
  if i == 3:
     print(squares[i])`,
  options: ["3", "4", "9", "None of the above"],
  answer: "9",
  explanation: {
    "3": "Not quite right.",
    "4": "4 is not the corresponding value of key'3'.",
    "9": "Here in each code, we only iterate through each key not the values, The corresponding value, whose key equals 3 is then printed.",
    "None of the above": "There is an answer in the above options."
  }
  },
  {
  question: "Which of the following methods removes all items from a dictionary?",
  options: ["clear()", "delete()", "pop()", "removeAll()"],
  answer: "clear()",
  explanation: {
    "clear()": "clear() removes all key-value pairs from a dictionary.",
    "delete()": "Not a dictionary method in Python.",
    "pop()": "Removes a single key-value pair, not all.",
    "removeAll()": "No such method exists for dictionaries."
  }
  },
  {
   question: "What is the result of this code?",
   code:`my_set = {1, 2, 3, 2, 1}
print(my_set)`,
  options: ["{1, 2, 3, 2, 1}", "{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)"],
  answer: "{1, 2, 3}",
  explanation: {
    "{1, 2, 3, 2, 1}": "Sets automatically remove duplicates.",
    "{1, 2, 3}": "Correct! Sets store only unique elements.",
    "[1, 2, 3]": "This represents a list, not a set.",
    "(1, 2, 3)": "This represents a tuple, not a set."
    }
  },
  {
     question: "How do you access the value associated with the key 'color' in a dictionary called car?",
     options: [
    "car['color']",
    "car.color",
    "car.get(color)",
    "get.car('color')"
  ],
     answer: "car['color']",
     explanation: {
    "car['color']": "Square brackets are used to access a value by key in a dictionary.",
    "car.color": "Only works with objects, not regular dictionaries.",
    "car.get(color)": "The key should be in quotes: car.get('color').",
    "get.car('color')": "Invalid syntax in Python."
    }
  },
  {
    question: "What will this code print?",
    code: `my_dict = {'a':1, 'b':2}
print('c' in my_dict)`,
   options: ["True", "False", "Error", "None"],
   answer: "False",
   explanation: {
    "True": "'c' is not a key in the dictionary.",
    "False": "Correct! The 'in' keyword checks if a key exists in a dictionary.",
    "Error": "The code runs fine.",
    "None": "'in' returns a boolean, not None."
    }
  },
  {
 question: "Which statement correctly adds a new key-value pair to a dictionary?",
  options: [
    "my_dict['country'] = 'Canada'",
    "my_dict.add('country', 'Canada')",
    "add(my_dict, 'country', 'Canada')",
    "my_dict.append({'country': 'Canada'})"
  ],
  answer: "my_dict['country'] = 'Canada'",
  explanation: {
    "my_dict['country'] = 'Canada'": "You can add or update a key by simple assignment.",
    "my_dict.add('country', 'Canada')": "No 'add()' method exists for dictionaries.",
    "add(my_dict, 'country', 'Canada')": "Not valid syntax.",
    "my_dict.append({'country': 'Canada'})": "append() is a list method, not dictionary."
  }
  },
  {
    question: "Which of these statements about sets is TRUE?",
  options: [
    "Sets allow duplicate elements",
    "Sets are ordered collections",
    "Sets are mutable",
    "Sets can contain lists"
  ],
  answer: "Sets are mutable",
  explanation: {
    "Sets allow duplicate elements": "Sets automatically remove duplicates.",
    "Sets are ordered collections": "Sets are unordered.",
    "Sets are mutable": "You can add or remove elements from a set.",
    "Sets can contain lists": "Lists are unhashable and cannot be in a set."
  }
  },
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