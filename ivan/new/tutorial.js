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

const options = {
    name: "test",
    widht: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

const {border, bg} = options.colors; //* деструктуризация объекта
console.log(border);
console.log(bg);
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
    height:144,
    widht: 57,
    
    makeTest: function() {//!создание метода объекта , создаётся внутри объекта!
        console.log("test");
    }
    
}
rt.makeTest();

console.log(Object.keys(rt));
console.log(Object.keys(rt).length);

for(let i in rt) {
    console.log(`you will got ${rt[i]}`)
}


rt.makeTest();