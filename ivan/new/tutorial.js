console.log(213130);
alert("rrr");
const d = prompt('hfhfhfhf');
console.log(d);

setTimeout(function () {
    console.log(1);
}, 500);

function second() {
    console.log(2);
}


second();

function learnJS(lang, callback) {
    console.log(`Я учу о е : ${lang}`);
    callback();
}
function done() {
    console.log("Я прошёл этот урок!")
}

learnJS('JS', done)

const options = {
    name: 'test',
    widht: 1024,
    height: 1004,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

console.log(options['name']);


function learnJS(lang, callback) {
    console.log(`Я учу : ${lang}`);
    callback();
}

function done() {
    console.log("япрошёл этот урок!");
}

learnJS('fffff', done);

// const options = {
//     name: "test",
//     widht: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// const { border, bg } = options.colors; //* деструктуризация объекта
// console.log(border);
// console.log(bg);
// console.log(options.colors.border)//!обращение к вложенному в ключ объекту.

// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++
//         }
//     }
//     else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++
//     }


// }
// console.log(counter); //*счетчик ключей

console.log(Object.keys(options));//*создает массив и перечисляет все ключи в обекте
console.log(Object.keys(options).length);//*свойство length не применимо к объекту, но к массиву пожалуйста так мы узнаём колличество ключей ,без создания счётчика

const rt = {
    age: 77,
    height: 144,
    widht: 57,

    makeTest: function () {//!создание метода объекта , создаётся внутри объекта!
        console.log("test");
    }

}
rt.makeTest();

console.log(Object.keys(rt));
console.log(Object.keys(rt).length);

for (let i in rt) {
    console.log(`you will got ${rt[i]}`)
}


rt.makeTest();

///!МАССИВЫ

const arr = [1, 2, 3, 6, 8];

// arr[99] = 100;//* недочёт свойства
// console.log(arr.length);
// console.log(arr);


// arr.pop(); //* удаляет последний элемент массива
// console.log(arr);

// arr.push(10);//* добавляет последний элемент массива
// console.log(arr);

// for(i = 0; i < arr.length; i++) {
//     console.log(arr[i]);//* счётчик перебирает каждый элемент массива
// }

// for(i of arr) {      //*метод который делает тоже самаое что и счётчик(массив ,псевдомассивы, строка, map/set)
//     console.log(i);  
// }

// arr.forEach(function (element, i, arr) {
//     console.log(`${i}: ${element} внутри массива ${arr}`);
// });
const str = prompt('','');
const far = str.split(" ,");//* преобразование строки в массив  в () split  тот разделитель через который указаны элементы
far.sort();//* сортирует элементы массива (как строки, по алфавиту)
console.log(far.join('.'));//* преобразование массива в строку через "."

const arr = [10, 13, 1, 3, 26, 2, 12, 49];
 arr.sort(compareNum);//!callback
 console.log(arr)

function compareNum(a, b) { //! чтобы отсортировать массив(c числами) нужно передать эту callback функцию методу sort(compareNum)
    return a - b;
}



// //! ПЕРЕДАЧА ПО ССЫЛКЕ И ЗНАЧЕНИЮ
// let a = 5,//* в примитивных типах(num,str,boolean) данных при копировании значение передаётся по значению(исходный элемент при модификации копии не меняется
// b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a : 5,
//     b : 1
// };

// const copy = obj;//* в более сложных структурах значение передаётся по ссылке, это значит при изменениии копии меняется и и исходнк
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// const arr = [1, 3 ,6];
// const cop = arr;
// cop[0] = 100;
// console.log(arr[0]);

function copy(obj) {       //*  копирование объекта через создание функции(поверхностное копирование)
    let objCopy = {};
    for (i in obj) {
        objCopy[i] = obj[i]
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 4,
    c: {
        x: 8,
        z: 6
    }
}

// const numbersCopy = copy(numbers);

// numbers.a = 23;
// numbersCopy.c.x = 88;        //* при поверхностном копировании вложенные объекты сохраняют ссылочные значения
// console.log(numbers);
// console.log(numbersCopy);

const add = {
    r: 4,
    f: 3
};
add.r = 44;
console.log(add);

console.log(Object.assign(numbers, add));//* соединение объектов через Object.assign

const copyObj = Object.assign({}, add);//* копирование объектов через Object.assign
console.log(copyObj);


console.log(copyObj);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice(); //* копирование массива через метод slice()

console.log(oldArr);
newArr[0] = 'f';
console.log(newArr)

const video = ['youtube', 'tiktok', 'vimeo'], //* оператор разворота ... позволяет поместить и развернуть содержимое без  указания всех элементов
    blogs = ['gg', 'blogger', 'hh'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);

    function cop (a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }

const num = [1, 2, 3];

cop(...num);//* оператор разворота ...

const ara = [1, 3, 4, 5];
const araNew = [...ara];//* копирование с помощью опреатора разворота(Spread) ...
console.log(araNew);

const oB = {
    one: 1,
    two: 2
};
const newOB = {...oB}; //* копирование объекта с помощью ...
newOB.one = 888;
console.log(newOB);


let str = "camel";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello:  function () {
        console.log("Hello!")
    }
};

const john = Object.create(soldier); //! создаём новый объект john , который буде прототипно наследоваться от soldier

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; //* задание обекту свойств прототипа(Устаревшая форма записи!!!!!!!)
// Object.setPrototypeOf(john, soldier);//! современная форма

console.log(john);

console.log(john.armor);

john.sayHello();

//! ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
//? TO STRING

console.log(typeof(String(null)));
console.log(typeof(String(5)));//* превращение числа в строку при помощи String()
console.log((5));

console.log(typeof(5 + ''));//* превращение числа в строку при помощи конткатенации

//? TO NUMBER

console.log(typeof(Number('5'))); //* редкая команда транс-ть в число Number()

console.log(typeof(+"6")); //* современная форма унарный +

console.log(typeof(parseInt("15px", 10))); //* parseInt(знач, система исчисления(тут десятичная))

//? TO BOOLEAN

// 0, null, NaN, undefined -//* это всё false, остальное будет true

let varik = null;
if(varik) {console.log(true)}; //*не сработает

varik = 3;
 
if(varik) {console.log(true)};//* ок


console.log(typeof(Boolean(5))); //* Boolean() устар

console.log(typeof(!! 5)); //*современная форма

//! ЗАДАЧКИ

//2
// console.log([] + false - null + true);  //* NaN
// console.log(typeof(NaN));- number
// console.log(typeof ({})); //*object
// console.log(typeof ([]));//*object
// console.log(typeof ([] + false));//*string
// console.log(typeof ([] + false));//*number
// console.log(typeof ('1'[0]));//* string


//3
// let y = 43; 
// let x = y = 6;
//  alert(x); 
//  alert(y);

//4
// console.log(typeof ([] + 1 + 2));//! пустой массив [] в таких операция считается пустой строкой
// console.log( [] + 1 + 2);//* 12 и это string

//5
// alert( "1"[0] ); //*  1
console.log(typeof ("1"[0])); //*string

//6
console.log((2 && 1 && null && 0 && undefined)); //*object оператор && останавливается на значении false  
                                                           //*опрераатор || останавливается на true
//7
// console.log(!!(a && b) == (a && b));
console.log((1 || 55));//*если значения которые сравниваются при помощи || и && правдивы то
console.log((1 && 55));//* || возвращает первое по порядку значение ,а && второе
                                //! приритет && выше чем у ||    (таблица приритетов)
//8
// alert(null || 2 && 3 || 4);

//9
// a = [1, 2, 3];
// b = a;
// console.log(a == b);//*true

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);//*false
console.log(typeof("3"[0]));
//9
// alert("Infinity"); //*строка
// alert(Infinity);//* число
// alert(+"Infinity");//* снова строка
alert("3"[0]); //*обращение к первому элементу строки "3" значит "3"
alert("3"[1]);//* обращение к несуществующемк элементу значит undefined
console.log(typeof(+"Infinity"));

//10
console.log("Ёжик" < "яблоко"); //*посимвольное сравнение ТАБЛИЦА UNICODE

//11
console.log( 0 || "" || 2 || undefined || true || falsе );//* || останавливается на true  в данном случае это 2

//! DOM

'use strict';

// const box = document.getElementById('box');//* передаёт сразу елемент ,с которым можно работать

// console.log(box);

// const btns = document.getElementsByTagName('button');//*передаёт псевдомассив(html-коллекцию) из которой ёще нужно доставать нужный элемент

// console.log(btns); 

// const circles = document.getElementsByClassName('circle');//*передаёт псевдомассив(html-коллекцию) из которой ёще нужно доставать нужный элемент

// console.log(circles);

// const hearts = document.querySelectorAll('.heart');//*передаёт псевдомассив(html-коллекцию) из которой ёще нужно доставать нужный элемент
//                                                    //* обращение в (CSS- селлектор) поэтому через .    имеет метод forEach!!
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');//* передаёт сразу елемент ,с которым можно работать
//                                                   //*обращение в (CSS- селлектор)
// console.log(oneHeart);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

    // box.style.backgroundColor = "green";//* изменение свойств запись в стиле camelCase
    // box.style.width = "500px";

box.style.cssText = 'background-color: green; widht: 500px'//* исзменение сразу нескольких свойств(!!записываютя в формате CSS!!)

    btns[1].style.borderRadius = "80%";
    btns[1].style.color = 'red';
    
    // for(let i = 0; i < hearts.length; i++) {
    //     hearts[i].style.backgroundColor = 'yellow';//*  почти не используется (удобнее forEach)
    // };

hearts.forEach(item =>{
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div'); //* элемент есть только в js файле на странице он не отображается

const text = document.createTextNode('Довольно редко используется');

div.classList.add('black'); //* добавляем класс
document.body.append(div);   //* берём тег body как родителя и внутрь него помещаем div (в самый конец)
// wrapper.appendChild(div);  //*устаревшая форма
// document.querySelector('.wrapper').append(div);//* как и выше помещаем в самый конец родителя(только уже wrapper) div
                                                      //* но без объявления переменной - укороченный вариант(подходит если мы используем этот элемент единожды)
                                                      
// wrapper.append(div);   

// wrapper.prepend(div);//* добавляет элемент в начале родителя
// hearts[2].after(div);//* также добавляет эл-т можно точнее указать место
// hearts[0].before(div);
// hearts[0].insertBefore(div, herts[0]); //*устаревшая форма(какой элемент, пред каким)


// circles[0].remove(); //* удаление элемента
//wrapper.removeChild(herts[1]); //*устарев

// hearts[1].replaceWith(circles[1]);
hearts[0].replaceWith(circles[0]); //* заменить один элемент другим
//wrapper.replaceChild(circles[0], hearts[0]); //*устарев

//!редактирование элемента

// div.innerHTML = "Hello World"; //*добавление текста
div.innerHTML = "<h1>Hello World</h1>";//*добавление текста в HTML структуре

// div.textContent = "hello"; //* только текст

div.insertAdjacentHTML('', "<h2>Hello</h2>");


//? разбор дз 30

//!   СОБЫТИЯ И ОБРАБОТЧИКИ 
//? ЗАДАНИЕ 

// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');

// btn.onclick = () => {   //*задание события чепез свойство DOM onclick (приставка on перед любым событием)
//     alert('Click');
// };                          //* непоппулярная форма 
// btn.onclick = function() {  //* нельзя задать на одно событие больше одного действия(второе заменит первое)
//     alert('Second Click');     //*нельзя удалить обработчик в нужный момент
// };

//?-----------------------------------------------------------------------------------------------
// btn.addEventListener('click', () => {
//     alert("Click");                          //* два обработчика на одно событие(клик левой к.мыши)
// });
// btn.addEventListener('click', () => {
//     alert("Second Click"); 
// });


// btn.addEventListener('wheel', () => { 
//     prompt("How dod you do?");                  //* другое событие на этом же элементе(прокрутка колеса)
// });


// btn.addEventListener('click', (e) => {        //* в обработчике 1-й арг 'wheel' -это событие 
//     console.log(e);                            //*,2-й callback ф-я в котором (1-й элемент это объект события(у него есть свойства и методы), 
//     // e.target.remove()                            //*а второй задаваемые данные по необходимости)
// });                                            //* 

//?  УДАЛЕНИЕ ОБЪЕКТА

// const delElem = (e)=> {        //* объявлем ф-ю для удаление объекта (через его  метод )
//     e.target.remove();
// };

// btn.addEventListener('click', delElem);        //* задание функции (!!не вызов!!) без скобок

//? УДАЛЕНИЕ ОБРАБОТЧИКА

// let i = 0;
// const delElement = (e) => {
//     console.log(e.target);          //*создание функции,которая удаляет обработчик после одного выполнения
//     i++;
//     if(i == 1) {
//         btn.removeEventListener('click', delElement);
//     }  
// };

// btn.addEventListener('click', delElement);

//? ВСПЛЫТИЕ СОБЫТИЙ

// const elem = (e) => {
//     console.log(e.target);
//     console.log(e.type);
// };
// btn.addEventListener('click', elem);
// overlay.addEventListener('click', elem);


// const deleteElement = (e) => {
//     console.log(e.target);      //*можно писать ф-ию 2-м аргументом в обработчике или вынести отдельно как здесь
//     // console.log(e.currentTarget);       
//     console.log(e.type);
// };



// btn.addEventListener('click', deleteElement);       //*всплытие событий,срабатывание  обработчика на вложенной и родительской структуре
// overlay.addEventListener('click', deleteElement);   //*сначала срабатывает на самой вложенной структуре и по иерархии вверх

// //? ОТМЕНА СТАНДАРТНОГО ПОВЕДЕНИЯ БРАУЗЕРА

// const link =document.querySelector('a');
 
//     link.addEventListener('click', () => {
//     event.preventDefault();                              //* отменяем стандартное поведение ф-ии(здесь переход по ссылке) !!! 
//                                                        //* это мы делаем в самом начале ф-ии
// console.log(event.target);                             //* и уже дальше можем выполнять нужные нам функции
// });

// const delElem = (e) => {
// console.log(e.target);                                   //* создание ф-ии кот-я удаляет элемент
// e.target.remove();
// }
// const btns = document.querySelectorAll('button');    //*назначение для каждого элемента псевдомассива
// btns.forEach(e => {                                  //* при помощи forEach обработчика события
//     e.addEventListener('click',delElem);
// });

//?   ОПЦИИ СОБЫТИЯ

const delElem = (e) => {
    console.log(e.target);
};

const btn = document.querySelector('button');
btn.addEventListener('click', delElem, {once: true});

//! НАВИГАЦИЯ ПО DOM-ДЕРЕВУ

// console.log(document.body);  //*обращение ко всему блоку body
// console.log(document.documentElement);//* обращение к HTML-документу

console.log(document.body.childNodes);  //*обращение ко всем дочерним структурам(узлам) BODY (формируется псевдомассив)
                                        //* не все элементы это узлы, например text(это скорее всего перенос строки) УЗЛЫ!=ЭЛЕМЕНТЫ
                                              //!   УЗЛЫ!=ЭЛЕМЕНТЫ

// console.log(document.body.firstChild); //* обращение к первому дочернему узлу родителя BODY
// console.log(document.body.lastChild);  //* к последнему
// console.log(document.body.lastElementChild);//* к последнему дочернему элементу

// // console.log(document.querySelector("#current").parentNode);  //*обращение к дочернему узлу с ID  current для получения родительского узла
// // console.log(document.querySelector("#current").parentNode.parentNode); //*  -||- для получения родителя родителя
// console.log(document.querySelector("#current").parentElement);  //*обращение к дочернему узлу с ID  current для получения родительского элемента



// //?  data- АТРИБУТЫ

// console.log(document.querySelector('[data-current="3"]').nextSibling); //*получение узла следуещего за data- атрибутом current
// console.log(document.querySelector('[data-current="3"]').previousSibling) //*             предыдущего data- атрибуту current

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //* получение уже элементов
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for(let node of document.body.childNodes) {  //* при помощи метода for of мы перебираем
  if( node.nodeName =='#text'){              //* все дочерние УЗЛЫ и выводим исключая текстовые(text)
    continue                                 //* continue (исключает, пропускает),а  break (просто останавливает)
  }
  console.log(node);
};

//! НЕОПТИМИЗИРОВАННЫЕ СТРАНИЦЫ

//*КОГДА В СТРАНИЦЕ МНОГО ОБЪЁМНОИ ИНФОРМАЦИИ И НА ЕЁ ЗАГРУЗКУ ТРЕБУЕТСЯ БОЛЬШЕ ВРЕМЕНИ
//* ТОГДА DOM-СТРУКТУРА МОЖЕТ ЗАГРУЗИТЬСЯ НЕ ПОЛНОСТЬЮ , А SCRIPT УЖЕ НАЧНЁТ РАБОТУ

document.addEventListener('DOMContentLoaded', () => {       //*ЧТОБЫ ЭТОГО НЕ ДОПУСТИТЬ ВЕСЬ КОД В CALLBACK Ф-ИЮ
    //*ПОМЕЩАЕМ СЮДА ВЕСЬ НАПИСАННЫЙ НА JS КОД 
});
window.addEventListener('DOMContentLoaded', () => {
//*  аналогичный вариант
});


//! СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ

touchstart  //* касаение  сенсора
touchmove //* движение при при касании
touchend //* отрывание альца (конец касания)
touchenter //*  когда при ведении пальцем мы натыкаемся к-нибудь элемент
touchleave//* продолжаем вести по экрану и покидаем область touchenter
touchcancel //* касание выходит за пределы браузера


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Touch start');
                    //? ДОП СВОЙСТВА ОБЪЕКТА СОБЫТИЯ ПРИ РАБОТЕ С СЕНСОРНЫМИ УСТРОЙСТВАМИ

        console.log(e.touches);  //* количество пальцев которые взаимодей ствую с экраном
        console.log(e.targetTouches); //* кол-во пальцев которые взаимодействуют именно с эти объектом
        console.log(e.changedTouches); //*  список пальцев которые участвуют в текущем событии
        console.log(e.targetTouches[0].pageX); //*обращаюсь к первому пальцу и узнаю его координаты на странице
    });
    
    
});

//! динамические скрипты defer и async
/* <script defer src="simple.js"></script> */ //*  defer сообщает браузеру что он должен продолжать обрабатывать  
                                         //* страницу в фоновом режиме(он никогда не блокирует страницу)
                                         //*  скрипт с defer выполняется только когда DOM дерево полностью готово



  <script async src="simple.js"></script> //* при async страница не ждёт асихронных скриптов (содержимое обрабат-ся и отоб-ся)
                                           //* когда скрипт async загружен сразу запускается?никого не ждёт
                                            //* и другие скрипты не ждут async
                                            //* важен для независимых скриптов


                                            const btns = document.querySelectorAll("button");

                                            //! ДИНАМИЧЕСКОЕ ИЗМЕНЕНИЕ КЛАССОВ

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

//!  ДЕЛЕГИРОВАНИЕ СОБЫТИЙ назначение событий для потомков родителя подходящих под опр-е условия.
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target); //* выводит тег класс имя
    // console.log(event.target);//* выводит как объект со всеми методами и свойствами

    if(event.target && event.target.tagName == 'BUTTON') {    //*первая часть условия потому что не все элементы поддерживают свойство target(носит рекомендательный х-р)
        console.log('dsdsd');

    if(event.target && event.target.matches('button.red')) {  //*дословно перебирая сравнивает на совпаденя
        console.log('ouewf')
    }                                                       //*даже если элемент появится делегир=я события на нём будет также работать
        
    }                                                     
});

// btns.forEach(btn => {                      //* работает тоько для тех методов которые есть на момент объявления
//     btn.addEventListener('click', () => {
//         console.log( 'DSDSDSD');
//     });

// });

const btn = document.createElement('button');
       btn.classList.add('green') ;
       wrapper.append(btn);

       //! ДЕЛЕГИРОВАНИЕ СОБЫТИЙ

       const tabs = document.querySelectorAll('.tabheader__item'),   //*псевдомассив элементов
       tabsParent = document.querySelector('.tabheader__items');    //* родительский класс


       tabsParent.addEventListener('click', (event) => {    //* задаём событие не конкретному элементу, а родительскому классу
        const target = event.target;                        //*т.е. это событие будет выполнятся для каждого лемента 

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {         //*  1-й аргумент элемент tabs , 2-й номер этого элемента по порядку
                if (target == item) {          //* сравнение элемента в который мы кликнули с тем который мы перебираем
                    hideTabContent();
                    showTabContent(i);  
                }
            })
        };
    });

//!   СКРИПТЫ И ВРЕМЯ ИХ ВЫПОЛНЕНИЯ

const timerId = setTimeout(function()  {  //* вариант асинхронного кода, команда выполнится через указзаный промежуток времени    console.log('hello');
    console.log('hello')                  //* фун-ия setTimeout 1-й аргумент - объявление функции(которая будет вып-ся), 2-й интервал в милисекундах 1с=1000мс
}, 5000);

const timer = setTimeout(function(text) {  //* 3-й аргумент (после времени ) может задаваться аргументом  функции в данном случае text
    console.log(text);
}, 2000, 'hello');


function logger () {                  //* можно и так ,НО ф-ию мы не вызываем logger(), а передаём logger!
    console.log('hello');
};
const timer = setTimeout(logger, 2000);

setTimeout(function() { 
    console.log('hello')}, 2000);              //* работает и так , но лучше фиксировать в переменную ,чтобы можно было остановить 

    clearInterval(timer)      //* останавливает выполнение кода заданного через setTimeout

    setInterval();    //* задаёт интервал выполнения ф-ии(она может повторяется постоянно ) останавливается таакже как и setTimeout и имеет такие же аргументы
                    //* если операция дольше вып=ся чем заданный интервал то при следуюющих повторениях setInterval будет думат что интервал уже прошёл и сразу запускать ф-юю

    let id = setTimeout(function log() {  //*вызов рекурсивного setTimeout, он всегда будет выполнять заданный интервал
        console.log('hello');
      id = setTimeout(log, 500);
    }, 500);          
    
    
    //! РАБОТА С ДАТАМИ

// const now = new Date("1989-04-27"); //*(тут задаём дату) все даты хранятся в милисекундах , отсчёт ведётся с 1970(если нужна дата до исп. отриц. знач)
//   new Date.parse("1989-04-27"); //*(и тут тоже задаём дату ) разные способы
const now = new Date();  
console.log(now);

  // get //* узнать, получить
// console.log(now.getFullYear()); 
// console.log(now.getMonth()); //* месяца считаются с  0
// console.log(now.getHours());//* зависит от часового пояса
// console.log(now.getUTCHours()); //*UTC всемирное координировааное время 
// console.log(now.getMinutes());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset()); //* разница между текущим часовым и UTC  в минутах
// console.log(now.getTime()); //* количество милисек. с точки отсчёта (1970 г)
// console.log(now.getDate(1619494580741));

// set //* задать ,изменить
// console.log(now.setHours(18));
// console.log(now); //* в консоли разработчика время чаще всего отображается в формате UTC

let start = new Date();       //*пример исп-я для получения времени выполнения опр-го скрипта

// for(i=0 ; i < 100000; i++) {
//     let some = i**3; //*i возводится в степень 3
//     console.log(some);
// };
 let end = new Date();

 alert(`Цикл отработал за ${end - start} миллисекунд`);

 //! ПАРАМЕТРЫ ДОКУМЕНТА И ОКНА

 document //*вся структура сайта (страница как объект)
 window //* отображаеая часть сайта (окно )
 screen //* весь экран(у каждого пользовтеля может быть разным)

 'use strict'
  
 const box = document.querySelector('.box');
 const btn = document.querySelector('button');
//  const widht = box.clientWidth;
//  const height = box.clientHeight;

// const widht = box.offsetWidth;
// const height = box.offsetHeight;

const widht = box.scrollWidth;
const height = box.scrollHeight;

 console.log(widht, height);

 btn.addEventListener('click', () => {
    //  box.style.height = box.scrollHeight  + 'px';   //*(инлайн стили) при обращении к стилям мы получаем число ,чтобы изменения корректно изменились
   console.log(box.scrollTop);                                         //*   нужно добавить формат измерения в данном случае 'px'
});                     

console.log(box.getBoundingClientRect()); //* получает все координаты ,который есть у элемента
console.log(box.getBoundingClientRect().top) //* имеет разные значения их можно получать отдельно(прим. top)
//* computed-стили (в конкретном выражении , которые применились.Изменить нельзя ,тоько прочитать)

const style = window.getComputedStyle(box);//* получение объекта со всеми его свойствами
console.log(style.display); //*получение конкретного свойства
//? работать с псевдоэлементами в JS  не т возможности , но возможно получить свойства псевдоэлементов
//? инлайн стили приоритетнее чем computed  стили

document.documentElement.scrollTop = 0; //* обращение ко всей странице как одному объекту
window.scrollBy(0, 400); //* проскролить относительно  положения пользователя
window.scrollTo(0, 400); //* проскролить относительно всей страницы

//! ФУНКЦИИ -КОНСТРУКТОРЫ(для создания новых однотипных объектов)ES5

function User(name, id) { //*  функция конструктор
    this.name = name;  //* задание  свойств для всех User
    this.id = id;        //* ф-ия к-р это прототип от которого можно отпочковывать новые потомки
    this.human = true; //* общее свойство одинаковое для всех User
    this.hello = function () {  //* создание метода объекта
        console.log(`Hello ${this.name}`);
    }
}
//? когда нет доступа к нашему прототипу (User)  или нет возможности его менять то используем .prototype

User.prototype.exit = function() {     //* задаание метода ,уже вне ф-ии
    console.log(`Пользователь ${this.name} ушёл!`);
}

const ivan = new User('Ivan', 28); //*при вызове ф-ии к-тора с new создаётся новый объект со всеми свойствами которые указаны в функции

const alex = new User('Alex', 25);

alex.hello();//*вызов метода объекта
ivan.exit();

//! в ES6  появились классы(синтасическй сахар)


//!    КОНТЕКСТ ВЫЗОВА THIS

'use strict' //* использование строгого режима

function showThis(a, b) {   //*без использывания строгого режима ф-я будет ссылаться на глобальный объект(window)
   console.log(this);   //* если есть строгий р. то undefined
   function sum() {
       console.log(this);
      //  return this.a + this.b;  
      return a + b ;   //* используем замыкания (хоть переменные и неопределены в sum()),ф-я не находит их внутри себя  и обращается к родительской ф-ии
   }
   console.log(sum());
}
showThis(4, 5);

const obj = {
   a: 20,
   b: 15,
   sum: function() {
      console.log(this);//* вызывая контекст получаем весь объект целиком
   }                   //* если же мы поместим в метод ф-ию ,которая ссылается на контекст  то будеt undefined
};
obj.sum();  //* контекст у методов объектов - сам объект!

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function() {
      console.log('Hello' + this.name);
   }
}
let ivan = new User('Ivan', 25);

ivan.hello();
//! this в конструкторах и классах - это новый экземпляр объекта

function sayName (surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: "Jhon"
};
//*call и apply делают одно и тоже(устанавлвают заданный контекст) ,отличия начинаются в синаксисе при появлении доп.аргементов ф-ии (прим.surname)
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);


function count(num) {
   return this*num;
}
const double = count.bind(2); //* создаёт новую ф-ию (видоизменяя контекст count)
console.log(double(3));
console.log(double(22));
//* bind создаёт новую ф-ию
 
//?  1) Обычная ф-ий : this = window, но если use strict - undefined
//?  2) Контекст у методов объекта - сам объект
//?  3) this  в конструкторах и классах - это новый экземпляр объекта
//?  4) Ручная привязка контекста(this): call, apply, bind.


const btn = document.querySelector('.btn');
 
btn.addEventListener('click', function() {  //* если использывать => то контекст(this) теряется
   this.style.backgroundColor = "red";                 //* контекст вызова - сам элемент на котором произошло событие(кроме => ф-ий)
});
   btn.addEventListener('click', (e => {
      e.target.style.backgroundColor = 'red'; //*одно и тоже действие(предпочтительная форма к тому же можно исп-ть =>)
   }))
   


//?  У СТРЕЛОЧНОЙ Ф-ИИ НЕТ СВОЕГО КОНТЕКСТА ВЫЗОВА, ОНА БЕРЁТ ЕГО У СВОЕГО РОДИТЕЛЯ

const obj = {
   num: 5,
   sayNumber: function() {
      const say = () => { //* стрелочная ф-я берёт контекст родителя в данном случае метод sayNumber
         console.log(this.num); //* а контекст метода объекта всегда сам объект
      }
      say();
   }
};

obj.sayNumber();

//*особенности стрелочных ф-й
const double = (a) => {
   return a * 2;
};
//*будет работать правильно и так
const double = (a ) => a * 2;//*действие должно помещаться в одну строчку
const double = a => a * 2; //* синтаксис когда у ф-ии один аргумент


 //!КЛАССЫ (ES6) КРАСИВЫЕ ОБЁРТКИ ФУНКЦИЙ КОНСТРУКТОРОВ/СИНТАКСИЧЕСКИЙ САХАР
      
 'use strict'
   
 class Rectangle { //* название классов пишется с большой буквы
    constructor (height, widht) { //* создаём новый объект
       this.height = height ;//*обращаемся к экземпляру нового созданного объекта
       this.widht = widht; //* иговорим что он будет с свойствами, которые мы берём из аргументов ф-ии
    }
    calcArea() { //* создаём метод объекта вычисляющий площадь
       return this.height * this.widht
    }
 }

class ColorRectangleWithText extends Rectangle {//* класс ColorRectangleWithText наследует (extends) от класса Rectangle
constructor(height, widht, text, bgColor) {
 super(height, widht);//*вызывает суперконструктор родителя(т.е. вызывает контекст родителя)!!всегда пишется в начале конструктора
 this.text = text;
 this.bgColor = bgColor ;
}
showMyProps () {
 console.log(`текст: ${this.text}, цвет: ${this.bgColor}`)  //* обращение к свойствам только через контекст
}
}

const cort = new ColorRectangleWithText(20, 50, 'HelloWorld', 'red');
cort.showMyProps();
console.log(cort.calcArea()); //*  метод ,который унаследован о  родителя


 // const square = new Rectangle(10, 10);  //* помещаем в переменную новый объект класса Rectanle, у которого есть 2 св-ва и 1 метод
 //  const long = new Rectangle(20, 100);
 // console.log(square.calcArea());
 // console.log(long.calcArea());


 //!оператор rest
//* если ... в конце списка аргументов - это rest(собирает в ост.арг в массив), если ...  в вызове ф-ии или где-то ещё то spread(оператор расширения-он извдекает элементы из массива)
const log = function (a, b, ...rest) { //* ...rest  собирает остаточные параметры и помещает их в массив
    console.log(a, b, rest);
 }
  log (4, 7, 5, 9, 0, 7, 1);
 
  //!  ПАРМЕТРЫ ПО УМОЛЧАНИЮ
 
 function calcOrDouble(number, basis = 2) {  //* сейчас аргумент по умолчанию задаётся в самой ф-ии
    // basis = basis || 2; //* раньше использывали такой синт-с чтобы задать синтаксис если вдруг он неопределен
    console.log(number * basis);
 }
 calcOrDouble(3, 5);

 //!  JSON формат передачи данных(набор пар ключ-значение)   ВСЕ СТРОКИ ДОЛЖНЫ БЫТЬ В ""(ДВОЙНЫХ ОБЯЗАТЕЛЬНО)

 'use string'
 const persone = {
     name: 'Alex',
     tel: '+9794551554',
         parents: {
             mom: 'Olga',
             dad: 'Tolya'
         }
 }; 
 //* все  браузеры имеют встроенные объекты JSON , у которых есть свойства и методы (JSON.stringufy - превращает объекты JS в формат JSON для отправки на сервер)  
 //* в JSON все сущности должны быть записаны  ""- формат необходимый для протоколов данных на сервере
 // console.log(JSON.stringify(persone));
 //* JSON.parse(преобразует код с сервера для работы в JS)
 //* маленький вес и простота чтения(раньше был распространён XML)
 const toClone = persone;
 
 const clone = JSON.parse(JSON.stringify(persone)); //*глубокое клонирование
 clone.parents.mom = 'ann';
 // clone.parents.dad = 'fred';
 console.log(persone);
 console.log(clone);

//! AJAX  (взаимодействие с сервером в асинхронном варианте)
//* асихронный код ,ход действия которого не влияет на выполнение другого(никого не ждёт)

'use strict'

const usd = document.querySelector('.usd'),
      rub = document.querySelector('.rub');

      usd.addEventListener('input', () => {
          const request = new XMLHttpRequest();

        //   request.open(method, url, async, login, password) //*  open() - метод собирает настройки которые помогут сделать зпрос
        //                                    //* 1 аргумент -метод для запроса,
        //                                    //*2-й адрес по которому будет сделан запрос
        //                                    //*3-й вид запроса async (значит асинхронность , в ajax gпо умолчанию true )
        //                                    //*4-й логин (необязательные)
        //                                    //*5-й пароль (необязательные)
            //? самый распространённе методы GET(получить с сервера) и POST(отправить на сервер)
            request.open('GET','new/current.json');
            request.setRequestHeader('Content-type','application/json; charset=utf-8'); //* http заголовки уточняем какой именно будет запрос
            request.send()
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                   // request.addEventListener('load', () => { //* более распростанённый вариант
       // if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //* toFixed() колличество знаков после точки
        } else {
            inputUsd.value = "Что-то пошло не так"
         
                }
            });

            //? свойства запроса
            // status//* состояние объекта КОД(каждый код что-то значит например 404 - клиентская ошибка)
            // statusText //* текстовое описание ответа от сервера
            // response //* ответ от сервера(то что мы используем на клиетне)
            // readyState //* текущее состояние запроса( от 0 до 4)

            //*события запроса
        //    loadstart
        //    progress
        //    abort
        //    timeout
        //    loadend
        readystatechange//*отслеживает состояние готовности запроса в данный текущий момент
      }); 
 
 
 
  
 

 
