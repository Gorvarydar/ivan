'use strict'

const usd = document.querySelector('.usd'),
      rub = document.querySelector('.rub');

      usd.addEventListener('input', () => {
          const request = new XMLHttpRequest();

        //   request.open(method, url, async, login, password) //*  open() - метод собирает настройки которые помогут сделать зпрос
        //                                    //* 1 аргумент -метод для запроса,
        //                                    //*2-й адрес по которому будет сделан запрос
        //                                    //*3-й вид запроса async (значит асинхронность , в ajax gпо умолчанию true )
        //                                    //*4-й логин (необязательные)
        //                                    //*5-й пароль (необязательные)
            //? самый распространённе методы GET(получить с сервера) и POST(отправить на сервер)
            request.open('GET','new/current.json');
            request.setRequestHeader('Content-type','application/json; charset=utf-8'); //* http заголовки уточняем какой именно будет запрос
            request.send()
        })

