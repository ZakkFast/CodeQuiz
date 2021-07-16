//Questions, Choices, and Answers.
const questions = [
    {
      title: 'HTML is a programming langauge.',
      choices: ['True', 'False'],
      answer: 'False'
    },
    {
      title: 'What does CSS stand for?',
      choices: ['Computational Systems Syntax', 'Cool-Dude Steven Segall', 'Casscading Style Sheet', 'Counter Strike Source'],
      answer: 'Casscading Style Sheet'
    },
    {
      title:'JavaScript was created in 1995 by which person below?',
      choices: ['James Gosling', 'Gary Gygax', 'Hidetaka Miyazaki', 'Brendan Eich'],
      answer: 'Brendan Eich'
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
      choices: ['const can not be redeclared', 'const was introduced in ES5', 'const must be assigned',],
      answer: 'const was introduced in ES5'
    },
    {
      title:'What is the correct definition of "padding" in CSS?',
      choices: ['Is used to create space around an elements content, inside of any defined borders.', 'Is used to create space around elements, outside of any defined borders.', 'Allows you to specify the style, width, and color of an elements border', 'Is used to fluff out you code to meet the minimun code line count'],
      answer: 'Is used to create space around an elements content, inside of any defined borders.'
    },
    {
      title:'Which CSS property controls the text size?',
      choices:['font-style', 'font-size', 'text-size', 'text-adjust'],
      answer:'font-size',
    },
    {
      title:'What was Javascript orginally called during development?',
      choices:['Emerald', 'Java2', 'Mocha', 'GenScripter'],
      answer:'Mocha',
    },
    {
      title:'Node.js is ___',
      choices:['a runtime enviroment', 'ran exclusivly on front-end', 'based on the V6 JavaScript Engine', 'runs on the tears of new developers'],
      answer:'a runtime enviroment',
    },
    {
      title:'Given the follow var "var fruits = ["apples", "oranges", "pears"], what will be returned if we log "fruits[1]"?',
      choices:['apples', 'oranges', 'pears', 'undefined'],
      answer:'oranges',
    },
    {
      title:'How many days was Javascript in devolpment before being release?',
      choices:['22', '265', '10', '87'],
      answer:'10',
    },
    {
      title:'What was the inital release date for CSS',
      choices:['March 16, 1999', 'December 17th, 1996', 'July 4th, 2005', 'April 15th, 1452'],
      answer:'December 17th, 1996',
    },
    {
      title:'What is the proper file extension for a JavaScript file?',
      choices:['.Java', '.JavaScript', '.js', '.j'],
      answer:'.js',
    },
    {
      title:'What does ECMA stand for?',
      choices:['European Computer Manufacturers Association', 'Edgy Cats Meowing Always', 'Euro Compact Machine Assist'],
      answer:'European Computer Manufacturers Association',
    },
    {
      title:'The first web page was made by Tim Berners-Lee and was dedicated to information on the World Wide Web project. It was released in what year?',
      choices:['1988', '1996', '1972', '1991'],
      answer:'1991',
    },
    {
      title:'DOM stand for Document Objective Model',
      choices:['True', 'False'],
      answer:'False',
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
let secondsLeft = 120
let holdInterval = 0
const penatly = 5

//Create Elements
const liCreate = document.createElement('li')
const ulCreate = document.createElement('ul')

// Scoring and Questions 
let score = 0
let questionIndex = 0

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
        finish()
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
    finish();
    createDiv.textContent = `You've finished. You answered ${score}/${questions.length} questions correctly!`
  } else {
    populate(questionIndex);
  }
  questionsDivEl.appendChild(createDiv)
}

function finish(){
  questionsDivEl.textContent = '';
  timerEl.textContent = '';

  //Creating Header
  const createHeaderEl = document.createElement('h1');
  createHeaderEl.setAttribute('id', createHeaderEl);
  createHeaderEl.textContent = 'Nice job!';

  questionsDivEl.appendChild(createHeaderEl);

  //Creating Text
  const createTextEl =document.createElement('p');
  createTextEl.setAttribute('id', 'createTextEl');

  questionsDivEl.appendChild(createTextEl);

  //Calculate Final Score
  if(secondsLeft >= 0) {
    var timeLeft = secondsLeft;
    const createTextEl2 = document.createElement('p');
    clearInterval(holdInterval);
    createTextEl2.textContent = `Final Score:${timeLeft}`;

    questionsDivEl.appendChild(createTextEl2);
  }

  //Creating Label
  const createlabelEl = document.createElement('label');
  createlabelEl.setAttribute('id', 'createlabelEl');
  createlabelEl.textContent = '';

  questionsDivEl.appendChild(createlabelEl);

  //Create Input
  const createInputEl = document.createElement('input');
  createInputEl.setAttribute('type', 'text');
  createInputEl.setAttribute('id', 'createInputEl');
  createInputEl.textContent ='';

  questionsDivEl.appendChild(createInputEl);

  //Create Submit Button
  const createSubmitEl = document.createElement('button');
  createSubmitEl.setAttribute('type', 'submit');
  createSubmitEl.setAttribute('id', 'submitButtonEl');
  createSubmitEl.textContent = 'Sumbit';

  questionsDivEl.appendChild(createSubmitEl);

  //Event to capture initials and score and put them into local storage
  createSubmitEl.addEventListener('click', function(){
    let initials = createInputEl.value;

    if (initials === null) {
      console.log('test');

    }else {
      var finalScore = {
        initials: initials,
        score: timeLeft
      }
      console.log(finalScore);
      let scoreData = localStorage.getItem('scoreData');
      if (scoreData === null) {
        scoreData = [];
      }else {
        scoreData = JSON.parse(scoreData);
      }
      scoreData.push(finalScore);
      const newScore = JSON.stringify(scoreData);
      localStorage.setItem('scoreData', newScore);
      // Takes user to Leaderboard page
      window.location.replace('./Leader-board.html')
    }
  })
}
//Zakk Fast