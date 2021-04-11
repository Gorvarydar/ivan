let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms = null || numberOfFilms == '' || isNaN(numberOfFilms || numberOfFilms === ' ')) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  movies: {},
  actors: {},
  genres: [],
  privat: false

};
// let i = 0;
// do{
//   const a = prompt("Один из последних просмотренных фильмов ?", ""),
//     b = prompt("На сколько оцените его ?", "");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//       i++
//     }
//           else {
//       console.log('error')
//       i--;
//     } 
// }
// while(i < 2);
/* let i = 0;
while(i < 2){
  const a = prompt("Один из последних просмотренных фильмов ?", ""),
    b = prompt("На сколько оцените его ?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
      i++
    }
          else {
      console.log('error')
      i--;
    }
  
  }
 */
function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
  // console.log(personalMovieDB);
  if (numberOfFilms < 10) {
    console.log('Просмотрено очень мало фильмов!');
  }
  else if (10 <= numberOfFilms && numberOfFilms <= 30) {
    console.log("Вы классический зритель!");
  }
  else if (numberOfFilms > 30) { console.log("Вы киноман!"); }
  else { console.log("Произошла ошибка!") }
}

detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for(i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером № ${i}`);
}
writeYourGenres();

}