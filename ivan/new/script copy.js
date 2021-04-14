let numberOfFilms = {
  start: function () {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms = null || numberOfFilms == '' || isNaN(numberOfFilms)) {
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
    for (i = 1; i < 4; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером № ${i}`);

      while (personalMovieDB.genres == "" || personalMovieDB.genres == null) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером № ${i}`);
      }
    };
    personalMovieDB.genres.forEach(function (item, i, genres) {
      console.log(`любимый жанр № ${i + 1} это - ${item}`);
    })
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
     console.log(personalMovieDB);
    if (numberOfFilms < 10) {
      console.log('Просмотрено очень мало фильмов!');
    }
    else if (10 <= numberOfFilms && numberOfFilms <= 30) {
      console.log("Вы классический зритель!");
    }
    else if (numberOfFilms > 30) { console.log("Вы киноман!"); }
    else { console.log("Произошла ошибка!"); }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      return personalMovieDB.privat = true
    }
    else { return personalMovieDB.privat = false }
  }

};


personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();


personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.writeYourGenres();



