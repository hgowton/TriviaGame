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
    wins = 0;
    loses = 0;
    totalScore = 0;
    runningQuestion = 0;
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
    userAnswer = "Time Ran Out";
    document.getElementById("userAnswer").innerHTML="You ran out of time.";
    resultsReview();
    checkAnswer();
}

//results countdown timer 
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
        //clear user answer
            userAnswer = "";
        }, 3000);}
        
        
        function myStopFunction() {
            clearTimeout(stopTime);
        }
        

//Display Results Review 
    function resultsReview (){
        $("#quizContainer").addClass("displayNone");
        $("#resultsDuringGame").removeClass("displayNone");
        clearInterval(intervalId); 
    }

//Questions, choices, and images for questions come from https://www.trafalgar.com/real-word/10-unbelievable-facts-ocean/-----------------------------
    let questions = [
        {question : "Our oceans cover more than ______ of the Earth’s surface.",
            questionImage : "assets/images/earth.jpg",
            choiceA : "60%",
            choiceB : "70%", 
            choiceC : "80%", 
            choiceD : "90%",
            correctAnswer : "B",
            exInfo : "With so much of the Earth’s surface taken up by ocean, it’s evident how vital these marine environments are to the planet, and how much there still is to be explored."
        },

        {question : "The majority of life on Earth is __________",
        questionImage : "assets/images/biodiversity.png",
        choiceA : "aquatic",
        choiceB : "benthic", 
        choiceC : "terrestrial", 
        choiceD : "nocturnal",
        correctAnswer : "A",
        exInfo : "As so much of the Earth’s surface is underwater, it comes as no surprise that marine species outnumber those on land. But, it’s an incredible 94 per cent of the Earth’s living species that exist within the oceans."
        },
        
        {question : "Where is the world's largest mountain chain?",
        questionImage : "assets/images/mountain.jpg",
        choiceA : "India",
        choiceB : "Antartica", 
        choiceC : "under water", 
        choiceD : "Africa",
        correctAnswer : "C",
        exInfo : "Earth’s longest chain of mountains, the Mid-Ocean Ridge, is almost entirely beneath the ocean, stretching across a distance of 65,000 kilometres. It’s said that this mountain chain is less explored than the surface of Venus or Mars"
        },

        {question : "The copper found in this organism's blood has helped it become a key research specimen.",
        questionImage : "assets/images/copper.jpg",
        choiceA : "horseshoe crab",
        choiceB : "blue crab", 
        choiceC : "jellyfish", 
        choiceD : "octupus",
        correctAnswer : "A",
        exInfo : "Horseshoe crabs use hemocyanin to carry oxygen through their blood. Because of the copper present in hemocyanin, their blood is blue. Their blood contains amebocytes, which play a similar role to the white blood cells of vertebrates in defending the organism against pathogens."
        },

        {question : "Communities living in midocean ridges rely on bacteria beforing ______________ to create energy.",
        questionImage : "assets/images/hydrothermalVent.gif",
        choiceA : "photosynthesis",
        choiceB : "cellular respiration", 
        choiceC : "exocytosis", 
        choiceD : "chemosynthesis",
        correctAnswer : "D",
        exInfo : "Chemosynthesis is the process by which food (glucose) is made by bacteria using chemicals as the energy source, rather than sunlight. Chemosynthesis occurs around hydrothermal vents and methane seeps in the deep sea where sunlight is absent."
        },

        {question : "What organism is responsible for creating this egg case?",
        questionImage : "assets/images/skateEgg.jpg",
        choiceA : "whelk",
        choiceB : "shark", 
        choiceC : "starfish", 
        choiceD : "skate",
        correctAnswer : "D",
        exInfo : "The skates are the only rays that are oviparous. Females lay egg cases onto the sea floor after fertilization occurs in utero. While in utero, a protected case forms around the embryo which is called the egg case."
        },
        
        {question : "What part of the starfish enables it to regenerate?",
        questionImage : "assets/images/starfish.jpg",
        choiceA : "gonad",
        choiceB : "pyloric cecum", 
        choiceC : "madreporite", 
        choiceD : "gonopore",
        correctAnswer : "C",
        exInfo : "Because starfish like to eat clams and oysters, fishermen who gather shellfish have tried for years to get rid of them. To kill the starfish, fishermen would catch them, slice them right in half, and throw them back in the ocean. However, if even a small part of their madreporite is present the starfish can grow back parts of their bodies. Thus fisherman were actually increasing the number of starfish."
        },


    ]

var lastQuestion = questions.length - 1;
var runningQuestion = 0;


//Start game button
$("#startButton").on('click', function() {
    $("#startButton").addClass("displayNone");
    $("#quizContainer").removeClass("displayNone");
    renderQuestion();
    qStart();
});

//New game button
$("#newGame").on('click', function() {
    $("#totalScore").empty();
    $("#wins").empty();
    $("#loses").empty();
    $("#userAnswer").empty();
    $("#correctAnswer").empty();
    clearInterval(intervalId); 
    qTimer = 6;
    $("#quizContainer").removeClass("displayNone");
    $("#endGameResults").addClass("displayNone");
    qStart();
    console.log("running question end of game:" + runningQuestion);
    console.log("New Game Button Question:" + questions.question);

});

//Select an Answer ----------
$("#choiceA").on('click', function() {
    userAnswer = "A";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    resultsReview();
    checkAnswer();
    console.log("Answer: " + userAnswer)
});


$("#choiceB").on('click', function() {
    userAnswer = "B";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    resultsReview();
    checkAnswer();
    console.log("Answer: " + userAnswer)
});

$("#choiceC").on('click', function() {
    userAnswer = "C";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    resultsReview();
    checkAnswer();
    console.log("Answer: " + userAnswer)
});

$("#choiceD").on('click', function() {
    userAnswer = "D";
    document.getElementById("userAnswer").innerHTML="Your Answer Choice: " + userAnswer;
    resultsReview();
    checkAnswer();
    console.log("Answer: " + userAnswer)
});

console.log("length of lastQuestion: " + lastQuestion);
console.log("correct answer: " + questions[runningQuestion].correctAnswer);

function renderQuestion() {
    let q = questions[runningQuestion];
    $("#question").html("<p>" + q.question + "</p>")
    $("#questionImage").html("<img src=" + q.questionImage + " />");
    $("#choiceA").html("<p>" + q.choiceA + "</p>");
    $("#choiceB").html("<p>" + q.choiceB + "</p>");
    $("#choiceC").html("<p>" + q.choiceC + "</p>");
    $("#choiceD").html("<p>" + q.choiceD + "</p>");
    $("#correctAnswer").html("<p> Correct Answer: " + q.correctAnswer + "</p>");
    $("#exInfo").html("<p>" + q.exInfo + "</p>");
}


//Checking answers when clicked
function checkAnswer () {
    if ( userAnswer == questions[runningQuestion].correctAnswer){
        totalScore += 10;
        wins++;
        myFunction();
    }
    else {
        loses++;
        myFunction();
    }
    
    if (runningQuestion === lastQuestion) {
        myStopFunction();
        $("#resultsDuringGame").addClass("displayNone");
        $("#endGameResults").removeClass("displayNone");
        qClockRunning = false;
        console.log("UA " + userAnswer);
        console.log("CA " + correctAnswer);
        console.log("New Game Button if statement:" + questions.question);
    }
 

    console.log("RunningQuestion: " + runningQuestion);
    console.log("LastQuestion: " + lastQuestion);

    //END GAME
    // else STOP QUIZ

    document.getElementById("totalScore").innerHTML="Total Score: " + totalScore;
    document.getElementById("wins").innerHTML="Wins: " + wins;
    document.getElementById("loses").innerHTML="Loses: " + loses;
}


});