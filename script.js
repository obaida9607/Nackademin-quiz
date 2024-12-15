// Questions and answers
const correctAnswers = {
    q1: "B",
    q2: "A" ,
    q3:"B" ,
    q4:"D" ,
    q5:"C" ,
    q6:"C" ,
    q7:"B" , 
    q8:"D" ,
    q9:"C" ,
    q10:"C" ,
    q11:"A" ,
    q12:"B" , 
    q13:"D" ,
    q14:"C" ,
    q15:"D" ,
  };
  
  
  document.getElementById("submitQuiz").addEventListener("click", () => {
    const form = document.getElementById("quizForm");
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultMessage = "";
    let questionResults = "";
  
    
    for (let question in correctAnswers) {
      const userAnswer = form[question];
      const userValues = Array.isArray(correctAnswers[question]) 
        ? [...userAnswer].filter((input) => input.checked).map((input) => input.value) 
        : form[question].value;
  
      if (
        Array.isArray(correctAnswers[question])
          ? JSON.stringify(userValues.sort()) === JSON.stringify(correctAnswers[question].sort())
          : userValues === correctAnswers[question]
      ) {
        score++;
        questionResults += `<p>Question ${question}: Correct ✅</p>`;
      } else {
        questionResults += `<p>Question ${question}: Incorrect ❌</p>`;
      }
    }
  
    
    const percentage = (score / totalQuestions) * 100;
  
   
    if (percentage < 50) {
      resultMessage = `<p class="result red">Underkänt (${percentage.toFixed(0)}%)</p>`;
    } else if (percentage <= 75) {
      resultMessage = `<p class="result yellow">Bra (${percentage.toFixed(0)}%)</p>`;
    } else {
      resultMessage = `<p class="result green">Riktigt bra jobbat (${percentage.toFixed(0)}%)</p>`;
    }
  
    
    document.getElementById("result").innerHTML = `
      ${resultMessage}
      <h3>Question Feedback</h3>
      ${questionResults}
    `;
  });
  