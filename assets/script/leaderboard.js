const LeaderboardEl = document.querySelector('#leaderboard');
const playAgainBtn = document.querySelector('#playAgainBtn');
const clearBtn = document.querySelector('#clearBtn');


//Event to clear Leaderboard storage
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

let testData = localStorage.setItem('dontDeleteOrSomething', 'testValue')

let scoreData = localStorage.getItem("scoreData");
scoreData = JSON.parse(scoreData);

if(scoreData !== null) {
    for(i = 0; i < scoreData.length; i++) {
        var createLiEl = document.createElement('li');
        createLiEl.textContent = `${scoreData[i].initials} ${scoreData[i].score}`
        LeaderboardEl.appendChild(createLiEl);
        console.log(`${scoreData[i].initials}`);
    }
};

playAgainBtn.addEventListener('click', function(){
    window.location.replace('./index.html');
});

