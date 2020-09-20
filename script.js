let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?');

    }
}
start();

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

function rememberMyFilms () {
    for ( let i = 0; i < 2; i++) {
        const a = prompt ('Один из просмотреных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieBD.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieBD.count < 10) {
        console.log('Просмотрено давольно мало фильмов');
    } else if(personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieBD.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieBD);
    }
}
showMyDB(personalMovieBD.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieBD.genres[i - 1] = genre;
    }
}
writeYourGenres();