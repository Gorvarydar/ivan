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

console.log(typeof(!! 5));




