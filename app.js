
var quizData = [
    {
    question: "What is JavaScript?",
    a: "client side",
    b: "html",
    c: "server lang",
    d: "machine languge",
    correct: "a",
},
    {
    question: "What is the full meaning of CSS?",
    a: "Cascading Style Server",
    b: "Cascade Styling Surface",
    c: "Cascading Surface Sheet",
    d: "Cascading Style Sheets",
    correct: "d",
},
    {
    question: "What is the most popular programming language in 2022?",
    a: "Java",
    b: "PHP",
    c: "html",
    d: "JavaScript",
    correct: "d",
    },
    {
    question: "Which company developed JavaScript??",
    a: "Netscape .",
    b: "goolge",
    c: "mete company",
    d: "spice X",
    correct: "a",
    },
    {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Stylesheet",
    c: "JavaScript Object Notation",
    d: "Hyper Markup Language",
    correct: "a",
    },
    {
    question: "What year was JavaScript launched?",
    a: "1998",
    b: "1993",
    c: "1995",
    d: "2000",
    correct: "c",
    },
{
    question: "All these are Server Side Language except?",
    a: "HTML",
    b: "PHP",
    c: "Node.js",
    d: "Ruby on rails",
    correct: "a",
},
{
    question: "All these are JavaScript Framework except?",
    a: "Laravel",
    b: "React.js",
    c: "Node.js",
    d: "Vue.js",
    correct: "a",
}
];
  
var score=0;
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var nextButton = document.getElementById("submit");

var currentQuiz = 0;

loadQuiz();


function loadQuiz() {
  
deselectAnswer();

var currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question; 
a_text.innerHTML = currentQuizData.a; 
b_text.innerHTML = currentQuizData.b; 
c_text.innerHTML = currentQuizData.c; 
d_text.innerHTML = currentQuizData.d; 
}


function deselectAnswer() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
 });
}
function getSelected() {
    let answer;
  
answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
        answer = answerEl.id;
    }
});
  
return answer;
}
function nextButtonfunc() {
    let answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
    }
}
    
currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      loadQuiz();
} else {
      quiz.innerHTML = `
      <h2>You answered ${score} out of ${quizData.length} correctly.</h2>
       <button onclick="location.reload()">Retake Quiz!</button>`;
    }
};
  
const firebaseConfig = {
    apiKey: "AIzaSyCaGleTSACqfIDlMZetUFW7aChK0plzk84",
    authDomain: "quizapp-72a4b.firebaseapp.com",
    databaseURL: "https://quizapp-72a4b-default-rtdb.firebaseio.com",
    projectId: "quizapp-72a4b",
    storageBucket: "quizapp-72a4b.appspot.com",
    messagingSenderId: "71728204903",
    appId: "1:71728204903:web:f54e0d5c1c9b45614458c2"
  };
   var frb = firebase.initializeApp(firebaseConfig)

   console.log(frb)