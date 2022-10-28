const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')
const wordle = 'SUPER';

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

let currentRow = 0;
let currentTile = 0;
let gameOver = false;

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex);
    guessRow.forEach((guess, guessIndex) =>{
        const tileElement = document.createElement('div');
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex);
        tileElement.classList.add('tile');
        rowElement.append(tileElement);
        })
    tileDisplay.append(rowElement);

})






keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement);
})



const handleClick = (letter) => {
    console.log('clicked', letter);
    if(letter === '«'){
        console.log('delete letter');
        deleteLetter();
        console.log('guessRows', guessRows);
        return;
    }
    if (letter === 'ENTER'){
        console.log('check row');
        checkRow();
        console.log('guessRows', guessRows);
        return;
    }
    addLetter(letter);
    console.log('guessRows', guessRows);
}

const addLetter = (letter) => {
    if(currentTile < 5 && currentRow < 6){
        const tile =  document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter;
        tile.setAttribute('data', letter);
        currentTile++;
    }
}

const deleteLetter = () => {
    if(currentTile > 0){
        currentTile --;
        const tile =  document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = '';
        guessRows[currentRow][currentTile] = '';
        tile.setAttribute('data', '');
    }    
}

const checkRow = () => {
    const guess =  guessRows[currentRow].join('');
    if(currentTile > 4){
       console.log('guess is ' + guess, 'wordle is ' + wordle);
       filpTile();
       if(wordle == guess){
        showMessage('Magnificent!');
        isGameOver = true;
        return;
       } else{
            if(currentRow >= 5){
                isGameOver = false;
                showMessage('Game Over');
                return;
            }
            if(currentRow < 5){
                currentRow ++;
                currentTile = 0;
            }
       }
    }
}

const showMessage = (message)=>{
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageDisplay.append(messageElement);
    setTimeout(()=> messageDisplay.removeChild(messageElement), 2000);
}
const addColortoKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter);
    key.classList.add(color);
}

const filpTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;
    let checkWordle = wordle;
    const guess = [];

    rowTiles.forEach(tile =>{
        guess.push({ letter: tile.getAttribute('data'), color: 'grey-overlay'})
    })

    guess.forEach((guess, index) => {
        if(guess.letter == wordle[index]){
            guess.color = 'green-overlay'
            checkWordle = checkWordle.replace(guess.letter, '');
        }
    })

    guess.forEach(guess =>{
        if(checkWordle.includes(guess.letter)){
            guess.color = 'yellow-overlay';
            checkWordle= checkWordle.replace(guess.letter,'');
        }
    })

    rowTiles.forEach((tile, index) => {
    //    const dataLetter =  tile.getAttribute('data');
        setTimeout(() =>{
            tile.classList.add(guess[index].color); 
            addColortoKey(guess[index].letter, guess[index].color);
            // tile.classList.add('flip');
            // if(dataLetter == wordle[index]){
            //     tile.classList.add('green-overlay');
            //     addColortoKey(dataLetter, 'green-overlay')
            //    } else if (wordle.includes(dataLetter)){
            //     tile.classList.add('yellow-overlay');
            //     addColortoKey(dataLetter, 'yellow-overlay')

            //    }else{
            //     tile.classList.add('grey-overlay');
            //     addColortoKey(dataLetter, 'grey-overlay')

            //    }

        }, 500 * index)

    })
}