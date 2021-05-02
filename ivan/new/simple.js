//  'use strict'
  
// //  const box = document.querySelector('.box');
// //  const btn = document.querySelector('button');
// // //  const widht = box.clientWidth;
// // //  const height = box.clientHeight;

// // // const widht = box.offsetWidth;
// // // const height = box.offsetHeight;

// // const widht = box.scrollWidth;
// // const height = box.scrollHeight;

// //  console.log(widht, height);

// //  btn.addEventListener('click', () => {
// //     //  box.style.height = box.scrollHeight  + 'px';   //*(инлайн стили) при обращении к стилям мы получаем число ,чтобы изменения корректно изменились
// //    console.log(box.scrollTop);                                         //*   нужно добавить формат измерения в данном случае 'px'
// // });                     

// // console.log(box.getBoundingClientRect()); //* получает все координаты ,который есть у элемента
// // console.log(box.getBoundingClientRect().top) //* имеет разные значения их можно получать отдельно(прим. top)
// // //* computed-стили (в конкретном выражении , которые применились.Изменить нельзя ,тоько прочитать)

// // const style = window.getComputedStyle(box);//* получение объекта со всеми его свойствами
// // console.log(style.display); //*получение конкретного свойства
// // //? работать с псевдоэлементами в JS  не т возможности , но возможно получить свойства псевдоэлементов
// // //? инлайн стили приоритетнее чем computed  стили

// // document.documentElement.scrollTop = 0; //* обращение ко всей странице как одному объекту
// // window.scrollBy(0, 400); //* проскролить относительно  положения пользователя
// // window.scrollTo(0, 400); //* проскролить относительно всей страницы



// const modalOpen = document.querySelector('[data-modal]'),
//       modalClose = document.querySelector('[data-close]'),
//       modal = document.querySelector('.modal');

//       modalOpen.addEventListener('click', () => {
//          modal.style.visibility = 'visible';

//       });

//       modalClose.addEventListener('click', () => {
//          modal.style.visibility = 'hidden';
//       })

      
'use strict' //* использование строгого режима

// function showThis(a, b) {   //*без использывания строгого режима ф-я будет ссылаться на глобальный объект(window)
//    console.log(this);   //* если есть строгий р. то undefined
//    function sum() {
//        console.log(this);
//       //  return this.a + this.b;  
//       return a + b ;   //* используем замыкания (хоть переменные и неопределены в sum()),ф-я не находит их внутри себя  и обращается к родительской ф-ии
//    }
//    console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//    a: 20,
//    b: 15,
//    sum: function() {
//       console.log(this);//* вызывая контекст получаем весь объект целиком
//    }                   //* если же мы поместим в метод ф-ию ,которая ссылается на контекст  то будеt undefined
// };
// obj.sum();  //* контекст у методов объектов - сам объект!

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function() {
//       console.log('Hello' + this.name);
//    }
// }
// let ivan = new User('Ivan', 25);

// // ivan.hello();
// //! this в конструкторах и классах - это новый экземпляр объекта

// function sayName (surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name: "Jhon"
// };
// //*call и apply делают одно и тоже(устанавлвают заданный контекст) ,отличия начинаются в синаксисе при появлении доп.аргементов ф-ии (прим.surname)
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
 

// function count(num) {
//    return this*num;
// }
// const double = count.bind(2); //* создаёт новую ф-ию (видоизменяя контекст count)
// console.log(double(3));
// console.log(double(22));
// //* bind создаёт новую ф-ию

 
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
const double = (a, b ) => a * 2;//*действие должно помещаться в одну строчку
const double = a => a * 2; //* синтаксис когда у ф-ии один аргумент
