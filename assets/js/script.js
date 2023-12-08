// When the document loads a question is generated immediately

let currentQuestion = 0;
let correctAnswers = 0;
let inCorrectAnswers = 0;
let unknownAnswers = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');
const answerElement = document.getElementById('answer');

const quizData = [
  {
    question: "1 The largest circular storm in our solar system is on the surface of which of the following planets?",
    choices: ["Jupiter", "Venus", "Uranus", "Earth"],
    answer: "JUPITER"
  },
  {
    question: "2 The rapidly moving stream of charged particles that is being driven away from the sun is known as what?",
    choices: ["Star Dust", "Chared Particles", "Solar Wind", "Cosmic Rays"],
    answer: "SOLAR WIND"
  },
  {
    question: "3 The biggest asteroid known is:",
    choices: ["Vesta", "Icarus", "Ceres", "Eros"],
    answer: "CERES"
  },
  {
    question: "4 Rounded to the nearest day, the Mercurian year is equal to:",
    choices: ["111 days", "88 days", "50 days", "25 days"],
    answer: "88 DAYS"
  },
  {
    question: "5 One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:",
    choices: ["Callisto", "Venus", "Titan", "Mars"],
    answer: "MARS"
  },
  {
    question: "6 Of the following four times, which one best represents the time it takes energy generated in the core of the sun to reach the surface of the sun and be radiated?",
    choices: ["Three minutes", "Thirty days", "One thousand years", "One million years"],
    answer: "ONE MILLION YEARS"
  },
  {
    question: "7 The sunspot cycle is:",
    choices: ["3 years", "11 years", "26 years", "49 years"],
    answer: "11 YEARS"
  },



  // Add more quizData here
];

// booting up the DOM then run the Quiz
// button elements A,B,C,D for event handelers to listen

document.addEventListener("DOMContentLoaded", function() 
{
  
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) 
  {
    button.addEventListener("click", function() 
    {
      if (this.getAttribute("data-type") === "X") 
      {
        if (currentQuestion > -1) 
        {
          unknownAnswers++;
        }
        if (currentQuestion <= quizData.length - 1 && currentQuestion > -1) 
        {
          alert(`The correct answer was: ${quizData[currentQuestion].answer}`);
          currentQuestion++;
        } 
        else
        {
          correctAnswers = 0;
          inCorrectAnswers = 0;
          unknownAnswers = 0; 
        }
      } 
      else document.getElementById("next-question").innerText = 'New Game ?';
      {
        let choise = this.getAttribute("data-type");
        if (currentQuestion <= quizData.length - 1)
         {
          if (currentQuestion < 0) 
          {
            currentQuestion = 0;
          }
          else
          {
            checkAnswer(choise);
          }
         }
         else
         {
           if (currentQuestion > quizData.length -1) 
           {
            currentQuestion = -1; 
             }
         }
         runQuiz();
      }
    });
  }
  runQuiz();
});


/**
 * Main loop
 */
function runQuiz() 
{  
  numberOfQuestions();
  if (currentQuestion <= quizData.length && currentQuestion > -1)
  {
    showQuestion();
  } 
  else
  {
    showResults();
  } 
  showScore(); 
}

function numberOfQuestions()
{
  document.getElementById("maxQuestion").innerText = quizData.length;
  if (currentQuestion <= 0)
  {
    document.getElementById("question").innerText = '1';
  }
  else
  {
    document.getElementById("question").innerText = currentQuestion + 1;
  }
}

function showResults() {
  let msgQuestion = document.getElementById('messageQuestion');
  msgQuestion.innerHTML = 'Game Over - Press Button to Continue';
  document.getElementById('question').innerText = quizData.length;
  document.getElementById('optionA').style.display = 'none';
  document.getElementById('optionB').style.display = 'none';
  document.getElementById('optionC').style.display = 'none';
  document.getElementById('optionD').style.display = 'none';
}


function showQuestion() {
  const quizItem = quizData[currentQuestion];

  let messageQuestionElement = document.getElementById('messageQuestion');
  let optionAelement = document.getElementById('optionA');
  let optionBelement = document.getElementById('optionB');
  let optionCelement = document.getElementById('optionC');
  let optionDelement = document.getElementById('optionD');

  document.getElementById('optionA').style.display = 'initial';
  document.getElementById('optionB').style.display = 'initial';
  document.getElementById('optionC').style.display = 'initial';
  document.getElementById('optionD').style.display = 'initial';

  document.getElementById("next-question").innerText = 'next question';

  if (currentQuestion < quizData.length && currentQuestion > -1) {
      messageQuestionElement.textContent =  quizItem.question;
      optionAelement.textContent = quizItem.choices[0];
      optionBelement.textContent = quizItem.choices[1];
      optionCelement.textContent = quizItem.choices[2];
      optionDelement.textContent = quizItem.choices[3]; 
    }
  }

function showScore() {
  document.getElementById("correct").innerText = correctAnswers;
  document.getElementById("incorrect").innerText = inCorrectAnswers;
  document.getElementById("unknown").innerText = unknownAnswers;
}


function answerCorrect(answer) {
  var resultDiv = document.getElementById('result');
  if (answer === true) {
    resultDiv.innerHTML = '👍 Correct!';
  }
  else
  {
    resultDiv.innerHTML = '👎 Wrong answer';
  }
     // Fades after 1 seconds for both correct and wrong answers
  setTimeout(function() {
    resultDiv.style.opacity = '0';
    // After 1 seconds, clear the innerHTML and bring opacity back to normal
    setTimeout(function() {
      resultDiv.innerHTML = ''; // Clears innerHTML
      resultDiv.style.opacity = '1';
    }, 1000); // After the fade-out (1 second transition), set opacity to 1
  }, 1000); // Fades after 1 seconds (1000 milliseconds)
}


function checkAnswer(userEvent) {
  let userAnswer = "";
  if (currentQuestion >= 0) {
  const correctAnswer = quizData[currentQuestion].answer;

    if (userEvent === "A") {
      userAnswer = quizData[currentQuestion].choices[0];
    }
    if (userEvent === "B") {
      userAnswer = quizData[currentQuestion].choices[1];
    }
    if (userEvent === "C") {
      userAnswer = quizData[currentQuestion].choices[2];
    }
    if (userEvent === "D") {
      userAnswer = quizData[currentQuestion].choices[3];
    }
    userAnswer = userAnswer.toUpperCase();
  if (userAnswer === correctAnswer) 
  {    
    answerCorrect(true);
    correctAnswers++;
    currentQuestion++;  
    if (correctAnswers > quizData.length -1 || currentQuestion > quizData.length -1) 
           {
            currentQuestion = -1; 
           }
  } 
  else 
  {
    answerCorrect(false);
    inCorrectAnswers++;
    currentQuestion++;  
    if (inCorrectAnswers > quizData.length -1 || currentQuestion > quizData.length -1) 
           {
            currentQuestion = -1; 
           }
  } 
  }
}

