// Variables to keep track of quiz progress and scores
let currentQuestion = 0;
let correctAnswers = 0;
let inCorrectAnswers = 0;
let unknownAnswers = 0;

// DOM element references
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');
const answerElement = document.getElementById('answer');
const optionAelement = document.getElementById('optionA');
const optionBelement = document.getElementById('optionB');
const optionCelement = document.getElementById('optionC');
const optionDelement = document.getElementById('optionD'); 

// Array containing quiz data (questions, choices, and answers)
const quizData = [
   // Questions and answers data here
  {
    question: "1 The largest circular storm in our solar system is on the surface of which of the following planets?",
    choices: ["Jupiter", "Venus", "Uranus", "Earth"],
    answer: "JUPITER"
  },
  {
    question: "2 The rapidly moving stream of charged particles that is being driven away from the sun is known as what?",
    choices: ["Star Dust", "Charged Particles", "Solar Wind", "Cosmic Rays"],
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
];

// booting up the DOM then run the Quiz
// button elements A,B,C,D for event handelers to listen
// Function to initialize and start the quiz on DOM content load
document.addEventListener("DOMContentLoaded", function() 
{
  // Event listeners for quiz buttons
  let buttons = document.getElementsByTagName("button");
  // button into the array
  for (let button of buttons) 
  {
    button.addEventListener("click", function() 
     // Logic for handling user interactions and quiz progress
    {
      if (this.getAttribute("data-type") === "X") 
      {
        if (currentQuestion > -1) {
          unknownAnswers++;
        }
        if (currentQuestion <= quizData.length - 1 && currentQuestion > -1) {
          alert(`The correct answer was: ${quizData[currentQuestion].answer}`);
        } else {
          correctAnswers = 0; // initial state of the counters (@begining)
          inCorrectAnswers = 0;
          unknownAnswers = 0; 
        }
      } else document.getElementById("next-question").innerText = 'New Game ?'; {
        let choise = this.getAttribute("data-type");
        
        if (currentQuestion <= quizData.length - 1) {
          if (currentQuestion < 0) {
            currentQuestion = 0;
          } else {
            if (choise === 'X') {
              if (currentQuestion >= quizData.length - 1) {
                document.getElementById("incorrect").innerText = currentQuestion + 1;
                currentQuestion = -1; // control value to -1 
              } else currentQuestion++; // flow counter
            } else checkAnswer(choise);
           }
          } else {
          if (currentQuestion > quizData.length -1) {
            currentQuestion = -1; // control value to -1
           }
          }
        runQuiz();
        }
    });
  }
  runQuiz();
});

/**
 * Main loop controlling the quiz flow
**/
function runQuiz() 
{  
  // Functions to display questions, results, and scores
  numberOfQuestions();
  if (currentQuestion <= quizData.length && currentQuestion > -1) {
    showQuestion();
  } else {
    showResults();
  } 
  showScore(); 
}

// Function to display the number of questions
function numberOfQuestions()
{
  document.getElementById("maxQuestion").innerText = quizData.length;
  if (currentQuestion <= 0) {
    document.getElementById("question").innerText = '1';
  } else {
    document.getElementById("question").innerText = currentQuestion + 1;
  }
}

// Loop Element function to simplify repative code
function loopElements(displayVar) {
  try {
  let elements = [optionAelement, optionBelement, optionCelement, optionDelement];
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = displayVar;
  }
  }
  catch(error) {
    // for debuging perposes only
    document.getElementById('question').innerHTML = error.messageQuestionElement; 
  }
}

// Function to display results when the quiz ends
function showResults() {
  let msgQuestion = document.getElementById('messageQuestion');

  msgQuestion.innerHTML = 'Game Over - Press Button to Continue';
  document.getElementById('question').innerText = quizData.length;
  loopElements('none');
}

// Function to display a single question
function showQuestion() {
  const quizItem = quizData[currentQuestion];
  let messageQuestionElement = document.getElementById('messageQuestion');
  let quizChoices = quizItem.choices; //  quizItem choices contains the choices
  let elements = [optionAelement, optionBelement, optionCelement, optionDelement];

  // Loop through the elements array and set textContent from quizChoices
  loopElements('initial');
  document.getElementById("next-question").innerText = 'next question';

  if (currentQuestion < quizData.length && currentQuestion > -1) {
      messageQuestionElement.textContent =  quizItem.question;
      for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = quizChoices[i];
      }
    }
  }

// Function to display the score
function showScore() {
  document.getElementById("correct").innerText = correctAnswers;
  document.getElementById("incorrect").innerText = inCorrectAnswers;
  document.getElementById("unknown").innerText = unknownAnswers;
}

// Functions related to handling user answers and providing feedback
function answerCorrect(answer) {
   // Function to display feedback for correct and incorrect answers
  var resultDiv = document.getElementById('result');
  if (answer === true) {
    resultDiv.innerHTML = '👍 Correct!';
  } else {
    // console.log(currentQuestion);
     alert(` 👎 Wrong answer!\nThe correct answer was: ${quizData[currentQuestion].answer}`);
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

// Function to compare user's answer with the correct answer
function checkAnswer(userEvent) {
let userAnswer = "";
const correctAnswer = quizData[currentQuestion].answer;

function compareAnswerCounter(counter) {
  if (counter > quizData.length -1 || currentQuestion > quizData.length -1) 
    {
    currentQuestion = -1; 
    }
}

if (currentQuestion >= 0) {
  switch (userEvent) {
    case "A": 
      userAnswer = quizData[currentQuestion].choices[0];
      break;
    case "B": 
      userAnswer = quizData[currentQuestion].choices[1];
      break;
    case "C": 
      userAnswer = quizData[currentQuestion].choices[2];
      break;
    case "D": 
      userAnswer = quizData[currentQuestion].choices[3];
      break;
    }

  userAnswer = userAnswer.toUpperCase();

  if (userAnswer === correctAnswer) 
  {    
    answerCorrect(true);
    correctAnswers++;
    currentQuestion++;  
    compareAnswerCounter(correctAnswers);
  } else {
    answerCorrect(false);
    inCorrectAnswers++;
    currentQuestion++;  
    compareAnswerCounter(inCorrectAnswers);    
   } 
  }
}