const express = require('express'); //подключили библиотеку 
const app = express(); //создали экземпляр приложения express
const port = 3000; //определили порт для соединения с приложением
const host = 'localhost'; 

const pug = require('pug');
const nunjucks = require('nunjucks');

app.get('/', (req, res) => { //определяем обработчик запроса к корню сайта
    res.send('Hello World by Express JS!');
}); 

// Используем шаблонизатор PUG
app.get('/pug', (req, res) => { //
    const compiledFunction = pug.compileFile('hello.pug');
    const resp = compiledFunction({name: 'Тестер'});
    res.send(resp);
}); 
// --

// Используем шаблонизатор nunjacks
nunjucks.configure({
    autoescape: true,
    express: app
});
app.get('/nunjucks', (req, res) => { 
    res.render('hello.html', {name: 'Тестер'});
}); 
//--

// запускаем сервер на прослушивание порта
app.listen(port, host, () => { 
    //Выводим в консоле сообщение о запуске сервера
    console.log(`Сервер запущен по адресу http://${host}:${port}/`); 
});

