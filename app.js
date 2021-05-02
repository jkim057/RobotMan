// Notes:

// Letter LI setup goals/plans:
    // 1. break up string into arrays ✅
    // 2. create list items dynamically ✅
    // 3. div spots per string item ✅
    // border on bottom of div to make the letters presentable (CSS) ✅
        // A. for each string of 5 or less letters, a certain amount of spacing has to be setup in front and behind of the letters.
        // Status: this has been roughly done :check:
// every additional 5 letters (tiers):
    // 1. increase the total space taken up &
    // 2. REDUCE the borderspacing before and after the word.
// words to guess can be invisible, and and once guessed correctly will turn visible. (Maybe?)

/// Li.innerText lines have beem moved //////
  // check if the input value exists on the preset guess words ✅
        // save words as a string in an array
        // word strings need to be broken up into strings of individual letters ✅
    // function to break up strings individually needs to be reuseable if we are going to let players enter in words to guess. ✅
    // create li item & use innerText to put in letter value ✅
///////////////////////////

// if true, createElement li w letter input under images ✅
// if false, have an element listener that will have one of the images show up

////////// Variables ////////// 

const subBtn = document.querySelector("#bars")
const inputBar = document.querySelector("#text")

const chosenWord = ["panda","focus","hocus","prime","limbs","tears","clubs","weeps","kekwU","boots"]

const lettersShow = document.querySelector('.display')

//////////  Functions ////////// 
// look ma i figured out how to write a anonymous function that doens't break or make me cry ✅
//  () => Math.floor(Math.random() * wordsWordsWords.length);

// 1. generates random number limited to the length of the guess word
// 2. breaks up string into array of strings
// 3. combo str break & i break into 1 variable function 
const indexRandom = () => {return Math.floor(Math.random() * chosenWord.length)}
const stringBreak = (str) => {return str.split("") }
wordArray = stringBreak(chosenWord[Math.floor(Math.random() * chosenWord.length)])

const setUpWords = () => {
    for (let i = 0; i < wordArray.length; i++) {
        const lettersSpan = document.createElement("span")
        const letterStyle = document.createElement("div")
        lettersSpan.id = ('trueLetter')
        letterStyle.classList.add('bottomStyle')
        lettersSpan.innerText = wordArray[i]
        lettersShow.appendChild(letterStyle)
        letterStyle.appendChild(lettersSpan)  

    }
}
setUpWords()


// ///////// keep for later use somewhere? ////////////
// const lettersLi = document.createElement("li")
// lettersLi.innerText = inputBar.value
// lettersUl.appendChild(lettersLi)
// return
// // just adds letters at end, needs correct placement







//////////  Event Listener ////////// 

subBtn.addEventListener("click", (event) => {
    event.preventDefault()
        if(wordArray.includes(inputBar.value)){
            // the guess word needs to be set up invisible on the display line
            // if the guessed letter matches, all spaces containing that word HAS to show up.
            return
    
        }else{
            console.log("you are wrong son")
            console.log(inputBar.value)
            console.log(wordArray)
        }

});








