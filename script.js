//Variables for document page
var containerOpenerEl = document.getElementById("opener-container");
    var containerQuizEl = document.getElementById("quiz-container");
    var containerScoreSignEl = document.getElementById("score-sign")
    var initialsForms = document.getElementById("initials-form")
    var containerEndEl = document.getElementById("final-container")
    var containerHighScoresEl = document.getElementById ("high-score-container")
    var correctEl = document.getElementById("correct")
    var listHighScoreEl = document.getElementById("high-score-list")
    var incorrectEl = document.getElementById("incorrect")
    var btnStartEl = document.querySelector("#begin-game");
    var btnClearScoresEl = document.querySelector("#clear-high-scores")
    var btnGoBackEl = document.querySelector("#go-back")
        //questions/answers domain
    var questionEl = document.getElementById("question")
    var answerbuttonsEl = document.getElementById("answer-buttons")
    var stopwatchEl = document.querySelector("#stopwatch");
    var score = 0;
    var timeleft;
    var gameover
    stopwatchEl.innerText = 0;

    var HighScores = [];

    var arrayShuffledQuestions
    var QuestionIndex = 0
     // The questions for quiz form.

    var questions = [
     {
        q: ' Commonly used data types DO NOT include:',
        a: '2. booleans',
            choices: [{ choice: '1. strings' }, { choice: '2. booleans' }, { choice: '3. alerts' }, { choice: '4. numbers' }]
    },
    {
        q: 'The condition in an if / else statement is enclosed within ____.',
        a: '1. quotes',
        choices: [{ choice: '1. quotes' }, { choice: '2. curly brackets' }, { choice: '3. parentheses' }, { choice: '4. square brackets' }]
    },
    {
        q: 'Arrays in Javascript can be used to store ____.',
        a: '3. booleans',
        choices: [{ choice: '1. numbers and strings' }, { choice: '2. other arrays ' }, { choice: '3. booleans' }, { choice: '4. all of the above' }]
    },
    {
        q: 'String values must be enclosed within ____ when being assigned to variables.',
        a: '2. curly brackets',
        choices: [{ choice: '1. commmas' }, { choice: '2. curly brackets' }, { choice: '3. quotes' }, { choice: '4. parentheses' }]
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: '3. for loops',
        choices: [{ choice: '1. Javascript' }, { choice: '2. terminal/bash' }, { choice: '3. for loops' }, { choice: '4. console.log' }] 
    },
    
];

        // Return button hit on page
    var renderStartPage = function () {
    containerHighScoresEl.classList.add("conceal")
    containerHighScoresEl.classList.remove("appear")
    containerOpenerEl.classList.remove("conceal")
    containerOpenerEl.classList.add("conceal")
    containerScoreSignEl.removeChild(containerScoreSignEl.lastChild)
    QuestionIndex = 0
    gameover = ""
    stopwatchEl.textContent = 0
    score = 0

    if (correctEl.className = "appear") {
        correctEl.classList.remove("appear");
        correctEl.classList.add("conceal")
    }
    if (incorrectEl.className = "appear") {
        incorrectEl.classList.remove("appear");
        incorrectEl.classList.add("conceal");
    }
    }

    //start time at 45 seconds
    var setTime = function () {
    timeleft = 45;

    var stopwatchcheck = setInterval(function () {
        stopwatchEl.innerText = timeleft;
        timeleft--

        if (gameover) {
            clearInterval(stopwatchcheck)
        }

        if (timeleft < 0) {
            appearScore()
            stopwatchEl.innerText = 0
            clearInterval(stopwatchcheck)
        }

    }, 1000)
    }

    var startGame = function () {
          //add classes to appear/conceal start and quiz screen
    containerOpenerEl.classList.add('conceal');
    containerOpenerEl.classList.remove('appear');
    containerQuizEl.classList.remove('conceal');
    containerQuizEl.classList.add('appear');
        //To put questions in random order
    arrayShuffledQuestions = questions.sort(() => Math.random() -0.5 )
    setTime()
    setQuestion()
    }

     //set next question for quiz
    var setQuestion = function () {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
    }
    //eliminate answer buttons
    var resetAnswers = function () {
    while (answerbuttonsEl.firstChild) {
        answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
    };
    };

         //illustrate question information 
    var displayQuestion = function (index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener("click", answerCheck)
        answerbuttonsEl.appendChild(answerbutton)
    }
    };
    //illustrate correct!
    var answerRight = function () {
    if (correctEl.className = "conceal") {
        correctEl.classList.remove("conceal")
        correctEl.classList.add("banner")
        incorrectEl.classList.remove("banner")
        incorrectEl.classList.add("conceal")
    }
    } 
        //illustrate incorate!
    var answerIncorrect = function () {
    if (incorrectEl.className = "conceal") {
        incorrectEl.classList.remove("conceal")
        incorrectEl.classList.add("banner")
        incorrectEl.classList.remove("banner")
        incorrectEl.classList.add("conceal")
    }
    }
        //check answer is right  
    var answerCheck = function (event) {
    var selectedanswer = event.target
    if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText) {
        answerRight()
        score = score + 7
    }

    else {
        answerIncorrect()
        score = score - 1;
        timeleft = timeleft - 3;
    };

    QuestionIndex++
    if (arrayShuffledQuestions.length > QuestionIndex + 1) {
        setQuestion()
    }
    else {
        gameover = "true";
        appearScore();
    }
    }
         //illustrate sum score of game
    var appearScore = function () {
    containerQuizEl.classList.add("conceal");
    containerEndEl.classList.remove("conceal");
    containerEndEl.classList.add("appear");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreSignEl.appendChild(scoreDisplay);
    }       
    //create high score elements
    var createHighScore = function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your intials!");
        return;
    }

    initialsForms.reset();

    var HighScore = {
        initials: initials,
        score: score
    } 

        //push and sort scores
         HighScores.push(HighScore);
        HighScores.sort((a, b) => { return b.score - a.score });

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild)
    }
    
        //develop elements of high scores
    for (var i = 0; i < HighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);
    }

    saveHighScore();
    displayHighScores();
    }
        //save high scores
    var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(HighScores))
    }

        //load values/ 
    var loadHighScore = function () {
    var LoadedHighScores = localStorage.getItem("HighScores")
    if (!LoadedHighScores) {
        return false;
    }

    LoadedHighScores = JSON.parse(LoadedHighScores);
    LoadedHighScores.sort((a, b) => { return b.score - a.score })


    for (var i = 0; i < LoadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);

        HighScores.push(LoadedHighScores[i]);

    }
    }

      //showcase high score screen from link o
    var displayHighScores = function () {

    containerHighScoresEl.classList.remove("conceal");
    containerHighScoresEl.classList.add("appear");
    gameover = "true"

    if (containerEndEl.className = "appear") {
        containerEndEl.classList.remove("appear");
        containerEndEl.classList.add("conceal");
    }
    if (containerOpenerEl.className = "appear") {
        containerOpenerEl.classList.remove("appear");
        containerOpenerEl.classList.add("conceal");
    }

    if (containerQuizEl.className = "appear") {
        containerQuizEl.classList.remove("appear");
        containerQuizEl.classList.add("conceal");
    }

    if (correctEl.className = "appear") {
        correctEl.classList.remove("appear");
        correctEl.classList.add("conceal");
    }

    if (incorrectEl.className = "appear") {
        incorrectEl.classList.remove("appear");
        incorrectEl.classList.add("conceal");
    }

    }
        //remove high scores
    var clearScores = function () {
    HighScores = [];

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }

    localStorage.clear(HighScores);
    }

    loadHighScore()

      //click start game
    btnStartEl.addEventListener("click", startGame)
     //enter or click on submit button
    initialsForms.addEventListener("submit", createHighScore)
     //view high-scores 
    listHighScoreEl.addEventListener("click", displayHighScores)
    //Retreat button
    btnGoBackEl.addEventListener("click", renderStartPage)
    //clear scores button
    btnClearScoresEl.addEventListener("click", clearScores)

