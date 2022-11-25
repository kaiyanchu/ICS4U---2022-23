let games = [];
games = JSON.parse(localStorage.getItem(['games']));
const teams = JSON.parse(localStorage.getItem(['teams']));
let section = document.querySelector('section');
let paginationArea = document.getElementById('paginationArea');
let mostOuterColumns;
let count = 0;
let currentPage = 1;
let pageCount = 0;
let pageNumber = 1;

makeGames();

console.log(games);

    function newColumns(){
        if(count%4 === 0){
             mostOuterColumns = document.createElement('div');
             mostOuterColumns.classList.add('columns');
        }

        if(pageCount%12 === 0 && pageCount !==0){
             pageNumber++;
        }
        return;
        
  
    }

function makeGames(){
     pageNumber = 1;
     pageCount = 0;
     count = 0;

       
     
     section.replaceChildren();    

    games.forEach((game) => {
        newColumns();
        let homeTeamId = game.homeTeam;
        let awayTeamId = game.awayTeam;
        let homeScore = game.homeScore;
        let awayScore = game.awayScore;
        console.log(game.date);
        let date = new Date(game.date).toLocaleDateString();
        
        let homeTeamName = teams[homeTeamId].Name;
        let awayTeamName = teams[awayTeamId].Name;
        let homeTeamScore = game.homeScore;
        let awayTeamScore = game.awayScore;
        
        let homeTeamImg = document.createElement('img');
        homeTeamImg.src = teams[homeTeamId].img;
        let awayTeamImg = document.createElement('img');
        awayTeamImg.src = teams[awayTeamId].img;

        let outerColumn = document.createElement('div');
        outerColumn.setAttribute("class", "column is-one-quarter hidden")
        //outerColumn.classList.add({pageNumber});
        let card = document.createElement('div');
        card.classList.add("card");
        let content = document.createElement('div');
        content.classList.add('card-content');
        let datePrint = document.createElement('p');
        datePrint.setAttribute("class", 'is-flex is-justify-content-center');
        let column = document.createElement('div');
        column.classList.add("columns")
        let column1 = document.createElement('div');
        column1.setAttribute("class", "column is-flex is-flex-direction-column is-align-items-center");
        let column2 = document.createElement('div');
        column2.setAttribute("class", "column is-flex is-flex-direction-column is-align-items-center");

 

        if(currentPage === pageNumber){
            outerColumn.classList.remove("hidden");
        }


        let hName = document.createElement('p');
        hName.textContent = homeTeamName;
        let aName = document.createElement('p');
        aName.textContent = awayTeamName;
        let hScore = document.createElement('p');
        hScore.textContent = homeTeamScore;
        let aScore = document.createElement('p');
        aScore.textContent = awayTeamScore;

        datePrint.textContent = date;

        section.append(mostOuterColumns);
        mostOuterColumns.appendChild(outerColumn);
        outerColumn.appendChild(card);
        card.appendChild(content);
        content.appendChild(datePrint);
        content.appendChild(column);
        column.appendChild(column1);
        column.appendChild(column2);
        column1.appendChild(homeTeamImg);
        column1.appendChild(hName);
        column1.appendChild(hScore);

        column2.appendChild(awayTeamImg);
        column2.appendChild(aName);
        column2.appendChild(aScore);
        count++;
        pageCount++;

        console.log(homeTeamId + awayTeamId + homeScore + awayScore + date + homeTeamName + awayTeamName);
    
})
}


function changePage(num){
    currentPage = num;
    makeGames();
}

    let pagination = document.createElement('ul');
        pagination.classList.add('pagination-list');
    let numPages = Math.ceil(games.length/12);
    let pages = [];
    paginationArea.appendChild(pagination);


    const backPage = document.createElement('li');
    pagination.appendChild(backPage);
    backPage.classList.add("pagination-link");
    backPage.textContent = "<";
    backPage.addEventListener('click', () => { 
        console.log('boop');
        if(currentPage !== 1)
            currentPage--;
        makeGames();
    });

        for (let index = 1; index <= numPages; index++) {
            let page = document.createElement('li');
            page.classList.add("pagination-link");
            page.textContent= index;
            page.onclick = function(){changePage(index)}
           // page.addEventListener('click', () => changePage(index));
            pages.push(page);
            pagination.appendChild(page);
        }

    const forwardPage = document.createElement('li');
    pagination.appendChild(forwardPage);
    forwardPage.classList.add("pagination-link");
    forwardPage.textContent = ">";
    forwardPage.addEventListener('click', () => { 
        console.log('boop');
        if(currentPage !== numPages)
            currentPage++;
        makeGames();
    });
        

