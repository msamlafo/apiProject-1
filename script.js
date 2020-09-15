const baseUrl = 'https://ghibliapi.herokuapp.com/films/';

function getGhibi() {
    fetch(baseUrl)
        .then(ghibiInfo => ghibiInfo.json())
        .then(ghibiInfoJsonified => displayGhibiInfo(ghibiInfoJsonified));
}

function displayGhibiInfo(ghibiInfo) {
    let heading = document.querySelector('h1');
    heading.className = 'title';
    heading.innerText = 'Ghibi Topic';

    // create new element (div with  specific card container class)
    // append a style to this div
    // append the text (maybe p tag with the data to be displayed or ul, you decide
    //repeat for each object in the array

    let mainDivContainer = document.querySelector('div');
    mainDivContainer.className = 'container';

    for (let i = 0; i < ghibiInfo.length; i++) {   
        let card = document.createElement('div');
        card.className = 'card';
        card.style = 'width: 18rem; margin: 1em; height: 300px; padding: 4px';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';


        let header5 = document.createElement('h5');
        header5.className = 'card-title';
        header5.style = 'font-family: lobster, cursive; color: purple';
        // film title goes here
        header5.innerText = ghibiInfo[i].title;

        let filmDirectorYear = document.createElement('h6');
        filmDirectorYear.className = 'class-subtitle mb-2 text-muted';
        //film director and year goes here
        filmDirectorYear.innerText = "Directed by " + ghibiInfo[i].director + " in " + ghibiInfo[i].release_date;

        let filmDescription = document.createElement('p');
        filmDescription.className = 'card-text';
        //film description goes here
        filmDescription.innerText = ghibiInfo[i].description;

        // appending children
        cardBody.appendChild(header5);
        cardBody.appendChild(filmDirectorYear);
        cardBody.appendChild(filmDescription);
        card.appendChild(cardBody);

        mainDivContainer.appendChild(card);
    }

    // for(eachValueObj of ghibiInfo){
    //     console.log(eachValueObj); 
    // }

}

getGhibi();