//gets the thing to display the messages in
const messageDisplay = document.querySelector('.message-container')

//gets data from the localStorage
//sets the new games array to just the games of the team with the id from the doc location
const dataString = localStorage.getItem('teams');
const teams = JSON.parse(dataString);
let params = (new URL(document.location)).searchParams;
console.log(teams)
const team = teams.filter(team => team.id == params.get('id'));

console.log(team[0].Name);
//creates name dynamically
let webTitle = document.querySelector('title');
webTitle.textContent = `${team[0].Name}  \'s Games` 
let title = document.getElementById("title");
title.textContent = `${team[0].Name}  \'s Games`

//gets areas that dynamically created elements would be appended to 
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

//makes the games without any date filter
makeGames(games);

//function decides when it is time to create a new row of columns 
function newColumns() {
    if (count % 4 === 0) {
        mostOuterColumns = document.createElement('div');
        mostOuterColumns.classList.add('columns');
    }
    //decides when there needs to be another page added for the pagination
    if (pageCount % 12 === 0 && pageCount !== 0) {
        pageNumber++;
    }
    return;
}

//function that makes the games takes in an array so that it can be called after dates have been filtered
function makeGames(gamesDisplayed) {
    pageNumber = 1;
    pageCount = 0;
    count = 0;


    //removes old games when creating new ones 
    section.replaceChildren();

    //displays each game 
    gamesDisplayed.forEach((game) => {
        //checks to see what page/column it should be on
        newColumns();
        //sets information

        let homeTeamId = game.homeTeam;
        let awayTeamId = game.awayTeam;
        let homeScore = game.homeScore;
        let awayScore = game.awayScore;
        console.log(game.date);
        let date = game.date;
        let homeTeamName = teams[homeTeamId].Name;
        let awayTeamName = teams[awayTeamId].Name;
        let homeTeamScore = game.homeScore;
        let awayTeamScore = game.awayScore;
        let homeTeamImg = document.createElement('img');
        homeTeamImg.src = teams[homeTeamId].img;
        let awayTeamImg = document.createElement('img');
        awayTeamImg.src = teams[awayTeamId].img;

        //creating the card with the game
        let outerColumn = document.createElement('div');
        outerColumn.setAttribute("class", "column is-one-quarter hidden") //adds hidden class so that not all games are displayed
        /*Pagination (it checks to see if the currentPage is the same as the page number
          (the one that this specific game is being made on), if it is then it will display this game) */
        if (currentPage === pageNumber) {
            outerColumn.classList.remove("hidden");
        }
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
    //after all the games are made, it makes the pagination
    makePages(gamesDisplayed);
}

//takes in a games array to know how many pages need to be made
function makePages(gamesDisplayed) {
    //when called again old pagination buttons will be removed
    paginationArea.replaceChildren();
    let pagination = document.createElement('ul');
    pagination.classList.add('pagination-list');
    pagination.classList.add('is-justify-content-center')
    let numPages = Math.ceil(gamesDisplayed.length / 12);
    let pages = [];
    paginationArea.appendChild(pagination);

    //is what switches the pages
    function changePage(num) {
        pages[currentPage - 1].classList.remove("is-current");
        currentPage = num;
        makeGames(gamesDisplayed);
        //makes the new current page be filled in blue
        pages[num - 1].classList.add("is-current");
    }

    //creates the back button
    const backPage = document.createElement('li');
    pagination.appendChild(backPage);
    backPage.classList.add("pagination-link");
    backPage.textContent = "<";
    //makes it go back a page when clicked, only if it is not already on page 1
    backPage.addEventListener('click', () => {
        console.log('boop');
        if (currentPage !== 1)
            changePage(currentPage - 1);
        makeGames(gamesDisplayed);
    });
    //creates all the number buttons
    for (let index = 1; index <= numPages; index++) {
        let page = document.createElement('li');
        page.classList.add("pagination-link");
        page.textContent = index;
        //changes to the specific page when the number is clicked 
        page.onclick = function () { changePage(index) }
        //stores all the pages in an array
        pages.push(page);
        pagination.appendChild(page);
    }
    //adds the blue background to the current page 
    pages[currentPage - 1].classList.add("is-current");

    //same thing as the back button except its forward
    const forwardPage = document.createElement('li');
    pagination.appendChild(forwardPage);
    forwardPage.classList.add("pagination-link");
    forwardPage.textContent = ">";
    forwardPage.addEventListener('click', () => {
        console.log('boop');
        if (currentPage !== numPages)
            changePage(currentPage + 1);
        makeGames(gamesDisplayed);
    });
}

/*filters the dates by getting the date values from the input forms,
then, checks to see if they are invalid dates (if they are not inputted or if the start is later than the date )
it adds them to a new array and remakes the games with that array*/
function filterDates() {
    let dates = document.querySelectorAll('input');
    dateStart = dates[0].value;
    dateEnd = dates[1].value;
    if (dateStart === '' || dateEnd === '') {
        showMessage('Please enter valid date.')
    } else {
        let filteredDates = [];
        games.forEach((game) => {
            if (game.date >= dateStart && game.date <= dateEnd) {
                filteredDates.push(game);
            }
        });
        currentPage = 1;
        makeGames(filteredDates);
    }
}

//Shows the message by creating a 'p' element by setting the textContent to the message and appending it to the messageDisplay area.
const showMessage = (message) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageDisplay.append(messageElement);
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
}

//opens the burger by adding the classes is-active to elements 
const openBurger = () => {
    let icon = document.getElementById('burgerButton');
    //let dropMenu = document.getElementById('teamList');
    icon.classList.toggle('is-active');
    // dropMenu.classList.toggle('is-active');
    let normalNav = document.getElementById('navbarBasicExample');
    normalNav.classList.toggle('is-active');
};