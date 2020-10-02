const somethingQuestion = ['What is Neil Young best known for?', 'When is the Harvest Moon', 'In 1992, Young released an album. What is the name of the album?', 'What annual event did Young create in collaboration with Willie Nelson?'];
const somethingAnswerOne = ['Engineering', 'Any full moon during suumer', 'Filler', 'Band Aid'];
const somethingAnswerTwo = ['Painting  ', 'The first full moon of the autumnal equinox', 'Harvest', 'The Great Went'];
const somethingAnswerThree = ['Music', 'The first full moon in November', 'Neil Young', 'Farm Aid'];
const somethingAnswerFour = ['Acting', 'April', 'Harvest Moon', 'The Clifford Ball'];
const answers = ['Music', 'The first full moon of the autumnal equinox', 'Harvest Moon', 'Farm Aid'];

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
        document.querySelector('#question').style.display = 'none';
        document.querySelector('#answer-1').style.display = 'none';
        document.querySelector('#answer-2').style.display = 'none';
        document.querySelector('#answer-3').style.display = 'none';
        document.querySelector('#answer-4').style.display = 'none';
        buttonValue.style.display = 'none';
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
        if (somethingAnswerOne[startIndex] === answers[startIndex]) {
            document.querySelector('#answer-1').classList.add('background-correct');
          } else if (somethingAnswerTwo[startIndex] === answers[startIndex]) {
            document.querySelector('#answer-2').classList.add('background-correct');
          } else if (somethingAnswerThree[startIndex] === answers[startIndex]) {
            document.querySelector('#answer-3').classList.add('background-correct');
          } else if (somethingAnswerFour[startIndex] === answers[startIndex]) { 
            document.querySelector('#answer-4').classList.add('background-correct');
          } else {
            console.log('error');
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