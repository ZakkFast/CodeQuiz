//Queryselectors for DOM manipulation
const LeaderboardEl = document.querySelector('#leaderboard');
const playAgainBtn = document.querySelector('#playAgainBtn');
const clearBtn = document.querySelector('#clearBtn');


//Creating an event on click to clear out the scoreData from local storage 
//at user request
clearBtn.addEventListener('click', function(){
    let clearPrompt = confirm('Are you sure you wish to clear your scores?');
    if(clearPrompt === true){
        localStorage.removeItem('scoreData');
        alert('Data cleared')
        location.reload
    }else {
        alert('Data not cleared');
        return;
    }
});

//Here we are getting our scores and intials out of local storage
let scoreData = localStorage.getItem("scoreData");
scoreData = JSON.parse(scoreData);

//If there is scoreData then we will create an li, run through the loop, and render all
//availble data
if(scoreData !== null) {
    for(i = 0; i < scoreData.length; i++) {
        var createLiEl = document.createElement('li');
        createLiEl.textContent = `${scoreData[i].initials}: ${scoreData[i].score}`
        LeaderboardEl.appendChild(createLiEl);
        console.log(`${scoreData[i].initials}`);
    }
};

//Button to take us back to the main page to play again
playAgainBtn.addEventListener('click', function(){
    window.location.replace('./index.html');
});

