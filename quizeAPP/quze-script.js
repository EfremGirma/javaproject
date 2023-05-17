var quiz = {
 
  data: [
    {
      q: "What's the missing letter in this sequence?A - Y - C - W - E - U - G - ?",
      o: [
        "H",
        "S",
        "A",
        "T",
      ],
      a: "b",
    },
    {
      q: "Which of these words is most similar to 'trustworthy'?",
      o: [
        "Resolute",
        "Tenacity",
        "Reliable",
        "Certain",
      ],
      a: "c",
    },
    {
      q: "You flip a coin ten times in a row. It comes up ''heads'' every time. You flip it one more time. What is the probability that it will come up ''heads'' again?",
      o: [
        "50%",
        "90%",
        "25%",
        "75%",
      ],
      a: "a",
    },
    {
      q: "Forest is to tree as tree is to?:",
      o: [
        "Plant",
        "Leaf",
        "Branch",
        "Grass",
      ],
      a: "b",
    },
    {
      q: "If Sally's daughter is my son's mother, what relation am I to Sally? (I'm male)",
      o: [
        "Son",
        "Son-in-low",
        "Brother-in-low",
        "Father",
      ],
      a: "b",
    },
    {
      q: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
      o: [
        "100 minutes",
        "5 minutes",
        "50 minutes",
      ],
      a: "b"
    },
    {
      q: "Forest is to tree as tree is to?:",
      o: [
        "Plant",
        "Leaf",
        "Branch",
        "Grass",
      ],
      a: "b",
    },
    {
      q: "The day after the day after tomorrow is four days before Monday. What day is it today?",
      o: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      a: "a"
    },
    {
      q: "10 people shake hands with 9 others, so 90 handshakes. However, there's two people in each so you're counting each one twice. The answer is therefore 45.",
      o: ["100",
        "90",
        "45",
        "50",
      ],
      a: "c"
    },
    {
      q: `In a lake, there is a patch of lily pads. Every day, the patch doubles in size.
    If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?`,
      o: [
        "Plant",
        "Leaf",
        "Branch",
        "Grass",
      ],
      a: "b"
    },
  ],


  hWrap: null, 
  hQn: null, 
  hAns: null,


  now: 0, 
  score: 0, 

 
  init: () => {
  
    quiz.hWrap = document.getElementById("quizWrap");

   
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);


    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

  
    quiz.draw();
  },

  
  draw: () => {
  
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

  
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

 
  select: (option) => {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

   
    let c = option.dataset.idx == quiz.data[quiz.now].a;
    if (c) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

 
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset: () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
