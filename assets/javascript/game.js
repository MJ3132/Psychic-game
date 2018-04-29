
// create an array of words

    const words = ["rabbit", "cat", "mouse", "tiger", "koala"];
    var ranNum = Math.floor(Math.random() * words.length);
    var chosenWord = words[ranNum];
    var rightWord = [];
    var wrongWord = [];
    var underScore = [];



// Dom manipulation

 var docUnderScore = document.getElementsByClassName("underscore");

   
// Main ======================================================================
console.log(chosenWord);

// create underscores based on the length of the word


var generateUnderscore = function () {

    for (var i = 0; i < chosenWord.length; i++){
        underScore.push("_");
  

       
    }
    return underScore;
} 


console.log(generateUnderscore()); 

//  users guess

document.addEventListener("keypress", function (event){
   //var keycode = event.keyCode;
   var keyword = String.fromCharCode(event.keyCode);
  console.log(keyword)

  // if users guess is right 
  console.log(chosenWord.indexOf(keyword));
   if(chosenWord.indexOf(keyword)>-1){

  // push/add to the right words array
  rightWord.push(keyword);

  // replace underscores with right letter

  docUnderScore[0].innerHTML = underScore.join(" ");
  underScore[chosenWord.indexOf(keyword)] = keyword; 
 
   }
 

     if (underScore.join(" ") == chosenWord) {

      alert("you win!");  
      }


   else {
     wrongWord.push(keyword);

     console.log(wrongWord);


   } 

 
   docUnderScore.innerHTML = generateUnderscore().join(" ");

});

