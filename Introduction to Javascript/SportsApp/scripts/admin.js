
//Gets the element to display the error messages
const messageDisplay = document.querySelector('.message-container')

//Gets the games from the localStorage
let teamData;
let games = [];
if (localStorage.getItem('games') != null) {
  games = JSON.parse(localStorage['games'])
}

//Gets teams from the localStorage
function getTeams() {
  teamData = JSON.parse(localStorage['teams']);
  console.log(teamData);
}

//function that adds games 
function addGame() {
  //Gets all the inputted values from the Ids of the forms
  let homeTeam = document.getElementById("homeTeam").value;
  let awayTeam = document.getElementById("awayTeam").value;
  let homeScore = document.getElementById("homeScore").value;
  let awayScore = document.getElementById("awayScore").value;
  let date = document.getElementById("date").value;

  console.log(homeTeam + awayTeam + homeScore + awayScore + date);

  //Makes sure there aren't any errors with the inputted information
  if (homeTeam === awayTeam) {
    showMessage('Please enter different home and away teams.');

  } else if (homeTeam === '' || awayTeam === '' || homeScore === '' || awayScore === '' || date === '') {
    showMessage('Please enter all the information correctly.');
  }
  //creates the game
  else {
    const game = {
      'homeTeam': homeTeam,
      'awayTeam': awayTeam,
      'homeScore': homeScore,
      'awayScore': awayScore,
      'date': date
    }
    getTeams();
    //adds it to the games array and the games array for the teams that played the games
    games.push(game);
    teamData[homeTeam].games.push(game);
    teamData[awayTeam].games.push(game);

    //adds wins, losses and draws to the teams (wins (3 PTS), losses (0 PTS), draws (1 PT))
    if (homeScore > awayScore) {
      teamData[homeTeam].W++;
      teamData[homeTeam].PTS += 3;
      teamData[awayTeam].L++;
    } else if (awayScore > homeScore) {
      teamData[awayTeam].W++;
      teamData[awayTeam].PTS += 3;
      teamData[homeTeam].L++;
    } else if (homeScore === awayScore) {
      teamData[homeTeam].D++;
      teamData[homeScore].PTS++;
      teamData[awayTeam].D++;
      teamData[awayTeam].PTS++;
    }

    console.log(teamData);

    //sets the information back in the local storage
    localStorage.setItem('teams', JSON.stringify(teamData));
    localStorage.setItem('games', JSON.stringify(games));
    showMessage('Game added successfully!');
  }
}

//Shows the message by creating a 'p' element by setting the textContent to the message and appending it to the messageDisplay area.
const showMessage = (message) => {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
}

//opens the burgers by adding the classes is-active to elements 
const openBurger = () => {
  let icon = document.getElementById('burgerButton');
  icon.classList.toggle('is-active');
  let normalNav = document.getElementById('navbarBasicExample');
  normalNav.classList.toggle('is-active');
};