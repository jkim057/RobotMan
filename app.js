// Notes:

// Letter setup goals/plans:
    // 1. break up string into arrays ✅
    // 2. create list items dynamically ✅
    // 3. div spots per string item ✅
    // 4. border on div bottom to make placeholder (CSS) ✅
        // OPTIONAL: 
        // A. the front and back of strings need spacing (center?)
        // B. set up Tiers for every 5 letters
            // 1. increase the total space taken up &
            // 2. REDUCE borderspacing before and after letters.
    // letters to guess should be invisible, & when guessed correctly will turn visible. ✅ ABSOLUTELY CHECK

    // 5. check if the input value exists on the preset guess words ✅
        // A. save words as a string in an array ✅
        // B. need to break up word string into string letters ✅
    // OPTIONAL: function to break up strings need to be reuseable ✅
    // 6. create letter item & use innerText to put in letter value ✅
///////////////////////////

// if true, createElement li w letter input under images ✅
// if false, make one of the images show up instead

// functions:
    // Note: look ma i figured out how to write a anonymous function that doesn't break or make me cry ✅
    // () => Math.floor(Math.random() * wordsWordsWords.length);

    // 1. generate random # limited to the length of the guess word ✅
    // 2. breaks up string into array of strings ✅
    // 3. combo str break & i break into 1 variable function ✅
        // OPTIONAL: need to setup event listener for this function on a opening page for when players want to enter in words 


// Chances & image reveal:
    // 1. need to find element with class of chance, but WITHOUT class of skip this.
    // 2. also need to make it so that the Shinji div DOES NOT get picked the first time around
    // 3. also need to make it so that the man chances can be flipped back to invisible when shinji shows up
        // NOTES : if (imageReveal.classList.includes('skipThis')){
            // imageReveal.style.visibility = "visible"
            // imageReveal.classList.add(`skipThis${i}`)}
    //:fire: I was about to make myself cry in stress when someone (Aaron) pointed out instead of trying to set up a query selector to try to grab things by class `.chance`, I could just target them by their ids that I built into them FROM THE VERY START.

// reducing the number of chances for the sake of my sanity
// 2 arms for 1 chance, 2 legs for 1 chance, entire man for 1 chance.

// Letter usage display notes:
// each inputText.value is getting added to the array TWICE
// the display is not showing the elements in the array, it just shows the number of elements in the array.

//////////////
//// start screen reasoning w/ 1 vs 2 player setup ///

// with start screen, set up so that player can choose 1player or 2player
// picking 1 player, page auto generates a word to guess
    // have those functions linked to the 1st player button
            // auto grab word from pool & setup as array SET TO 1 PLAYER BUTTON CLICK
// pick 2 players, prompt shows up asking for word
    // page doesn't load yet?
    // prompted word gets prioritized over general pool
    // prompted word gets spilt into single letter arrays
    // page THEN sets the word to guess
    // then game starts
    // prioritized entered word should then get broken down into array of single letter strings, and the game be the same from there.


//// start screen reasoning ///


// overlay start with display block

// with start screen, set up so that player can choose 1player or 2player
// picking 1 player, page auto generates a word to guess
    // have those functions linked to the 1st player button
            // auto grab word from pool & setup as array SET TO 1 PLAYER BUTTON CLICK
// pick 2 players, prompt shows up asking for word
    // page doesn't load yet?
    // prompted word gets prioritized over general pool
    // prompted word gets spilt into single letter arrays
    // page THEN sets the word to guess
    // then game starts
    // prioritized entered word should then get broken down into array of single letter strings, and the game be the same from there.

////////// START SCREEN / 1P 2P functionality ///////////
 // HTML
    // 1P VS 2P button mode
    // <button id="onePMode"></button> ✅
    // <button id="twoPMode"></button> ✅

    // New word input & button
    // <form>
    //      <input id="newWordText" type="text"/>
    //      <input id="newWordGo" type="submit"/>
    // </form>

    // JSS
    // Variables

    // const newWordBTN = document.querySelector("#newWordGo")
    // const newWordInput = document.querySelector("#newWordText")

    // can use prompts to set user input to a variable quickly
    // const userInput = prompt("What is the secret password?")
////////////////////


///////////////////////////
////////// Variables ////////// 

const overlayScreen = document.querySelector("#overlay")

const subBtn = document.querySelector("#bars")
const inputText = document.querySelector("#text")

// const newWordBTN = document.querySelector("#newWordGo")
// const newWordInput = document.querySelector("#newWordText")


const chosenWord = ["panda","focus","hocus","prime","limbs","tears","clubs","weeps","kiwis","boots","wizard","league","buttons","lobster"]

const lettersShow = document.querySelector('#letterShownDisplay')

const robotHead = document.querySelector(`#head`)
const robotShinji = document.querySelector(`#shinji`)
const robotTorso = document.querySelector(`#torso`)
const robotArmLT = document.querySelector(`#leftArm`)
const robotArmRI = document.querySelector(`#rightArm`)
const robotHandLT = document.querySelector(`#leftHand`)
const robotHandRI = document.querySelector(`#rightHand`)
const robotLegsLT = document.querySelector(`#leftLeg`)
const robotLegsRI = document.querySelector(`#rightLeg`)
const sciWhole = document.querySelector(`#science`)

let chancesLeft = 6

const chanceDisplay = document.querySelector('#lifeChance')
const spentLetters = document.querySelector('#lettersUsed')

let guessedWords = []

const onePlayBTN = document.querySelector("#onePMode")
const twoPlayBTN = document.querySelector("#twoPMode")

let curArray = []

/////////////////////////////////
//////////  Functions ////////// 

// indexRandom picks random index element item in preset random word array.
// stringBreak breaks up any entered strings into arrays of single letter strings.
const indexRandom = () => {return Math.floor(Math.random() * chosenWord.length)}
const stringBreak = (str) => {return str.split("") }

wordArray = stringBreak(chosenWord[Math.floor(Math.random() * chosenWord.length)])
// wordArrayChosen = stringBreak(userInput.value)

// Takes the var set to a word array string and puts them all in place in the letter display
const setUpWords = (wordArray) => {
    for (let i = 0; i < wordArray.length; i++) {
        const lettersSpan = document.createElement("span")
        const letterStyle = document.createElement("div")
        lettersSpan.classList.add('trueLetter')
        lettersSpan.id = (`letterPosition${i}`)
        letterStyle.classList.add('bottomStyle')
        lettersSpan.innerText = wordArray[i]
        lettersShow.appendChild(letterStyle)
        letterStyle.appendChild(lettersSpan)  
    }
}


// Successful Guess
const letterFind = function(){
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes(inputText.value)){
            let reveal = document.querySelector(`#letterPosition${i}`)
            reveal.style.visibility = "visible";
}}}



// Chances Left
const chanceTally = function(){
    if(chancesLeft > 0){
        chanceDisplay.innerText = `${chancesLeft} chances left!`
    }else if(chancesLeft <= 0){
        chanceDisplay.innerText = `You lost! Game Over!`
    }
}
// Failed Guess 
const letterMiss = function(){
    if(chancesLeft === 6){
        robotLegsLT.style.visibility = "visible"
        robotLegsRI.style.visibility = "visible"
        chanceTally()
        return chancesLeft--
    }else if(chancesLeft === 5) {
        robotTorso.style.visibility = "visible"
        chanceTally()
        return chancesLeft--
    }else if(chancesLeft === 4) {
        robotArmLT.style.visibility = "visible"
        robotArmRI.style.visibility = "visible"
        robotHandLT.style.visibility = "visible"
        robotHandRI.style.visibility = "visible"
        chanceTally()
        return chancesLeft--
    }else if(chancesLeft === 3) {
        robotHead.style.visibility = "visible"
        chanceTally()
        return chancesLeft--
    }else if(chancesLeft === 2) {
        sciWhole.style.visibility = "visible"
        chanceTally()
        return chancesLeft--
    }else if(chancesLeft === 1) {
        sciWhole.style.visibility = "hidden"
        robotHead.style.visibility = "hidden"
        robotShinji.style.visibility = "visible"
        chanceTally()
        return chancesLeft--
    }else{
        chanceTally()
    }
}

// Letter display //
const spentLetterBox = function(){
    guessedWords.push(inputText.value)
    spentLetters.innerText = guessedWords
}






///////////////////////////////////
//////////  Event Listener ////////// 


    // const newWordBTN = document.querySelector("#newWordGo")
    // const newWordInput = document.querySelector("#newWordText")

    // can use prompts to set user input to a variable quickly
    // const userInput = prompt("What is the secret password?")

    //// event Listener ////
     //link start wordArray & setUpWords - this means I need to stop the auto word array and setUpWords function
onePlayBTN.addEventListener('click', (event) =>{
        event.preventDefault()
        overlayScreen.style.display = "none"
        setUpWords(wordArray)
})
    
// twoPlayBTN.addEventListener('click', (event) =>{
//     event.preventDefault()
//         overlayScreen.style.display = "none"
//         setUpWords(wordArrayChosen)
//         })
//             // wait for input value of word entered
//             // enter input value into string break function
//             // input value array is now individual strings that are inputted in arrays
// })
    


subBtn.addEventListener("click", (event) => {
    event.preventDefault()
        if(wordArray.includes(inputText.value)){
            letterFind()
            spentLetterBox()
        }else{
            letterMiss()
            spentLetterBox()
            // console.log("you are wrong")
            // console.log(wordArray)
        }
});














