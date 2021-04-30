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


// if true, createElement li with letter input under the images
// if false, have an element listener that will have one of the images show up

////////// Variables ////////// 

const subBtn = document.querySelector("#bars")
const inputBar = document.querySelector("#text")

const worrrds = ["words"]
const wordsWordsWords = ["panda","focus","hocus","prime","limbs","tears","clubs","weeps","kekwU","moots"]



//////////  Functions ////////// 
// look ma i figured out how to write a anonymous function that doens't break or make me cry ✅
//  () => Math.floor(Math.random() * wordsWordsWords.length);

// 1. generates random number limited to the length of the guess word
// 2. breaks up string into array of strings
// 3. combo string break and index break into one variable function I can use
const indexRandom = () => {return Math.floor(Math.random() * wordsWordsWords.length)}
const stringBreak = (str) => {return str.split("") }
wordArray = stringBreak(wordsWordsWords[Math.floor(Math.random() * wordsWordsWords.length)])


// I can grab random words by their index # && break up the string into an sub array 
// console.log(stringBreak(wordsWordsWords[Math.floor(Math.random() * wordsWordsWords.length)])




/// MOVE THIS SOMEWHERE ELSE -- but needs to live in a function //////

  // check if the input value exists on the preset guess words ✅
        // save words as a string in an array
                // word strings need to be broken up into strings of individual letters ✅
                // function to break up strings individually needs to be reuseable if we are going to let players enter in words to guess. ✅
    // create li item & use innerText to put in letter value ✅
    const lettersUl = document.querySelector('#container')
    const lettersLi = document.createElement("li")
    lettersLi = lettersLi.innerText("why")
    lettersUl.appendChild(lettersLi)

///////////////////////////








//////////  Event Listener ////////// 

subBtn.addEventListener("click", (event) => {
    event.preventDefault()
        if(wordArray.includes(inputBar.value)){
            console.log("return reveal a letter")
            console.log(inputBar.value)
            console.log(wordArray)
            return
        }else{
            console.log("you are wrong son")
            console.log(inputBar.value)
            console.log(wordArray)
        }

});








