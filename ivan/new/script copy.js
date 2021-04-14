
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  writeYourGenres: function () {
    for (i = 1; i < 4; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером № ${i}`);

      while (personalMovieDB.genres == "" || personalMovieDB.genres == null || personalMovieDB.genres == !isNaN) {
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
    //  console.log(personalMovieDB);
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено очень мало фильмов!");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель!");
    }
    else if (personalMovieDB.count > 30) { console.log("Вы киноман!"); }
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


personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();





