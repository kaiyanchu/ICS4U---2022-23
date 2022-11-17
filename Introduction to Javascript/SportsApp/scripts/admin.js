
const messageDisplay = document.querySelector('.message-container')

let teamData;
 let games = [];
 if(localStorage.getItem('games') != null ){
   games = JSON.parse(localStorage['games'])
 }



function getTeams() {
   teamData = JSON.parse(localStorage['teams']);
   console.log(teamData);
}

function addGame(){
   //figure out how to make these the id or smth
   let homeTeam = document.getElementById("homeTeam").value;
   let awayTeam = document.getElementById("awayTeam").value;
   let homeScore = document.getElementById("homeScore").value;
   let awayScore = document.getElementById("awayScore").value;
   let date = document.getElementById("date").value;

   console.log(homeTeam + awayTeam + homeScore + awayScore + date);

   if(homeTeam === awayTeam){
       showMessage('Please enter different home and away Teams.');
   } if(homeTeam === '' || awayTeam === '' || homeScore === '' || awayScore === '' || date === ''){
     showMessage('Please enter all the information correctly.');
   }
   else{
       const game = {
           'homeTeam': homeTeam,
           'awayTeam': awayTeam,
           'homeScore': homeScore,
           'awayScore': awayScore,
           'date': date
       }
       getTeams();
       games.push(game);
       teamData[homeTeam].games.push(game);
       teamData[awayTeam].games.push(game);

       if(homeScore > awayScore){
         teamData[homeTeam].W++;
         teamData[awayTeam].L++;
       } else if(awayScore > homeScore){
         teamData[awayTeam].W++;
         teamData[homeTeam].L++;
       } else if(homeScore === awayScore){
         teamData[homeTeam].D++;
         teamData[awayTeam].D++;
       }

       console.log(teamData);

       localStorage.setItem('teams', JSON.stringify(teamData));
       localStorage.setItem('games', JSON.stringify(games));
       
   }


}


const showMessage = (message)=>{
const messageElement = document.createElement('p');
messageElement.textContent = message;
messageDisplay.append(messageElement);
setTimeout(()=> messageDisplay.removeChild(messageElement), 2000);
}
