'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

// Автоматизировать вопросы пользователю про фильмы при помощи цикла (for),
// добавить проверки

// for (let i = 0; i < 2; i++) {
//     const q = prompt('Один из последних просмотренных фильмов?', ''),
//           a = prompt('На сколько оцените его?', '');

//     if (q !== '' && a !== '' &&
//         q !== null && a !== null &&
//         q.length <= 50 && a.length <= 50) {
//         personalMovieDB.movies[q] = a;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


// Автоматизировать вопросы пользователю про фильмы при помощи цикла (do while),
// добавить проверки

do {
    const q = prompt('Один из последних просмотренных фильмов?', ''),
          a = prompt('На сколько оцените его?', '');

    if (q !== '' && a !== '' &&
        q !== null && a !== null &&
        q.length <= 50 && a.length <= 50) {
        console.log('done');
        personalMovieDB.movies[q] = a;
    } else {
        console.log('error');
    }
} while (Object.keys(personalMovieDB.movies).length !== 2);


// Добавить проверки personalMovieDB.count

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}