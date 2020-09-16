const baseUrl = 'https://ghibliapi.herokuapp.com/films/';

function getGhibli() {
    fetch(baseUrl)
        .then(ghibliInfo => ghibliInfo.json())
        .then(ghibliInfoJsonified => displayGhibliInfo(ghibliInfoJsonified));
}

function displayGhibliInfo(ghibliInfo) {
    let heading = document.getElementById('title');
    heading.className = 'title';
    heading.innerText = 'Ghibli Movies';

    // create new element (div with specific card container class)
    // append a style to this div
    // append the text (maybe p tag with the data to be displayed or ul
    //repeat for each object in the array

    // MAIN SECTION FOR MOVIE DISPLAY
    let mainDivContainer = document.querySelector('div');
    mainDivContainer.className = 'container';

    // LOOP THROUGH MOVIE DATA
    for (let i = 0; i < ghibliInfo.length; i++) {   
        let card = document.createElement('div');
        card.className = 'card';

        // CARD BODY
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // CARD HEADER
        let header4 = document.createElement('h4');
        header4.className = 'card-title';

        // film title goes here
        header4.innerText = ghibliInfo[i].title;

        let filmDirectorYear = document.createElement('h6');
        filmDirectorYear.className = 'class-subtitle mb-2 text-muted filmDirYear';
        //film director and year goes here
        filmDirectorYear.innerText = "Directed by " + ghibliInfo[i].director + " in " + ghibliInfo[i].release_date;
        filmDirectorYear.style = '';

        let filmDescription = document.createElement('p');
        filmDescription.className = 'card-text';
        //film description goes here
        filmDescription.innerText = ghibliInfo[i].description;

        // appending children
        cardBody.appendChild(header4);
        cardBody.appendChild(filmDirectorYear);
        cardBody.appendChild(filmDescription);
        card.appendChild(cardBody);

        mainDivContainer.appendChild(card);
    }

    // for(eachValueObj of ghibiInfo){
        console.log(mainDivContainer); 
    // }

}

getGhibli();