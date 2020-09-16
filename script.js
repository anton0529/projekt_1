const numberOfFilms = prompt('Сколько фильмов вы уже смотрели?');

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const a = prompt ('Один из просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt ('Один из просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);

const num = 510;

switch(num) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 50:
        console.log('right');
        break;
    default:
        console.log('wtf');
        break;
}
