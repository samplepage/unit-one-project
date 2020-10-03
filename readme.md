# Neil Young Trivia

### App Demo: https://samplepage.github.io/unit-one-project/

## Technologies 
HTML
CSS
JAVASCRIPT

## Concept 
A trivia game featuring questions about Neil Young.

## Approach 
The user will encounter multipe trivia questions in multiple choice format. There will be a question followed by four questions. If the user selects a correct answer, the border color of the clicked answer cell will turn green. If the user selects an incorrect answer, the border color of the selected cell will turn red, while the correct answer cell will simultaneously illuminate green. Correct answers will increment the score by one. The score will be kept below the answer cells. Five arrays where used: one with the questions, four with the possible answers, one with the answers. To rotate through each array, a variable was set to zero. Clicking the next button triggered a function which incremented the variable by one hereby rotating the set. 

### Challenges 
Part of the chllenge involved the incorrect answer scenario in which the clicked cell border had to turn red while the correct cell border had to simultaneously turn green. Two if statements where necessary to accomplish this functionality: the first determined a correct/incorrect click, the second statement highlighted the correct answer if the first if statement determined an incorrect click.  