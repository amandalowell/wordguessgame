var quizWords = [ "revelations", "kino", "perkaholic", "crawler", "deadshot", "jug", "boss", "revive"];

var lettersUsed = [];
var turnsLeft = 20;
var turnsLeftElement = document.getElementById("turnsLeft")
var boxElement = document.getElementById("box")
var alreadyGuessed = document.getElementById("alreadyGuessed")
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var winsElement = document.getElementById("wins")
const wordElement = document.querySelector(".word")
const guessesRemainingElement = document.querySelector(".guesses-remaining")
const lettersGuessedElement = document.querySelector(".letters-guessed")





//this function selects the quizzword from the array//

function getWord(){
    for (var i = 0; i < quizWords.length; i++) 
        console.log(quizWords[i]);
}

const randomNumber = Math.random() 
// we multiply it by the length of the array
// to get a number between 0-(length of array)
const randomNumber2 = randomNumber * quizWords.length
// and make it an integer by rounding down
const randomIndex = Math.floor(randomNumber2)
// then we use that randomIndex to get a value from the words array
const randomWord = quizWords[randomIndex]

//make key-up, create letters already used
// initialize wins to 0
let wins = 0
// initialize the first word to a random word
// if you want to set it to first word in array do 'let word = words[0]'
let word = randomWord 
// this makes an array with empty values for each letter
// when a letter is guessed we update the array
let guessedWord = new Array(quizWords.length)
// initialize guessesRemaining to 10
let guessesRemaining = 20
// initialize the letters guessed as an empty variable
let lettersGuessed = []

function updateGuessedWord() {
    // let guessedWordString = guessedWord
    // const docWord = document.querySelector(".word")
    guessedWordString = guessedWord
    wordElement.innerHTML = guessedWord.join(" ")
    console.log("updating document word", guessedWord)
}




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

    
}
document.onkeypress = (event) => {
    // get char for key pressed
    // make it lowercase
        const letterGuess = event.key.toLowerCase()
        // if it is not a letter, ignore
        // the return keyword will exit the function
        if (!alphabet.includes(letterGuess)) return
        // decrement guessesRemaining if it was a valid key
        guessesRemaining--
        // if the letter has not been guessed
        // and if the letter is in the word
        if (
            !lettersGuessed.includes(letterGuess) &&
            word.includes(letterGuess)
        ) {
            // update the page
            // update the guessed word
            updateWord(letterGuess)
            // // reset letters guessed and guessesRemaining
            // updateLettersGuessed()
            // updateGuessesRemaining()
        } else {
            // decrement guessesRemaining
            // and update letters guessed
        }
    }
    
    
    
    function updateWord(letterGuess) {
        // update the guessedWord
        // need to make word an array
        const gameWord = word.split("")
        // loop through game word
        // loop through the guessed word
        for (let i = 0; i < quizWords.length; i++) {
            // if letter guess is in game word at index
            // but not in guessed word at same index
            if (
                quizWords[i] === letterGuess &&
                guessedWord[i] !== letterGuess
            ) {
                // update guessed word
                guessedWord[i] = letterGuess
            // and update the document word
                updateGuessedWord()
            // if guessed word equals word this is a win
                if(guessedWord.join("") === word) {
                    // need to create gameWon() function and call here
                    // gameWon() should choose a different word
                    // and reset letters guessed
                    // increment wins
                    // and reset guesses remaining
                    console.log("good job")
                }

            // the break keyword immediately exits the loop
            // we use it here to prevent checking for the same letter
            // after we found it already
                break
            }
        }
    }

