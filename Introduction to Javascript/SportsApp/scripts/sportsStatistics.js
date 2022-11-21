
let teams = [];
if(localStorage.getItem('teams') == null ){
    let teamData;
    let team = {};
        team['Name'] = 'AFC Bournemouth';
        team['id'] = 0;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = []; 
        team['img'] = "../images/AFC Bournemouth.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Arsenal';
        team['id'] = 1;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Arsenal.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Aston Villa';
        team['id'] = 2;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Aston Villa.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Brentford';
        team['id'] = 3;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Brentford.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Brighton & Hove Albion';
        team['id'] = 4;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Brighton.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Chelsea';
        team['id'] = 5;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Chelsea.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Crystal Palace';
        team['id'] = 6;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Crystal Palace.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Everton';
        team['id'] = 7;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Everton.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Fulham';
        team['id'] = 8;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Fulham.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Leeds';
        team['id'] = 9;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Leeds.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Leicester';
        team['id'] = 10;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Leicester.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Liverpool';
        team['id'] = 11;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Liverpool.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Manchester City';
        team['id'] = 12;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Manchester City.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Manchester United';
        team['id'] = 13;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Manchester United.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Newcastle United';
        team['id'] = 14;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Newcastle.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Nottingham Forest';
        team['id'] = 15;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Nottingham.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Southampton';
        team['id'] = 16;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Southampton.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Tottenham Hotspur';
        team['id'] = 17;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Tottenham Hotspur.png"
        teams.push(team);
    team = {};
        team['Name'] = 'West Ham United';
        team['id'] = 18;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/West Ham.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Wolverhampton Wanderers';
        team['id'] = 19;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        team['games'] = [];
        team['img'] = "../images/Wolverhampton Wanderers.png"
        teams.push(team);
    console.log(teams);
    localStorage.setItem('teams', JSON.stringify(teams));
}else{
    teams = JSON.parse(localStorage['teams']);
}





createTable(teams);

 function createTable(teams){
     let tableBody = document.querySelector('#standings tbody');
     tableBody.replaceChildren();    
     teams.forEach((team) => {
         const row = document.createElement('tr');
         let td = document.createElement('td');
         const img = document.createElement("img");
         teamName = team.Name;
         img.src = team.img;
         img.classList.add('team-logo')
         td.textContent = team.Name + " ";
         td.appendChild(img);
         row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.W;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.L;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.D;
        row.appendChild(td);

        tableBody.appendChild(row);
    });
}

let isAtoZ;
let isMostWins;
let isMostLosses;
let isMostD;

    function sort(field){
        if (field === 'Name'){
            if(!isAtoZ){
                isAtoZ = true;
                teams = teams.sort((teamA, teamB)=>{
                    return(teamA.Name < teamB.Name ? -1 : 1)
                })
            }else{
                teams = teams.sort((teamA, teamB)=>{
                    isAtoZ = false;
                    return(teamA.Name > teamB.Name ? -1 : 1)
                })
            }


        }else if(field ==='D'){
            if(!isMostD){
                isMostD = true;
                teams = teams.sort((teamA, teamB)=>
                    (teamB.D - teamA.D)
                )
            }else{
                isMostD = false;
                teams = teams.sort((teamA, teamB)=>
                    (teamA.D - teamB.D)
                )
            }

        }else if(field === 'Wins'){
            if(!isMostWins){
                isMostWins = true;
                teams = teams.sort((teamA, teamB) =>
                (teamB.W - teamA.W))
            } else{
                isMostWins = false;
                teams = teams.sort((teamA, teamB) =>
                (teamA.W - teamB.W))
            }
        }else if(field === 'Losses'){
            if(!isMostLosses){
                isMostLosses = true;
                teams = teams.sort((teamA, teamB) =>
                     (teamB.L - teamA.L)
                )
            }else{
                isMostLosses = false;
                teams = teams.sort((teamA, teamB) =>
                     (teamA.L - teamB.L)
                )
            }

        }
        createTable(teams);
     }
