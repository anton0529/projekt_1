
const personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieBD.count = +prompt('Сколько фильмов вы уже смотрели?');
    
        while (personalMovieBD.count == '' || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
            personalMovieBD.count = +prompt('Сколько фильмов вы уже смотрели?');
    
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотреных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieBD.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieBD.count < 10) {
            console.log('Просмотрено давольно мало фильмов');
        } else if(personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieBD.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieBD);
        }
    },
    togleVisibleMyDB: function(){
        if (personalMovieBD.privat){
           personalMovieBD.privat = false; 
        } else {
            personalMovieBD.privat = true;
        }
    },

    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieBD.genres[i - 1] = genre;

            }
        
        }
        personalMovieBD.genres.forEach((item, i) => {
            console.log(`Люимый жанр ${i + 1} - это ${item}`)
        });
    }

};
