//defining variables in the global scope
let againBtn = document.getElementById('again-btn');
let randomNumber = document.getElementById('random-number');
let guessedNumber = document.getElementById('number-guessed');
let checkBtn = document.getElementById('check-number');
let updatingText = document.getElementById('update-text');
let scoreUpdate = document.getElementById('score-update');
let highScoreText = document.getElementById('high-score');
let modalContainer = document.getElementById('modal');
let closeModalBtn = document.getElementById('close-modal');
let overlayElement = document.querySelector('.overlay');


//function for the modal popup with the rules of the game after 3 seconds
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
     modalContainer.classList.remove('hidden')
     overlayElement.classList.remove('hidden')
    }, 3000)
})

//function for removing the modal window and the overlay
closeModalBtn.addEventListener('click', () => {
    modalContainer.classList.add('hidden');
    overlayElement.classList.add('hidden')
})


//function for creating the random number
checkBtn.addEventListener('click', () => {
    randomNumber = Math.round(Math.random() * 30);
    console.log(randomNumber)
})