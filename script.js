let numberOfFilms


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?');
    }

}


start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    actors: [],
    privat: false
};

const a = prompt('Один из просметренных фильмов', ''),
    b = prompt('На сколько оцените это?', ''),
    c = prompt('Один из последних просмотренных фильмов', ''),
    d = prompt('На сколько оцените это?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);