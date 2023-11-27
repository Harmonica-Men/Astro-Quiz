// When the document loads a question is generated immediately

var currentQuestion = 0;
var correctAnswers = 0;
var inCorrectAnswers = 0;
var unknownAnswers = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');
const answerElement = document.getElementById('answer');

const quizData = [
  {
    question: "The largest circular storm in our solar system is on the surface of which of the following planets?",
    choices: ["Jupiter", "Venus", "Uranus", "Earth"],
    answer: "JUPITER"
  },
  {
    question: "The rapidly moving stream of charged particles that is being driven away from the sun is known as what?",
    choices: ["Star Dust", "Chared Particles", "Solar Wind", "Cosmic Rays"],
    answer: "SOLAR WIND"
  },
  {
    question: "The biggest asteroid known is:",
    choices: ["Vesta", "Icarus", "Ceres", "Eros"],
    answer: "CERES"
  },
  {
    question: "Rounded to the nearest day, the Mercurian year is equal to:",
    choices: ["111 days", "88 days", "50 days", "25 days"],
    answer: "88 DAYS"
  },
  {
    question: "One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:",
    choices: ["Callisto", "Venus", "Titan", "Mars"],
    answer: "MARS"
  }
  // Add more quizData here
];

// booting up the DOM then run the Quiz
// button elements YES - NO for event handelers to listen

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() 
      {
          if (this.getAttribute("data-type") === "X") 
          {
              unknownAnswers++;
              if (currentQuestion <=  quizData.length -1) 
              {
                currentQuestion++;
                runQuiz();
              } 
          } 
          else 
          {
            let choise = this.getAttribute("data-type");
            checkAnswer(choise);
            runQuiz();
          }
      });
  }
  runQuiz();
});



/**
 * Main loop
 */
function runQuiz() {
  console.log(`current question: ${currentQuestion}`);
  if (currentQuestion >= quizData.length) 
            {
              alert(`Game Over - Again?`);  
                    
              currentQuestion = 0;
              correctAnswers = 0;
              inCorrectAnswers = 0;
              unknownAnswers = 0;

            } 
  showQuestion();
  showScore();
}


function showQuestion() {
  const quizItem = quizData[currentQuestion];
  // questionElement.textContent = quizItem.question; 


  // Get the element by its ID
let messageQuestionElement = document.getElementById('messageQuestion');
let option0Element = document.getElementById('option0');
let option1Element = document.getElementById('option1');
let option2Element = document.getElementById('option2');
let option3Element = document.getElementById('option3');

if (currentQuestion < quizData.length) {
    messageQuestionElement.textContent =  quizItem.question;
    option0Element.textContent = quizItem.choices[0];
    option1Element.textContent = quizItem.choices[1];
    option2Element.textContent = quizItem.choices[2];
    option3Element.textContent = quizItem.choices[3]; 
  }
}

function showScore() {
  document.getElementById("correct").innerText = correctAnswers;
  document.getElementById("incorrect").innerText = inCorrectAnswers;
  document.getElementById("unknown").innerText = unknownAnswers;
  document.getElementById("maxQuestion").innerText = quizData.length;
  document.getElementById("question").innerText = currentQuestion + 1;
}

function checkAnswer(userEvent) {
  
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

  if (userAnswer === correctAnswer) {
    correctAnswers++;
  } else {
    inCorrectAnswers++;
  }

  if (currentQuestion <  quizData.length) {
    currentQuestion++;
  } 
  
}

