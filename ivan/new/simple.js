const btns = document.querySelectorAll("button"),
      wrapper = document.querySelector('.btn-block');


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
console.log(btns[1].className);  //* устаревший метод возвращает имя класса как строку

//!  ДЕЛЕГИРОВАНИЕ СОБЫТИЙ назначение событий для потомков родителя подходящих под опр-е условия.

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target); //* выводит тег класс имя
    // console.log(event.target);//* выводит как объект со всеми методами и свойствами

    if(event.target && event.target.tagName == 'BUTTON') {    //*первая часть условия потому что не все элементы поддерживают свойство target(носит рекомендательный х-р)
        console.log('dsdsd');

    if(event.target && event.target.matches('button.red')) {  //*дословно перебирая сравнивает на совпаденя
        console.log('ouewf')
    }
        
    }                                                       //*даже если элемент появится делегир=я события на нём будет также работать
});




// btns.forEach(btn => {                      //* работает тоько для тех методов которые есть на момент объявления
//     btn.addEventListener('click', () => {
//         console.log( 'DSDSDSD');
//     });

// });

const btn = document.createElement('button');
       btn.classList.add('green') ;
       wrapper.append(btn);

