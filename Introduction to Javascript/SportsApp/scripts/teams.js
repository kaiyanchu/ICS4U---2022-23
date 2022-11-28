   //function start() {
      const dataString = localStorage.getItem('teams');
      const teams = JSON.parse(dataString);
      let params = (new URL(document.location)).searchParams;
      console.log(teams)
      const team = teams.filter(team => team.id == params.get('id'));

      console.log(team[0].Name);
      let title = document.getElementById("title");
      title.textContent = `${team[0].Name}  \'s Games`

      
     // document.querySelector('#test').textContent = team[0].Name;



     let section = document.querySelector('section');
      let paginationArea = document.getElementById('paginationArea');
      let games = team[0].games;
      //makes the games go in order of date
     games = games.sort((gameA, gameB) => gameA.date > gameB.date ? -1 : 1);
      let mostOuterColumns;
      let count = 0;
      let currentPage = 1;
      let pageCount = 0;
      let pageNumber = 1;
      makeGames(games);

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

   
function makeGames(gamesDisplayed){
    pageNumber = 1;
    pageCount = 0;
    count = 0;

      
    
   section.replaceChildren();    

   gamesDisplayed.forEach((game) => {
       newColumns();
       let homeTeamId = game.homeTeam;
       let awayTeamId = game.awayTeam;
       let homeScore = game.homeScore;
       let awayScore = game.awayScore;
       console.log(game.date);
       let date = game.date;
      // let date = new Date(game.date).toLocaleDateString();
       
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
   makePages(gamesDisplayed);
}
  
function makePages(gamesDisplayed){
    paginationArea.replaceChildren();
    let pagination = document.createElement('ul');
        pagination.classList.add('pagination-list');
        pagination.classList.add('is-justify-content-center')
    let numPages = Math.ceil(gamesDisplayed.length/12);
    let pages = [];
    paginationArea.appendChild(pagination);

    function changePage(num){
            pages[currentPage-1].classList.remove("is-current");
            currentPage = num;
            makeGames(gamesDisplayed);
            pages[num-1].classList.add("is-current"); 
    }

    const backPage = document.createElement('li');
    pagination.appendChild(backPage);
    backPage.classList.add("pagination-link");
    backPage.textContent = "<";
    backPage.addEventListener('click', () => { 
        console.log('boop');
        if(currentPage !== 1)
            changePage(currentPage - 1);
        makeGames(gamesDisplayed);
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
        pages[currentPage-1].classList.add("is-current");

    const forwardPage = document.createElement('li');
    pagination.appendChild(forwardPage);
    forwardPage.classList.add("pagination-link");
    forwardPage.textContent = ">";
    forwardPage.addEventListener('click', () => { 
        console.log('boop');
        if(currentPage !== numPages)
            changePage(currentPage + 1);
        makeGames(gamesDisplayed);
    });
}


function filterDates(){
    let dates = document.querySelectorAll('input');
    dateStart = dates[0].value;
    dateEnd = dates[1].value;
    if(dateStart === '' || dateEnd=== ''){
        showMessage('Please enter valid date.')
    }else{
        let filteredDates = [];
        games.forEach((game) => {
            if(game.date>= dateStart && game.date <= dateEnd){
                filteredDates.push(game);
            }
        });
        //games = filteredDates;

        currentPage=1;
        makeGames(filteredDates);
        
   }
}

const openBurger = () => {
    let icon = document.getElementById('burgerButton');
    //let dropMenu = document.getElementById('teamList');
    icon.classList.toggle('is-active');
   // dropMenu.classList.toggle('is-active');
   let normalNav = document.getElementById('navbarBasicExample');
   normalNav.classList.toggle('is-active');
  };


  // }