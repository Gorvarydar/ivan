 'use strict'
  
//  const box = document.querySelector('.box');
//  const btn = document.querySelector('button');
// //  const widht = box.clientWidth;
// //  const height = box.clientHeight;

// // const widht = box.offsetWidth;
// // const height = box.offsetHeight;

// const widht = box.scrollWidth;
// const height = box.scrollHeight;

//  console.log(widht, height);

//  btn.addEventListener('click', () => {
//     //  box.style.height = box.scrollHeight  + 'px';   //*(инлайн стили) при обращении к стилям мы получаем число ,чтобы изменения корректно изменились
//    console.log(box.scrollTop);                                         //*   нужно добавить формат измерения в данном случае 'px'
// });                     

// console.log(box.getBoundingClientRect()); //* получает все координаты ,который есть у элемента
// console.log(box.getBoundingClientRect().top) //* имеет разные значения их можно получать отдельно(прим. top)
// //* computed-стили (в конкретном выражении , которые применились.Изменить нельзя ,тоько прочитать)

// const style = window.getComputedStyle(box);//* получение объекта со всеми его свойствами
// console.log(style.display); //*получение конкретного свойства
// //? работать с псевдоэлементами в JS  не т возможности , но возможно получить свойства псевдоэлементов
// //? инлайн стили приоритетнее чем computed  стили

// document.documentElement.scrollTop = 0; //* обращение ко всей странице как одному объекту
// window.scrollBy(0, 400); //* проскролить относительно  положения пользователя
// window.scrollTo(0, 400); //* проскролить относительно всей страницы



const modalOpen = document.querySelector('[data-modal]'),
      modalClose = document.querySelector('[data-close]'),
      modal = document.querySelector('.modal');

      modalOpen.addEventListener('click', () => {
         modal.style.visibility = 'visible';

      });

      modalClose.addEventListener('click', () => {
         modal.style.visibility = 'hidden';
      })

      




 


