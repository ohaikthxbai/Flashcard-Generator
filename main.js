var inquirer = require('inquirer');
var basicCard = require('./BasicCard');
var clozeCard = require('./ClozeCard');


// Basic Cards
var bCard1 = new basicCard("How many stars are on the flag of the United States?", "50");
//testing the basic cards
//console.log(test);
var bCard2 = new basicCard("How many stripes are on the flag of the United States?", "13");
//console.log(test2);

var basicQ = [bCard1.front, bCard2.front];
//console.log(basicQuestion[0]);
var basicA = [bCard1.back, bCard2.back];
//console.log(basicAnswer[1]);

// Cloze Cards
var cCard1 = new clozeCard("Phoebe is the name of Justin's cat", "Phoebe");
var cCard2 = new clozeCard("Chell is the character you play as in the Portal series", "Chell");

var clozeQ = [cCard1.partial, cCard2.partial];
var clozeA = [cCard1.cloze, cCard2.cloze];

// testing
//console.log(clozeTest, clozeTest2);
//console.log(clozeQ[0]);
//console.log(clozeA[0]);

// Play
// User is prompted with the option of basic or cloze flashcards
inquirer.prompt([
    {
        type: 'list',
        name: 'option',
        message: 'Select Flashcard type: ',
        choices: ['Basic', 'Cloze']
    }
]).then(function(selection){
    if(selection.option === 'Basic') {
        basicDeck();
    }
    else if(selection.option === 'Cloze') {
        clozeDeck();
    }
})

// BASIC Flashcard deck
var wrongCount = 0;
var correctCount = 0;
var cardCount = 0;

function basicDeck() {
    //console.log(basicA.length);
    if(cardCount < basicA.length) {
        inquirer.prompt([
            {
                name: 'question',
                message: basicQ[cardCount]
            },
        ]).then(function(answer) {
            if(answer.question === basicA[cardCount]) {
                correctCount++;
            } else {
                wrongCount++;
            }
            cardCount++;
            basicDeck();
        });
    }
    else {
        console.log("");
        console.log("Results: ");
        console.log("Correct Answers: " + correctCount);
        console.log("Wrong Answers: " + wrongCount);
        console.log("- - - - - - - - - - - ");
        console.log("Here are the answers to the questions: ");
        for (var i = 0; i < basicA.length; i++) {
            console.log(i+1 + ": " + basicA[i]);
        }
    }
}

function clozeDeck() {
    //console.log(clozeA.length);
    if(cardCount < clozeA.length) {
        inquirer.prompt([
            {
                name: 'question',
                message: clozeQ[cardCount]
            },
        ]).then(function(answer) {
            if(answer.question === clozeA[cardCount]) {
                correctCount++;
            } else {
                wrongCount++;
            }
            cardCount++;
            clozeDeck();
        });
    }
    else {
        console.log("");
        console.log("Results: ");
        console.log("Correct Answers: " + correctCount);
        console.log("Wrong Answers: " + wrongCount);
        console.log("- - - - - - - - - - - ");
        console.log("Here are the answers to the questions: ");
        for (var i = 0; i < clozeA.length; i++) {
            console.log(i+1 + ": " + clozeA[i]);
        }
    }
}