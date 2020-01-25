//video for Trivia game https://www.youtube.com/watch?v=xhmmiRmxQ8Q&feature=youtu.be

//Declare Variables
var startButton
var quizContainer

var timer
var totalScore
var wins
var loses
var progress

$(document).ready(function() {


//Questions, choices, and images for questions
    let questions = [
        {question : "How old are you?",
            questionImage : "img/html.png",
            choiceA : 5,
            choiceB : 10, 
            choiceC : 15, 
            choiceD : 20,
            correctAnswer : "D"
        },

        {question : "What time is it?",
        questionImage : "img/html.png",
        choiceA : "noon",
        choiceB : "midnight", 
        choiceC : "15 minutes after 4", 
        choiceD : "3 pm",
        correctAnswer : "A"
        },
        
        {question : "What time is it?",
        questionImage : "img/html.png",
        choiceA : "noon",
        choiceB : "midnight", 
        choiceC : "15 minutes after 4", 
        choiceD : "3 pm",
        correctAnswer : "A"
        },]

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

console.log("length of lastQuestionIndex: " + lastQuestionIndex);

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    $("#question").html("<p>" + q.question + "</p>")
    // $("#questionImage").html("<img src=" + q.questionImage + " />");
    $("#choiceA").html("<p>" + q.choiceA + "</p>");
    $("#choiceB").html("<p>" + q.choiceB + "</p>");
    $("#choiceC").html("<p>" + q.choiceC + "</p>");
    $("#choiceD").html("<p>" + q.choiceD + "</p>");
console.log(q.choiceB);

    //SUGGESTED CODE questionImage.innerHTML("<img src="+q.imgSrc + ">");
    
}

renderQuestion();




//IMPORTANT STEP Change classes to make the question versus score areas visible
//$( "p" ).addClass( "myClass yourClass" );
//$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
//display hidden versus show in class CSS code

});
