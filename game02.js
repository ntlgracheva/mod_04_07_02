'use strict'

let n = +prompt('Введите первое целое число для ограничения диапазона:', 1);
let m = +prompt('Введите второе целое число для ограничения диапазона:', 10);

let max = n > m ? n : m;
let min = m < n ? m : n;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;


let userNumbers = [];

const userNumbersLength = Math.floor((max - min) * 0.3);

while (true) {

    if (userNumbers.length === userNumbersLength) { console.error('Ваши попытки закончились!'); break }

    let N = prompt(`Введите целое число в диапазоне от ${min} до ${max}:`, 3);

    if (N === null) { throw 'Действие отменено' } else { N = +N }

    if (isNaN(N)) { console.error('Введи число!'); continue }

    if (N < min || N > max) { console.error(`Число должно находиться в диапазоне от ${min} до ${max}.\nПовторите ввод.`); continue }

    if (N < randomNum) {

        if (userNumbers.includes(N)) {
            console.error("Это число вы уже вводили"); continue
        };

        userNumbers.push(N);
        console.log('Больше!'); continue
    }

    if (N > randomNum) {

        if (userNumbers.includes(N)) {
            console.error("Это число вы уже вводили"); continue
        };

        userNumbers.push(N);
        console.log('Меньше!'); continue
    }

    if (N === randomNum) { console.log('Правильно!'); break }
}
