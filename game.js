



var quizWords = [ "revelations", "kino", "perkaholic", "crawler", "deadshot", "jug", "boss", "revive"];
var lettersUsed = [];
var turnsLeft = 5;
var turnsLeftElement = document.getElementById("turnsLeft")
var boxElement = document.getElementById("box")
var alreadyGuessed = document.getElementById("alreadyGuessed")
var alphabet = "abcdef"


//this function selects the quizzword from the array//

function getWord(){
    for (var i = 0; i < quizWords.length; i++) 
        console.log(quizWords[i]);
}

//make key-up, create letters already used

document.onkeyup = function(event) {
    var keyPressed = event.key;
    console.log(boxElement);
    //boxElement.innerHTML = "test";//
    console.log(keyPressed);
    lettersUsed.push(keyPressed);
    console.log(lettersUsed);
    alreadyGuessed.innerHTML = lettersUsed;
    turnsLeft = turnsLeft -1; //could also turnsLeft += 1 or turnsLeft++//
    turnsLeftElement.innerHTML = turnsLeft;
    console.log(alphabet.includes(keyPressed));
    
    //if ! alphabet.inclues(keyPressed) ;
        //return//


    //if lettersUsed
if (lettersUsed.indexOf(key) >= 0) {

}

else if(hadk) {

}

else  { }


}