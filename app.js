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





////////// Variables ////////// 

const subBtn = document.querySelector("#bars")
const inputBar = document.querySelector("#text")

const chosenWord = ["panda","focus","hocus","prime","limbs","tears","clubs","weeps","kekwU","boots"]

const lettersShow = document.querySelector('.display')

//////////  Functions ////////// 

const indexRandom = () => {return Math.floor(Math.random() * chosenWord.length)}
const stringBreak = (str) => {return str.split("") }

wordArray = stringBreak(chosenWord[Math.floor(Math.random() * chosenWord.length)])

const setUpWords = () => {
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
// need to get setUpWords to run automatically 
setUpWords()

const letterFind = function(){
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].includes(inputBar.value)){
            let reveal = document.querySelector(`#letterPosition${i}`)
            reveal.style.visibility = "visible";
}}}

//////////  Event Listener ////////// 

subBtn.addEventListener("click", (event) => {
    event.preventDefault()
        if(wordArray.includes(inputBar.value)){
            letterFind()
        }else{
            console.log("you are wrong son")
            console.log(wordArray)
        }
});








