'use strict';
function checkForSpam(str) {
    let newstr = str.toLowerCase();
    let message = false;
    if (newstr.includes('spam') || newstr.includes('sale')) {
       message = true;
    }
    return message;
}

console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // trueФункция предикат возвращает true или false

// Напиши функцию checkForSpam(message),
//     принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true,
//     если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.