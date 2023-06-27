'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

const renderCountry = function(data, className) {
    const languages = Object.values(data.languages);
        const currencies = Object.values(data.currencies);

        const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.official}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
                <p class="country__row"><span>🗣️</span>${languages[0]}</p>
                <p class="country__row"><span>💰</span>${currencies[0].name}</p>
            </div>
        </article>`;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // countriesContainer.style.opacity = 1;
}
/*
const getCountryAndNeighbor = function(country) {
    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        //Render country
        renderCountry(data);

        //Get neighbor country (2)
        const [neighbor] = data.borders;

        if(!neighbor) return;

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
        request2.send();

        request2.addEventListener('load', function() {
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        });
    });
};

getCountryAndNeighbor('usa');

//Callback hell
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//         console.log(response);
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// }; simplified version below

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('usa');



const getCountryData = function(country) {
    //country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if(!neighbour) return;
        
        //country 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
        console.error(`${err}`);
        renderError(`Something went wrong. ${err.message}. Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function() {
    getCountryData('usa');
});

getCountryData('aksjdfsk'); //log shows cannot read property of undefined because the object doesn't exist so it can't pull data for it