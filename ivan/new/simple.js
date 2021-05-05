// //  'use strict'
  
// // //  const box = document.querySelector('.box');
// // //  const btn = document.querySelector('button');
// // // //  const widht = box.clientWidth;
// // // //  const height = box.clientHeight;

// // // // const widht = box.offsetWidth;
// // // // const height = box.offsetHeight;

// // // const widht = box.scrollWidth;
// // // const height = box.scrollHeight;

// // //  console.log(widht, height);

// // //  btn.addEventListener('click', () => {
// // //     //  box.style.height = box.scrollHeight  + 'px';   //*(инлайн стили) при обращении к стилям мы получаем число ,чтобы изменения корректно изменились
// // //    console.log(box.scrollTop);                                         //*   нужно добавить формат измерения в данном случае 'px'
// // // });                     

// // // console.log(box.getBoundingClientRect()); //* получает все координаты ,который есть у элемента
// // // console.log(box.getBoundingClientRect().top) //* имеет разные значения их можно получать отдельно(прим. top)
// // // //* computed-стили (в конкретном выражении , которые применились.Изменить нельзя ,тоько прочитать)

// // // const style = window.getComputedStyle(box);//* получение объекта со всеми его свойствами
// // // console.log(style.display); //*получение конкретного свойства
// // // //? работать с псевдоэлементами в JS  не т возможности , но возможно получить свойства псевдоэлементов
// // // //? инлайн стили приоритетнее чем computed  стили

// // // document.documentElement.scrollTop = 0; //* обращение ко всей странице как одному объекту
// // // window.scrollBy(0, 400); //* проскролить относительно  положения пользователя
// // // window.scrollTo(0, 400); //* проскролить относительно всей страницы

// class ColorCircle {
//     constructor (radius, color) {
//         this.radius = radius;
//         this.color = color;
//     }
// colorRadius () {
//     if(this.radius > 10 ) {console.log('red circle')} else {
//         console.log('green circle');
//     }
// }
// }

// class ColorCircleWithText extends ColorCircle {
//     constructor(radius, color, text) {
//         super(radius, color);
//         this.text = text;
//     }
//     showText() {
//         console.log('Circle');
//     }
// }

// const  got = new ColorCircleWithText  (12, 'purpure', 'круг');

// // console.log(got);
// console.log(got.colorRadius(5));
'use string'
const persone = {
    name: 'Alex',
    tel: '+9794551554'
}; 
//* все  браузеры имеют встроенные объекты JSON , у которых есть свойства и методы (JSON.stringufy - превращает объекты JS в формат JSON для отправки на сервер)  
//* в JSON все сущности должны быть записаны  ""- формат необходимый для протоколов данных на сервере
console.log(JSON.stringify(persone));
//* JSON.parse(преобразует код с сервера для работы в JS)

console.log(JSON.parse(JSON.stringify(persone)));


 