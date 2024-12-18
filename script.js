
const questions = document.querySelectorAll(".question");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const toggleThemeButton = document.getElementById("toggleTheme");


let currentQuestionIndex = 0;
let correctAnswers = 0;


function showQuestion(index) {
    questions.forEach((question, i) => {
        question.style.display = i === index ? "block" : "none";
    });
}


function handleAnswer(event) {
    const isCorrect = event.target.dataset.correct === "true";

    if (isCorrect) {
        correctAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}


function showResult() {
    questions.forEach((q) => (q.style.display = "none")); 
    resultContainer.style.display = "block"; 

    const totalQuestions = questions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;

    if (percentage < 50) {
        resultText.textContent = `Du fick ${correctAnswers} av ${totalQuestions} rätt (${Math.round(percentage)}%). Underkänt.`;
        resultText.style.color = "red";
    } else if (percentage <= 75) {
        resultText.textContent = `Du fick ${correctAnswers} av ${totalQuestions} rätt (${Math.round(percentage)}%). Bra!`;
        resultText.style.color = "orange";
    } else {
        resultText.textContent = `Du fick ${correctAnswers} av ${totalQuestions} rätt (${Math.round(percentage)}%). Riktigt bra jobbat!`;
        resultText.style.color = "green";
    }
}


toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


document.querySelectorAll(".answer-btn").forEach((button) => {
    button.addEventListener("click", handleAnswer);
});


showQuestion(currentQuestionIndex);

