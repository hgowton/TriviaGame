//video for Trivia game https://www.youtube.com/watch?v=xhmmiRmxQ8Q&feature=youtu.be

//Declare Variables
var qTimer = 6;
var intervalId;
var qClockRunning = false;
var stopTime;

var wins = 0;
var loses = 0;
var userAnswer = "";
var totalScore = 0;
var progress

$(document).ready(function() {
 
      
//Question Timer -------------------------------
function qStart () {
    if (!qClockRunning) {
        intervalId = setInterval(decrement, 1000);
        qClockRunning = true;
    }
}

function qRun() {
    intervalId = setInterval(decrement, 1000);
}

//decrements timer, shows timer
function decrement() {
    qTimer--;
    $("#timer").html("<h2>" + qTimer + "</h2>");

    if (qTimer === 0) {
        stop();
    }  
};


function stop() {
    clearInterval(intervalId);
    $("#quizContainer").addClass("displayNone");
    $("#resultsDuringGame").removeClass("displayNone");
    loses++;
}

//timer feature
function myFunction(){
    stopTime = setTimeout(function() {
        $("#resultsDuringGame").addClass("displayNone");
        $("#quizContainer").removeClass("displayNone");
        runningQuestion++;
        renderQuestion();
    //timer features
        qTimer = 6;
        clearInterval(intervalId); 
        qRun();
        //move to next question
    }, 3000);}


function myStopFunction() {
    clearTimeout(stopTime);
}

//Questions, choices, and images for questions-----------------------------
    let questions = [
        {question : "How old are you?",
            questionImage : "img/html.png",
            choiceA : "wrong",
            choiceB : "wrong", 
            choiceC : "wrong", 
            choiceD : "correct",
            correctAnswer : "D"
        },

        {question : "What time is it?",
        questionImage : "img/html.png",
        choiceA : "correct",
        choiceB : "midnight", 
        choiceC : "15 minutes after 4", 
        choiceD : "3 pm",
        correctAnswer : "A"
        },
        
        {question : "Last Qusetion",
        questionImage : "img/html.png",
        choiceA : "correct",
        choiceB : "midnight", 
        choiceC : "15 minutes after 4", 
        choiceD : "3 pm",
        correctAnswer : "A"
        },]

var lastQuestion = questions.length - 1;
var runningQuestion = 0;


//Start game button
$("#startButton").on('click', function() {
    $("#startButton").addClass("displayNone");
    $("#quizContainer").removeClass("displayNone");
    renderQuestion();
    qStart();
    console.log("check")
});

//Select an Answer ----------
$("#choiceA").on('click', function() {
    userAnswer = "A";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    $("#quizContainer").addClass("displayNone");
    $("#resultsDuringGame").removeClass("displayNone");
    checkAnswer();
    console.log("Answer: " + userAnswer)
});

//New game button
$("#newGame").on('click', function() {
    $("#totalScore").empty();
    $("#wins").empty();
    $("#loses").empty();
    $("#userAnswer").empty();
    $("#correctAnswer").empty();
    runningQuestion = 0;
    qTimer = 6;
    $("#quizContainer").removeClass("displayNone");
    $("#endGameResults").addClass("displayNone");
    console.log("check")
});

$("#choiceB").on('click', function() {
    userAnswer = "B";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    checkAnswer();
    $("#quizContainer").addClass("displayNone");
    $("#resultsDuringGame").removeClass("displayNone");
    console.log("Answer: " + userAnswer)
});

$("#choiceC").on('click', function() {
    userAnswer = "C";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    checkAnswer();
    $("#quizContainer").addClass("displayNone");
    $("#resultsDuringGame").removeClass("displayNone");
    console.log("Answer: " + userAnswer)
});

$("#choiceD").on('click', function() {
    userAnswer = "D";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    checkAnswer();
    $("#quizContainer").addClass("displayNone");
    $("#resultsDuringGame").removeClass("displayNone");
    console.log("Answer: " + userAnswer)
});

console.log("length of lastQuestion: " + lastQuestion);
console.log("correct answer: " + questions[runningQuestion].correctAnswer);

function renderQuestion() {
    let q = questions[runningQuestion];
    $("#question").html("<p>" + q.question + "</p>")
    // $("#questionImage").html("<img src=" + q.questionImage + " />");
    $("#choiceA").html("<p>" + q.choiceA + "</p>");
    $("#choiceB").html("<p>" + q.choiceB + "</p>");
    $("#choiceC").html("<p>" + q.choiceC + "</p>");
    $("#choiceD").html("<p>" + q.choiceD + "</p>");
    $("#correctAnswer").html("<p> Correct Answer: " + q.correctAnswer + "</p>");
}

function timeStop () {
    stopTime = setTimeout
}
function checkAnswer () {
    
    if ( userAnswer == questions[runningQuestion].correctAnswer){
        totalScore += 10;
        wins++;
        userAnswer = "";
        myFunction();
    }
    else {
        loses++;
        userAnswer = "";
        myFunction();
    }
    
    if (runningQuestion === lastQuestion) {
        myStopFunction();
        $("#quizContainer").addClass("displayNone");
        $("#resultsDuringGame").addClass("displayNone");
        $("#endGameResults").removeClass("displayNone");
        runningQuestion = "";
        qClockRunning = false;
    }
 

    console.log(runningQuestion);
    console.log(lastQuestion);

    //END GAME
    // else STOP QUIZ

    document.getElementById("totalScore").innerHTML="Total Score: " + totalScore;
    document.getElementById("wins").innerHTML="Wins: " + wins;
    document.getElementById("loses").innerHTML="Loses: " + loses;
}


});