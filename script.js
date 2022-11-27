let timeEl = document.querySelector("p.time");
let secondsLeft = 75;
let scoreEl = document.querySelector("#score")

const introEl = document.querySelector("#introduction");

const questionsEl = document.querySelector("Questions")

let questionEl = document.querySelector("#Question");

let questionCount = 0;

const finalEl = document.querySelector("#Final");

let initialsInput = document.querySelector("#Initials");

const highscoresEl = document.querySelector("#High-Scores");

let scoreListEl = document.querySelector("#Scores-List");

let scoreList = [];

const startBtn = document.querySelector("#Start");
const ansBtn = document.querySelectorAll("button.ansBtn")
const ans1Btn = document.querySelector("#Answer1");
const ans2Btn = document.querySelector("#Answer2");
const ans3Btn = document.querySelector("#Answer3");
const ans4Btn = document.querySelector("#Answer4");
const submitScrBtn = document.querySelector("#Submit-Score");
const goBackBtn = document.querySelector("#GoBack");
const clearScrBtn = document.querySelector("#Clear-Scores");
const viewScrBtn = document.querySelector("#View-Scores");

const questions = [
    {
        question: "Questions 1 : Commonly used data types DO NOT include",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {  
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {

        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {

        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
        

];




