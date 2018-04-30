// global variables
// create an array of words

    const words = ["rabbit", "cat", "mouse", "tiger", "koala"];
    var ranNum = Math.floor(Math.random() * words.length);
    var chosenWord = words[ranNum];
    var rightWord = [];
    var wrongWord = [];
    var underScore = [];

    console.log(chosenWord);
    


// DOM manipulation

    var docUnderscore = document.getElementById("underscore");
    
   

//MAIN==================================================================================

// generating underscores that match the length of the choseWord array length
  var generateUnderscore  = function () {
    for(let i = 0; i < chosenWord.length; i++){
      underScore.push("_");    
  }
    return underScore;
}

console.log(generateUnderscore());

// get users guess

document.addEventListener("keypress", function (event){

  var keycode = event.keyCode;
   var keyword = String.fromCharCode(keycode);

 // if user guesses right add to the right words array  
 // if chosen  word matches the key word place as right
   if(chosenWord.indexOf(keyword)> -1) {

     rightWord.push(keyword);
      
     console.log(rightWord);

     // replace underscore with right letter
     underScore[chosenWord.indexOf(keyword)] = keyword;
     docUnderscore.innerHTML = underScore.join(" ");
     // checks to see if user word matches guesses
          if(underScore.join(" ") == chosenWord) {
            alert("you win!");
          }
        }
  // else if use guesses wrong add it to the wrong array
    else {
      wrongWord.push(keyword);
      console.log(wrongWord);
      
  }
});





docUnderscore.innerHTML = generateUnderscore().join(" ");







  

