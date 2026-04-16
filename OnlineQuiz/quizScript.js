window.onload = () => {

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
      type: "multiple",
      question: "I wish I had a free ______",
      img: null,
      options: [
        "Bag of chipsuhh",
        "Burgerrrr",
        "Matchaaa",
        "Bag of beans"
      ],
      answer: 0
    },

    {
      type: "fill",
      question: "Madame Morrible ___ flip it around _____",
      answer: "mm wicked witch"
    },

    {
      type: "multiple",
      question: "What does he say here?",
      img: "justin.jpg",
      options: [
        "It's not clocking to you",
        "You're not understanding what I'm saying",
        "I don't think you're hearing me",
        "It's giving confused energy"
      ],
      answer: 0
    },

    {
      type: "multiple",
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
      type: "multiple",
      question: "you're what?",
      img: "kendall.jpg",
      options: [
        "You're kinda cute jeans",
        "You're cute jeans",
        "You're cute genes",
        "You're cute, I guess"
      ],
      answer: 1
    },

    {
      type: "multiple",
      question: "you gotta go in the gym eh, sorry...",
      img: "nepal.jpg",
      options: [
        "No no please",
        "Sorry for now girl",
        "Nepal",
        "Need more time"
      ],
      answer: 2
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const quiz = document.getElementById("quiz");
  const nextBtn = document.getElementById("nextBtn");
  const startBtn = document.getElementById("startBtn");
  const result = document.getElementById("result");

  if (!startBtn || !nextBtn || !quiz) {
    console.error("Missing HTML elements");
    return;
  }

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
    nextBtn.style.display = "none";

    // ONLY multiple choice now
    if (q.type === "multiple") {

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

    // fill input questions
    if (q.type === "fill") {

      const input = document.createElement("input");
      input.placeholder = "Type your answer...";
      quiz.appendChild(input);

      nextBtn.style.display = "block";

      nextBtn.onclick = () => {
        const user = normalize(input.value);
        const correct = normalize(q.answer);

        if (user.includes(correct)) {
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

    result.innerText =
      `Score: ${score}/${quizData.length}\n${resultText}`;
  }

};
