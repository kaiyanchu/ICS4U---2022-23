const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7c4c5456c0mshe04ee7e845f4f66p189db0jsnb13e0dec9d09',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};


async function fetchAsync(url) {
    let value;
    let response = await fetch(url, options);
    let data = await response.json().then(function (data) {
        const list = data.d;
        list.map((item) =>{
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
    console.log(value)
    return value;
}

fetchAsync('https://imdb8.p.rapidapi.com/auto-complete?q=taylor%20swift');