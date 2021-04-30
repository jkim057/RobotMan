// break up string into arrays, create list items & div spots per string item // border on bottom of div to make the letters presentable.

// for each string of 5 or less letters, a certain amount of spacing and space 
// every 5 more letters will increase the space taken and REDUCE the borderspacing before and after the word.
// words to guess can be invisible, and and once guessed correctly will turn visible.

const subBtn = document.querySelector("#bars")
const inputBar = document.querySelector("#text")


function stringBreak(str){
    return str.split("") 
}

subBtn.addEventListener("click", event => {
    event.preventDefault()


    for (let i = 0; i < str.length; i++) {
        if (inputBar.value == [i]) {
            return 
        
    }


    if (inputBar.value) {
        
    }


    console.log(inputBar.value)
    // check if the input value exists on the preset guess words
        // save words as a string in an array
                // word strings need to be broken up into strings of individual letters 
                // function to break up strings individually needs to be reuseable if we are going to let players enter in words to guess.
    // create li item & use innerText to put in letter value
    const li = document.createElement("li")




    // .appendChild()
})

console.log(stringBreak("word"))