//Questions, Choices, and Answers.
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



// Selectors
const currentTimeEl = document.querySelector('#currentTime')
const timerEl = document.querySelector('#startTime')
const questionsDivEl = document.querySelector('#questionsDiv')
const wrapperEl = document.querySelector('#wrapper')
const questionsTextEl = document.querySelector('#questionsText')
const choicesUlEl = document.querySelector('#choicesUl')

//Timer varibles
let secondsLeft = 25
let holdInterval = 0
const penatly = 5

//Create Elements
const liCreate = document.createElement('li')
const ulCreate = document.createElement('ul')

// Scoring and Questions 
let score = 0
let questionIndex = 0


// Functions

// Timer.. I think? 
timerEl.addEventListener('click', function(){
  timerEl.style.display = 'none'
  if(holdInterval === 0) {
    holdInterval = setInterval(function(){
      secondsLeft--;
      currentTimeEl.textContent = `${secondsLeft} seconds left!`
      
      if(secondsLeft <= 0) {
        clearInterval(holdInterval);
        currentTimeEl.textContent = `Time's up!`
      }
    }, 1000)
  } populate(questionIndex);
})





function populate(questionIndex) {
  // Clears screen
  questionsDivEl.innerHTML = "";
  ulCreate.innerHTML = "";
  // Loops through info in array
  for (var i = 0; i < questions.length; i++) {
    // Appends question
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDivEl.textContent = userQuestion;
  }
  // populates each choice
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare));
  })
}

function compare(event){
  var element =event.target;
  if(element.matches('li')) {
    var createDiv = document.createElement('div');
    createDiv.setAttribute('id', 'createDiv');
    //Correct conditional
    if (element.textContent === questions[questionIndex].answer){
      score++;
      createDiv.textContent = `Correct!`
      //Incorrect conditional
    } else {
      //deduct time for score
      secondsLeft = secondsLeft - penatly;
      createDiv.textContent = `Incorrect! The correct answer is ${questions[questionIndex].answer}`
    }
  }
  // Finds out which question the user is on
  questionIndex++;

  if(questionIndex >= questions.length) {
    //finish function will display user stats
    test1();
    createDiv.textContent = `You've finished. You answered a ${score}/${questions.length} correct!`
  } else {
    populate(questionIndex);
  }
  questionsDivEl.appendChild(createDiv)
}

function test1(){
  console.log('working')
}

// function finish(){

// }
  
  
  // let div = document.createElement('div');
  //   div.innerHTML = '<p>Created Example</p>'
  //   document.body.appendChild(div)
  
  
  //   //Remove h1 on start
  
  //   questions.input.choices
  
  // questionIndex++;


  // function populate(input){
//   questionsTextEl.innerHTML = questions[input].title;
//   for (i = 0; i < questions[input].choices.length; i++){
//     //populate list with question choices length i++
//     let listItem = document.createElement('li')
//     listItem.textContent = questions[input].choices[i]
//     listItem.addEventListener('click', test1)
//     choicesUlEl.appendChild(listItem)
//   }
// }


  /*
          ===== write compare next question function add to listItem Event

  */