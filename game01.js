'use strict'

let randomNum = Math.floor(Math.random() * 101);

while (true) {
    let N = prompt('Введите целое число в диапазоне от 1 до 100:', 75);

    if (N === null) { throw 'Действие отменено' } else { N = +N }

    if (isNaN(N)) { console.error('Введи число!'); continue }

    if (N < 0 || N > 100) { console.error('Число должно находиться в диапазоне от 0 до 100.\nПовторите ввод.'); continue }

    if (N < randomNum) { console.log('Больше!'); continue }

    if (N > randomNum) { console.log('Меньше!'); continue }

    if (N === randomNum) { console.log('Правильно!'); break }
}
