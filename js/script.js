'use strict';

let numberOfFilms;

// Разбить код предыдущего урока на функции

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const q = prompt('Один из последних просмотренных фильмов?', ''),
              a = prompt('На сколько оцените его?', '');
    
        if (q !== '' && a !== '' &&
            q !== null && a !== null &&
            q.length <= 50 && a.length <= 50) {
            personalMovieDB.movies[q] = a;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

// Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB(isPrivate) {
    // switch (personalMovieDB.privat) {
    //     case false:
    //         console.log(personalMovieDB);
    //         break;
    //     default:
    //         console.log('Ok!');
    //         break;
    // }
    if (!isPrivate) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let q = prompt(`Ваш любимый жанр под номером ${i}`);

        if (q != '' && q != null) {
            personalMovieDB.genres[i - 1] = q;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();