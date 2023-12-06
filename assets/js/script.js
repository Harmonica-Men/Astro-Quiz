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
  },
  {
    question: "Of the following four times, which one best represents the time it takes energy generated in the core of the sun to reach the surface of the sun and be radiated?",
    choices: ["Three minutes", "Thirty days", "One thousand years", "One million years"],
    answer: "ONE MILLION YEARS"
  },
  {
    question: "The sunspot cycle is:",
    choices: ["3 years", "11 years", "26 years", "49 years"],
    answer: "11 YEARS"
  },



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
                alert(`The correct answer was: ${quizData[currentQuestion].answer}`);

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

              // alert(`Game Over`);  
                    
              currentQuestion = 0;
              correctAnswers = 0;
              inCorrectAnswers = 0;
              unknownAnswers = 0;

            } 
  else {
    showQuestion();
  
  }
  showScore();
  
}


function showQuestion() {
  const quizItem = quizData[currentQuestion];
  // questionElement.textContent = quizItem.question; 


  // Get the element by its ID
let messageQuestionElement = document.getElementById('messageQuestion');
let optionAelement = document.getElementById('optionA');
let optionBelement = document.getElementById('optionB');
let optionCelement = document.getElementById('optionC');
let optionDelement = document.getElementById('optionD');



if (currentQuestion < quizData.length) {
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
  document.getElementById("maxQuestion").innerText = quizData.length;
  document.getElementById("question").innerText = currentQuestion + 1;
  
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
   
  

  // Fades after 5 seconds for both correct and wrong answers
  setTimeout(function() {
    resultDiv.style.opacity = '0';

    // After 5 seconds, clear the innerHTML and bring opacity back to normal
    setTimeout(function() {
      resultDiv.innerHTML = ''; // Clears innerHTML
      resultDiv.style.opacity = '1';
    }, 1000); // After the fade-out (1 second transition), set opacity to 1
  }, 1000); // Fades after 5 seconds (5000 milliseconds)
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

    answerCorrect(true);
    correctAnswers++;


     

  } else {

//    document.getElementById("optionA").innerText = 'fsdfqsdfqds';
    // resultDiv.innerHTML = '👎 Wrong answer. Try again!';

    // alert(`Wrong Answer, the correct answer was: ${correctAnswer}`);

    
    answerCorrect(false);
    inCorrectAnswers++;

    

  }

  if (currentQuestion <  quizData.length) {
    currentQuestion++;
  } 
  
}

