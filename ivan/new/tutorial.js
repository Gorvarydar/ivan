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

console.log(typeof(+"6")); //* сщвременная форма унарный +

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