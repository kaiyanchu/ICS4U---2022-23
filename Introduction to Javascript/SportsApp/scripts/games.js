let games = [];
games = JSON.parse(localStorage.getItem(['games']));
const teams = JSON.parse(localStorage.getItem(['teams']));
let section = document.querySelector('section');

console.log(games);


    games.forEach((game) => {
        let card = document.createElement('card');
        card.classList.add("card")
        let homeTeamId = game.homeTeam;
        let awayTeamId = game.awayTeam;
        let homeScore = game.homeScore;
        let awayScore = game.awayScore;
        let date = game.date;


        let homeTeamName = teams[homeTeamId].Name;
        let awayTeamName = teams[awayTeamId].Name;

        let homeTeamImg = document.createElement('img');
        homeTeamImg.src = teams[homeTeamId].img;
        let awayTeamImg = document.createElement('img');
        awayTeamImg = teams[awayTeamId].img;


        console.log(homeTeamId + awayTeamId + homeScore + awayScore + date + homeTeamName + awayTeamName);


        card.append(homeTeamImg);
        card.append(homeTeamName);
        card.append(homeScore);
        card.append(awayTeamImg);
        card.append(awayTeamName);
        card.append(awayScore);
        card.append(date);

        section.append(card);

    
})

