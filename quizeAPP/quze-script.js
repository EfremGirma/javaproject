const quizData = [
  {
    question: "What's the missing letter in this sequence?A - Y - C - W - E - U - G - ?",
    a: "H",
    b: "S",
    c: "A",
    d: "T",
    correct: "b",
  },
  {
    question: "Which of these words is most similar to "trustworthy"?",
    a: "Resolute",
    b: "Tenacity",
    c: "Reliable",
    d: "Certain",
    correct: "c",
  },
  {
    question: "You flip a coin ten times in a row. It comes up "heads" every time. You flip it one more time. What is the probability that it will come up "heads" again?",
    a: "50%",
    b: "90%",
    c: "25%",
    d: "75%",
    correct: "a",
  },
  {
    question: "Forest is to tree as tree is to?:",
    a: "Plant",
    b: "Leaf",
    c: "Branch",
    d: "Grass",
    correct: "b",
  },
   {
    question: "If Sally's daughter is my son's mother, what relation am I to Sally? (I'm male)",
    a: "Son",
    b: "Son-in-low",
    c: "Brother-in-low",
    d: "Father",
    correct: "b",
  },
   {
    question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    a: "100 minutes",
    b: "5 minutes",
    c: "50 minutes",
    ,
    correct: "b",
  },
   {
    question: "Forest is to tree as tree is to?:",
    a: "Plant",
    b: "Leaf",
    c: "Branch",
    d: "Grass",
    correct: "b",
  },
   {
    question: "The day after the day after tomorrow is four days before Monday. What day is it today?",
    a: "Monday",
    b: "Tuesday",
    c: "Wednesday",
    d: "Thursday",
    correct: "a",
  },
   {
    question: "10 people shake hands with 9 others, so 90 handshakes. However, there's two people in each so you're counting each one twice. The answer is therefore 45.",
    a: "100",
    b: "90",
    c: "45",
    d: "50",
    correct: "c",
  },
   {
    question: `In a lake, there is a patch of lily pads. Every day, the patch doubles in size.
    If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?`,
    a: "Plant",
    b: "Leaf",
    c: "Branch",
    d: "Grass",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
