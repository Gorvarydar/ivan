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
