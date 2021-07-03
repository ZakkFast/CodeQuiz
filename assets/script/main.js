


/*
ToDO

     0. add start button to start the counter
        0.1 show the button that says start -Done
        0.2 on click make the button disappear 
        0.3 on click show the counter and the first question

    1. show the timer counting down

    2. show quizz questions
        2.1 create quiz object
        2.2 quiz object contains a question, up to 4 answers, and a correct answer identifier 
        2.3 quiz object will have a function that takes an answer and returns true if it matches the correct answer
        2.4 display the quiz question and the answers to the screen
            2.4.1 quiz question should be shown by iteslef 
            2.4.2 quiz answers should be shown as a list with radio buttons
        2.5 use a json file to create a list of questions and populate them 
        2.6 add logic to decide which question to display

    3. capture quiz answers

    4. when timer expires, show correct answers

    5. prompt for initials

    6. show highest scores

    7. update CSS - 
*/

// Selectors
const currentTime = document.querySelector('#currentTime')
const timer = document.querySelector('#startTime')
const questionsDiv = document.querySelector('#questionsDiv')
const wrapper = document.querySelector('#wrapper')

//Timer
let secondsLeft = 10
let holdInterval = 0
const penatly = 10
const ulCreate = document.createElement('ul')

// Timer.. I think? 

timer.addEventListener('click', function(){
  if(holdInterval === 0) {
    holdInterval = setInterval(function(){
      secondsLeft--;
      currentTime.textContent = `${secondsLeft} seconds left!`

      if(secondsLeft <= 0) {
        clearInterval(holdInterval);
        currentTime.textContent = `Time's up!`
      }
    }, 1000)
  }
})



// var with questions and answers for comparrison
const questions = [
    {
      title: 'HTML is a programming langauge?',
      choices: ['True', 'False'],
      answer: 'False'
    },
    {
      title: 'What does CSS stand for?',
      choices: ['Computational Systems Syntax', 'Cool-Dude Steven Segall', 'Casscading Style Sheet', 'Counter Strike Source'],
      answer: 'Casscading Style Sheet'
    },
    {
      title: 'What does HTML stand for?',
      choices: ['Hyper Trex Making Lasagna', 'Hypertext Markup Language', 'Hey Too Much Lettuce', 'Howdy There Mister Larry'],
      answer: 'Hypertext Markup Language'
    },
    {
      title: 'How do you call a function named "myFunction?"',
      choices: ['myFunction()', 'call myFunction', 'MyFunction()', 'myFunction'],
      answer: 'myFunction()'
    },
    {
      title: 'What will the follow code return: Boolean(10 > 9',
      choices: ['false', 'NaN', 'true', 'error'],
      answer: 'true'
    },
    {
      title: "How can you detect the client's browser name?",
      choices: ['client.navName', 'navigator.appName', 'browser.name', 'window.nav.appName'],
      answer: 'navigator.appName'
    },
    {
      title:'Which of these are the correct way to start writing a FOR loop?',
      choices: ['for (i = 0; i - 5)', 'for (i = 0; i <= 5; i++)', 'for i = to 5', 'By Googling it'],
      answer: 'for (i = 0; i <= 5; i++)'
    },
    {
      title:'Which of the follow statements about "const" is false?',
      choices: ['const can not be redeclared', 'const was introduced in ES5', 'const must be assigned', 'varibles with const have block scope'],
      answer: 'const was introduced in ES5'
    },
    {
      title:'What is the correct definition of "padding" in CSS?',
      choices: ['Is used to create space around an elements content, inside of any defined borders.', 'Is used to create space around elements, outside of any defined borders.', 'Allows you to specify the style, width, and color of an elements border', 'Is used to fluff out you code to meet the minimun code line count'],
      answer: 'Is used to create space around an elements content, inside of any defined borders.'
    },
    {
      title:'Bonus Question! JavaScript was created in 1995 by which person below?',
      choices: ['James Gosling', 'Gary Gygax', 'Hidetaka Miyazaki', 'Brendan Eich'],
      answer: 'Brendan Eich'
    },
  ]