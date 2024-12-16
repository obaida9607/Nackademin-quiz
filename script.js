const questions = [
  { question: "Fc barcelona är en spansk fotboll klubb.", answer: "Sant" },
  { question: "Saudi Arabi var första landet som vinner VM.", answer: "Falskt" },
  { question: "Lionel Messi började sin karriär i Realmadrid.", answer: "Falskt" },
  { question: "Zlatan Ibrahimovic har spelat för 10 klubbar.", answer: "Sant" },
  { question: "Europamästerskapet spelas en gång varje 4 år.", answer: "Sant" },
  { question: "Westham är klubben med flest primer league titlar .", answer: "Falskt" },
  { question: "Stockholm derby spelas mellan Hammarby och Malmö FF.", answer: "Falskt" },
  { question: "Bayern Munchen är klubben med flest CL titlar.", answer: "Falskt" },
  { question: "Thiago Alcantara är en fotboll spelare som presenterar Brasilens landslag.", answer: "Falskt" },
  { question: "Sverige lyckades med att nå kvartsfinalen i VM 2018.", answer: "Sant" },
  { question: "Fotboll uppfans för första gången i Kina 2500 år f.kr.", answer: "Sant" },
  { question: "Fotboll i USA kallas för (Football).", answer: "Falskt" },
];

let currentQuestion = 0;
let correctAnswers = 0;

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");

function loadQuestion() {
  if (currentQuestion < questions.length) {
    quizContainer.innerHTML = `
      <p>${questions[currentQuestion].question}</p>
      <button onclick="checkAnswer('Sant')">Sant</button>
      <button onclick="checkAnswer('Falskt')">Falskt</button>
    `;
  } else {
    showResult();
  }
}


function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    correctAnswers++;
  }
  currentQuestion++;
  loadQuestion();
}


function showResult() {
  const percentage = (correctAnswers / questions.length) * 100;
  let feedback = "";
  let color = "";

  if (percentage < 50) {
    feedback = "Underkänt";
    color = "red";
  } else if (percentage <= 75) {
    feedback = "Bra";
    color = "orange";
  } else {
    feedback = "Riktigt bra jobbat";
    color = "green";
  }

  resultContainer.innerHTML = `
    <h2 style="color: ${color}">${feedback}</h2>
    <p>Du fick ${correctAnswers} av ${questions.length} rätt!</p>
  `;
  quizContainer.innerHTML = "";
}


document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});


loadQuestion();
