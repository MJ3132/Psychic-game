
//GLOBAL VARIABLES

// Arrays and variables for holding data

var wordOptions = ["koala","kangaroo","elephant","bear", "rabbit"];
var selectedWord = "";
var lettersinWord= [];
var numBlanks = 0;
var blanksAndSucceses = [];
var wrongLetters = [];

// Game counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;




//FUNCTIONS (Reusable blocks of code that I will call upon when needed)
//=====================================================================

function startGame (){
    selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

//Reset
    guessesLeft = 9;
    wrongLetters= [];
    blanksAndSucceses= [];



// Populate blanks and successes with right number of blanks

    for( var i = 0; i < numBlanks; i++){
        blanksAndSucceses.push("_");
    }

// Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSucceses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    //  testing and debugging
//  testing and debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSucceses);
}

function checkLetters (letter) {
    // check if letters exists in code at all

    var isLetterinWord = false;
  
    for (var i = 0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            isLetterinWord = true;   
            
        }
    }
    //Check where in word letter exists, then populate out blanksAndSuccesses array
    if(isLetterinWord){
     
        for (var i=0; i<numBlanks; i++){
            if (selectedWord[i] == letter){
                blanksAndSucceses[i] = letter;
              
            }
        }
    }
    // letter was not found
    else {
        wrongLetters.push(letter);
        guessesLeft --
        console.log(guessesLeft);
    }
    //Testing / Debugging
    console.log(blanksAndSucceses);
}

function roundComplete() {
   console.log("win Count: " + winCount + " | loss Count: " + lossCount + "| Guesses Left " + guessesLeft);
   //update the HTML to reflect the most recent count stats

   document.getElementById("numGuesses").innerHTML = guessesLeft;
   document.getElementById("wordToGuess").innerHTML = blanksAndSucceses.join(" ");
   document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
   

   //check if user won
   if(lettersinWord.toString()== blanksAndSucceses.toString()) {
       winCount++;
       alert("You Won!");
    // Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = winCount;   
    startGame();
    //check if user lost


   }

   else if (guessesLeft == 0) {
       lossCount++;
       alert("You Lost!");

       //update the HTML

       document.getElementById("lossCounter").innerHTML= lossCount;
    startGame();
    }
}


   
//MAIN PROCESS
//=====================================================================
// Initiates the code the first time

startGame ();


//Register key clicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(letterGuessed);
   roundComplete();
   
}
