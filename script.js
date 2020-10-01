const somethingQuestion = ['Who is Neil Young?', 'When is the Harvest Moon', 'In 1992, Young released an album. What is the name of the album?', 'What annual event did Young create in collaboration with Willie Nelson?'];
const somethingAnswerOne = ['fillerA1', 'A Poet', 'fillerA3', 'fillerA4'];
const somethingAnswerTwo = ['fillerB1', 'The first full moon of the autumnal equinox', 'fillerB3', 'fillerB4'];
const somethingAnswerThree = ['A Musician', 'A Musician', 'A Poet', 'Farm Aid'];
const somethingAnswerFour = ['An Object', 'Random Answer', 'Harvest Moon', 'fillerA4'];
const answers = ['A Musician', 'The first full moon of the autumnal equinox', 'Harvest Moon', 'Farm Aid'];

let buttonValue = document.querySelector('#nextButton');
let score = 0;
let startIndex = 0;  

 
//rotates the question, options and answers
const forwardFunction = () => {
    buttonValue.innerText = '';
    buttonValue.innerText = 'Next Question';
    console.log(startIndex);
    //
    document.querySelector('#question').innerText = somethingQuestion[startIndex];
    document.querySelector('#answer-1').innerText = somethingAnswerOne[startIndex];
    document.querySelector('#answer-2').innerText = somethingAnswerTwo[startIndex];
    document.querySelector('#answer-3').innerText = somethingAnswerThree[startIndex];
    document.querySelector('#answer-4').innerText = somethingAnswerFour[startIndex];
    answers[startIndex];
    //
    if (startIndex === 4) {
        alert('Game Over. You got ' + score + ' question(s) correct.');  
    } 
};       
 
//checks the answer; a correct answer is assigned a green background; a false answer a red background
const answer = (e) => { 
    if (e.target.innerHTML === answers[startIndex]) {
            e.target.classList.add('background-correct');
            score++;
        } else if (e.target.innerHTML === answers[startIndex]) {
            e.target.classList.add('background-correct');
            score++;
        } else if (e.target.innerHTML === answers[startIndex]) {
            e.target.classList.add('background-correct');
            score++;
        } else if (e.target.innerHTML === answers[startIndex]) {
            e.target.classList.add('background-correct');
            score++;
        } else {
            e.target.classList.add('background-false');
        }
    startIndex++;
    document.querySelector('#aSpan').innerHTML = score;
   };      

//clears the answer cells for the next question
const clearFunction = () => {
    let answersList = document.querySelectorAll('.answer-cell');
    for (let i = 0; i < answersList.length; i++) {
        answersList[i].classList.remove('background-correct');
        answersList[i].classList.remove('background-false');
    } 
};   

//event listeners-----------------
let forwardButton = document.querySelector('#nextButton');
forwardButton.addEventListener('click', forwardFunction);
//
let answersList = document.querySelectorAll('.answer-cell');
for (let i = 0; i < answersList.length; i++) {
    answersList[i].addEventListener('click', answer);
}
//
let clearButton = document.querySelector('#nextButton');
clearButton.addEventListener('click', clearFunction);  
