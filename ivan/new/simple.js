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



// const modalOpen = document.querySelector('[data-modal]'),
//       modalClose = document.querySelector('[data-close]'),
//       modal = document.querySelector('.modal');

//       modalOpen.addEventListener('click', () => {
//          modal.style.visibility = 'visible';

// //       });

//       modalClose.addEventListener('click', () => {
//          modal.style.visibility = 'hidden';
//       })

      
// // const btn = document.querySelector('.btn');
// // btn.addEventListener('click', (e) => {
// // e.target.style.backgroundColor = 'green';
// // });

// const but = document.querySelector('button');
// but.addEventListener('click', function(){
//    this.style.backgroundColor = 'red';
// })
// const btn = document.querySelector('.but');
// btn.addEventListener('click', function() {  //* если использывать => то контекст(this) теряется

      //!КЛАССЫ (ES6) КРАСИВЫЕ ОБЁРТКИ ФУНКЦИЙ КОНСТРУКТОРОВ/СИНТАКСИЧЕСКИЙ САХАР
      
      'use strict'
   
      class Rectangle { //* название классов пишется с большой буквы
         constructor (height, widht) { //* создаём новый объект
            this.height = height ;//*обращаемся к экземпляру нового созданного объекта
            this.widht = widht; //* иговорим что он будет свойствами, которые мы берём из аргументов ф-ии
         }
         calcArea() { //* создаём метод объекта вычисляющий площадь
            return this.height * this.widht
         }
      }

class ColorRectangleWithText extends Rectangle {
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