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
let currentScore = 20;


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
    overlayElement.classList.add('hidden');

})


//function for creating the random number
checkBtn.addEventListener('click', () => {
    let number = Math.round(Math.random() * 30); //random number created each time the checkbtn is clicked
    randomNumber.textContent = number;
    let inputValue = guessedNumber.value;

    //looking out for too low values
    if(inputValue > 30 || inputValue < 1){
        alert('Please enter a value within the specified values!');
    } else{
        //this runs if the input value is within the range
        //creating the conditions
    if(inputValue === number){
        updatingText.textContent = `🥳Great Guess! You get A point!`;
        currentScore++
        scoreUpdate.textContent = currentScore;
        document.querySelector('body').classList.add('correct-guess');
       
    } else if (inputValue > number){
        updatingText.textContent = `Oops! Too high, try again!`;
        currentScore--
        scoreUpdate.textContent = currentScore;
        document.querySelector('body').classList.add('wrong-guess');
         
    } else if(inputValue < number){
        updatingText.textContent = `Too low mate!`;
        currentScore--
        scoreUpdate.textContent = currentScore;
        document.querySelector('body').classList.add('wrong-guess');
         
    }



    }
    
    
})

//function for the again button;
document.getElementById('again-btn').addEventListener('click', () => {
    location.reload()
})