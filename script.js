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
        countriesContainer.style.opacity = 1;
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

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {if(!response.ok) {
        throw new Error(`${errorMsg} (${response.status})`)
    }
    return response.json();
    });
};

// const getCountryData = function(country) {
//     //country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//         console.log(response);

//         if(!response.ok) {
//             throw new Error(`Country not found (${response.status})`)
//         }
//         return response.json()
//     })
//     .then(data => {
//         renderCountry(data[0]);
//         //const neighbour = data[0].borders[0];
//         const neighbour = 'asdfads';

//         if(!neighbour) return;
        
//         //country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(`Country not found (${response.status})`)
//         }
//         return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//         console.error(`${err}`);
//         renderError(`Something went wrong. ${err.message}. Try again!`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function(country) {
    //country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if(!neighbour) throw new Error('No neighbor found!');
        
        //country 2
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
    })
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

getCountryData('australia');

////////////////////////////////////////////////////////////
//Coding challenge 3
const whereAmI = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},&{lng?geoit=json`)
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(res => {
        if(!res.ok) {
            throw new Error(`Country not found (${res.status})`)
        }
        return res.json();
        })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} emoji`));
};

whereAmI(52.508, 13.381);
//whereAmI(19.307, 72.873);
//whereAmI(-33.933, 18.474);

//////////////////////////////////////////
//Event loop in practice

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resovled promise 2').then(res => {
    for(let i = 0; i < 100000000; i++) {}
    console.log(res);
});

console.log('Test end');

//////////////////////////////////////////
//Building promises

const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening');

    setTimeout(function() {
        if(Math.random() >= 0.5) {
            resolve('You WIN!');
        } else {
            reject(new Error('You lost your money'));
        }
    }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => console.log('I waited for 1 second'));

//Reworking the callback hell triangle from above with promises
wait(1).then(() => {
    console.log('1 second passed');
    return wait(1);
}).then(() => {
    console.log('2 seconds passed');
    return wait(1);
}).then(() => {
    console.log('3 seconds passed');
    return wait(1);
}).then(() => {
    console.log('4 seconds passed');
    return wait(1);
});

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));


const getPosition = function() {
    return new Promise(function(resolve, reject) {
        //navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
        //Simpler way to write the same code
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

//getPosition().then(pos => console.log(pos));

const whereAmI = function() {
    getPosition().then(pos => {
        const {latitude: lat, longitude: lng} = pos.coords;

        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(res => {
        if(!res.ok) {
            throw new Error(`Country not found (${res.status})`)
        }
        return res.json();
        })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} emoji`));
};

btn.addEventListener('click', whereAmI);

////////////////////////////////////////////////////
//Coding Challenge 2

const imgContainer = document.querySelector('.images');

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

createImage('img/img-1.jpg').then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
})
.then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
})
.catch(err => console.error(err));
*/

///////////////////////////////////////
//Consuming promises with Async/Await

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        //navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
        //Simpler way to write the same code
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function(country) {
    //Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //Country data
    //fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));
    //Same code as below but using async/await

    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
};

whereAmI();
console.log('FIRST');