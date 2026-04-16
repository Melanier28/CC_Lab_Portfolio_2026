document.addEventListener("DOMContentLoaded", () => {

  const quizData = [
    {
      type: "multiple",
      question: "How many hours a day are you on your phone?",
      options: ["1-2", "3-5", "6-8", "9+"],
      answer: 3
    },
    {
      type: "multiple",
      question: "How often do you open TikTok/Instagram without thinking?",
      options: ["Rarely", "Sometimes", "Often", "Constantly"],
      answer: 3
    },
    {
      type: "fill",
      question: "I wish I had a free ______",
      answer: "bag of chips"
    },
    {
      type: "fill",
      question: "Madame Morrible ___ flip it around _____",
      answer: "mm wicked witch"
    },
    {
      type: "image-fill",
      question: "What does he say here?",
      img: "justin.jpg",
      answer: "its not clocking to you"
    },
    {
      type: "image-mc",
      question: "Pick the correct meme",
      img: "elijah.jpg",
      options: [
        "I am Frodo",
        "When will you wear wigs?",
        "The ring is mine",
        "Hobbit energy"
      ],
      answer: 1
    },
    {
      type: "image-fill",
      question: "you're what?",
      img: "kendall.jpg",
      answer: "youre cute jeans"
    },
    {
      type: "image-fill",
      question: "you gotta go in the gym eh, sorry...",
      img: "nepal.jpg",
      answer: "nepal"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const quiz = document.getElementById("quiz");
  const nextBtn = document.getElementById("nextBtn");
  const startBtn = document.getElementById("startBtn");

  startBtn.onclick = () => {
    startBtn.style.display = "none";
    nextBtn.style.display = "block";
    loadQuestion();
  };

  function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  }

  function loadQuestion() {
    const q = quizData[currentQuestion];
    quiz.innerHTML = "";

    const questionEl = document.createElement("h2");
    questionEl.innerText = q.question;
    quiz.appendChild(questionEl);

    if (q.img) {
      const img = document.createElement("img");
      img.src = q.img;
      quiz.appendChild(img);
    }

    nextBtn.onclick = null;

    if (q.type === "multiple" || q.type === "image-mc") {
      nextBtn.style.display = "none";

      q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
          if (index === q.answer) score++;
          nextQuestion();
        };
        quiz.appendChild(btn);
      });
    }

    if (q.type === "fill" || q.type === "image-fill") {
      const input = document.createElement("input");
      input.placeholder = "Type your answer...";
      quiz.appendChild(input);

      nextBtn.onclick = () => {
        const userAnswer = normalize(input.value);
        const correctAnswer = normalize(q.answer);

        if (userAnswer.includes(correctAnswer)) {
          score++;
        }

        nextQuestion();
      };
    }
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    quiz.innerHTML = "";
    nextBtn.style.display = "none";

    let resultText = "";

    if (score <= 2) {
      resultText = "You are barely online. Respect.";
    } else if (score <= 5) {
      resultText = "You are online… but still functional.";
    } else {
      resultText = "You are chronically online. There is no escape.";
    }

    document.getElementById("result").innerText =
      `Score: ${score}/${quizData.length}\n${resultText}`;
  }

});
