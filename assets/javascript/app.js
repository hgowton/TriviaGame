//video for Trivia game https://www.youtube.com/watch?v=xhmmiRmxQ8Q&feature=youtu.be

//Declare Variables
var startButton
var quizContainer

var timer
var totalScore = 0;
var wins = 0;
var loses = 0;
var progress
var userAnswer = "";

$(document).ready(function() {

//Questions, choices, and images for questions
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
        
        {question : "What time is it?",
        questionImage : "img/html.png",
        choiceA : "correct",
        choiceB : "midnight", 
        choiceC : "15 minutes after 4", 
        choiceD : "3 pm",
        correctAnswer : "A"
        },]

let lastQuestion = questions.length - 1;
let runningQuestion = 0;


//Start game button
$("#startButton").on('click', function() {
    $("#startButton").addClass("displayNone");
    $("#quizContainer").removeClass("displayNone");
    renderQuestion();
    console.log("check")
});

//Next Question button
$("#nextQuestion").on('click', function() {
    $("#resultsDuringGame").addClass("displayNone");
    $("#quizContainer").removeClass("displayNone");
    renderQuestion();
});

//What happens when you select an answer
$("#choiceA").on('click', function() {
    userAnswer = "A";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    $("#quizContainer").addClass("displayNone");
    $("#resultsDuringGame").removeClass("displayNone");
    checkAnswer();
    console.log("Answer: " + userAnswer)
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
    console.log("object answer: " + questions[runningQuestion].correctAnswer);
}


function checkAnswer () {
    if ( userAnswer == questions[runningQuestion].correctAnswer){
        totalScore += 10;
        wins++;
        userAnswer = "";
    }
    else {
        loses++;
        userAnswer = "";
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
    }
    // else STOP QUIZ
}

document.getElementById("wins").innerHTML="Wins: " + wins;
document.getElementById("loses").innerHTML="Loses: " + loses;


//IMPORTANT STEP Change classes to make the question versus score areas visible
//$( "p" ).addClass( "myClass yourClass" );
//$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
//display hidden versus show in class CSS code

});
