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

