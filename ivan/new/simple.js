
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
// numbersCopy.c.x = 88;        //* при поверхностном копиовании вложенные объекты сохраняют ссылочные значения
// console.log(numbers);
// console.log(numbersCopy);

const add = {
    r: 4,
    f: 3
};
console.log(Object.assign(numbers, add));//* соединение объектов через Object.assign

const copyObj = Object.assign({}, add);//* копирование объектов через Object.assign
console.log(copyObj);

add.r = 44;
console.log(add);
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

