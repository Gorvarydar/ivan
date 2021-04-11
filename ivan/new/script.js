const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  movies: {},
  actors: {},
  genres: [],
  privat: false

};

for (i = 0; i < numberOfFilms; i++) {
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
console.log(personalMovieDB);
if(numberOfFilms < 10) {
  console.log('Просмотрено очень мало фильмов!');
}
else if(10 <= numberOfFilms <= 30) {
  console.log("Вы классический зритель!");
}
else if(numberOfFilms > 30)
  {console.log("Вы киноман!");}
  else {console.log("Произошла ошибка!")}



