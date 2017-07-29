var inquirer = require('inquirer');
var basicCard = require('./BasicCard');
var clozeCard = require('./ClozeCard');


// Basic Cards
var test = new basicCard("Can you guess the correct answer to this question?", "There is no correct answer");
//testing the basic cards
//console.log(test);
var test2 = new basicCard("What does USA stand for?", "United States of America");
//console.log(test2);

var basicQ = [test.front, test2.front];
//console.log(basicQuestion[0]);
var basicA = [test.back, test2.back];
//console.log(basicAnswer[1]);

// Cloze Cards
var clozeTest = new clozeCard("Phoebe is the name of my cat", "Phoebe");
var clozeTest2 = new clozeCard("Springfield is the capital of Illinois", "Springfield");

var clozeQ = [clozeTest.partial, clozeTest2.partial];
var clozeA = [clozeTest.cloze, clozeTest2.cloze];

// testing
//console.log(clozeTest, clozeTest2);
//console.log(clozeQ[0]);
//console.log(clozeA[0]);