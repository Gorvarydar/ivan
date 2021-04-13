let numberOfFilms = {
  start: function () {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms = null || numberOfFilms == '' || isNaN(numberOfFilms || numberOfFilms === ' ')) {
      numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  } 
};

numberOfFilms.start();

const personalMovieDB = {
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  writeYourGenres: function () {
    for(i = 1; i < 4; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером № ${i}`);
  }
  writeYourGenres;
  },
  rememberMyFilms: function () {
    for (i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов ?", ""),
        b = prompt("На сколько оцените его ?", "");
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
      }
      else {
        console.log('error')
        i--;
      }
  
    }
  },
  detectPersonalLevel: function () {
    // console.log(personalMovieDB);
    if (numberOfFilms < 10) {
      console.log('Просмотрено очень мало фильмов!');
    }
    else if (10 <= numberOfFilms && numberOfFilms <= 30) {
      console.log("Вы классический зритель!");
    }
    else if (numberOfFilms > 30) { console.log("Вы киноман!"); }
    else { console.log("Произошла ошибка!") }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  }
  
};

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);
function writeYourGenres() {
  for(i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером № ${i}`);
}
writeYourGenres();
}