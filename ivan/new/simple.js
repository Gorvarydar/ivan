const btns = document.querySelectorAll("button");

console.log(btns[0].classList.length); //*обращение к конкретному элементу псевдомассива btns[0]
                                    //*classList.length колличество его свойств

console.log(btns[0].classList.item(0)) //* обращение к классу под индек 0 выведется blue если 1 some
                    /* <button class="blue some"></button> */
 console.log(btns[1].classList.add('red')); //*add() метод добавления классов можно через , добавить несколько
 console.log(btns[0].classList.remove('blue')); //*remove() удаляет классы
// console.log(btns[0].classList.toggle('blue')); ///*toggle() добавляет класс если его нет,но если такjй класс есть не добавляет

if(btns[1].classList.contains('red')) {  //* метод contains() проверяет есть ли такой класс
    console.log('red');
};
// btns[0].addEventListener('click',() => {
//     if(!btns[1].classList.contains('red')) {     //*разное исполнение одной и той же задачи
//      btns[1].classList.add('red')}
//      else{btns[1].classList.remove('red')};  
// });

btns[0].addEventListener('click', () => {      //* разное исполнение одной и той же задачи
    btns[1].classList.toggle('red');
});