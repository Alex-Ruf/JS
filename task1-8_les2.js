// Задание 1
// ++a выполняет сложение a + 1  и выводит полученный результат
// b++ выводит  результат b, а потом только выполняет сложение b + 1

// Задание 2
// var a = 2;
// var x = 1 + (a *= 2);
// a = 4   x = 5, тк a *= 2 тоже самое a = a * 2

// Задание 3
// var a = 4, b = -10;
// if (a >= 0 && b >= 0) {
//     console.log(a - b);
// } else if (a < 0 && b < 0) {
//     console.log(a * b)
// } else console.log(a + b)

// Задание 4

// var a = 5;
// switch (a) {
//     case 0: console.log('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
//         break;
//     case 1: console.log('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15')
//         break;
//     case 2: console.log('2 3 4 5 6 7 8 9 10 11 12 13 14 15')
//         break;
//     case 3: console.log('3 4 5 6 7 8 9 10 11 12 13 14 15')
//         break;
//     case 4: console.log('4 5 6 7 8 9 10 11 12 13 14 15')
//         break;
//     case 5: console.log('5 6 7 8 9 10 11 12 13 14 15')
//         break;
//     case 6: console.log('6 7 8 9 10 11 12 13 14 15')
//         break;
//     case 7: console.log('7 8 9 10 11 12 13 14 15')
//         break;
//     case 8: console.log('8 9 10 11 12 13 14 15')
//         break;
//     case 9: console.log('9 10 11 12 13 14 15')
//         break;
//     case 10: console.log('10 11 12 13 14 15')
//         break;
//     case 11: console.log('11 12 13 14 15')
//         break;
//     case 12: console.log('12 13 14 15')
//         break;
//     case 13: console.log('13 14 15')
//         break;
//     case 14: console.log('14 15')
//         break;
//     case 15: console.log('15')
//         break;
// }



// // Задание 5

// function getSumm(first, second) {
//     return first + second
// }

// function getDifference(first, second) {
//     return first - second
// }
// function getDivision(first, second) {
//     if (second != 0) return first / second
//     return 'Делить на 0 - нельзя'
// }
// function getMultiplication(first, second) {
//     return first * second
// }
// console.log(getSumm(10, 3), getDifference(10, 3), getDivision(10, 0), getMultiplication(10, 3));


// // Задание 6

// function getSumm(first, second) {
//     return first + second
// }

// function getDifference(first, second) {
//     return first - second
// }
// function getDivision(first, second) {
//     if (second != 0) return first / second
//     return 'Делить на 0 - нельзя'
// }
// function getMultiplication(first, second) {
//     return first * second
// }

// function mathOperation(arg1, arg2, operation) {

//     switch (operation) {
//         case '+':
//             return getSumm(arg1, arg2);

//         case '*':
//             return getMultiplication(arg1, arg2);

//         case '/':
//             return getDivision(arg1, arg2);

//         case '-':
//             return getDifference(arg1, arg2);

//         default:
//             return 'Неизвестная операция'
//     }
// }
// console.log(mathOperation(10, 0, '/'));
// console.log(mathOperation(10, 0, '-'));
// console.log(mathOperation(10, 3, '*'));


//  Задание №7

//Сравнения преобразуют null в число, рассматривая его как 0, поэтому null >= 0 true, 
// для нестрогого равенства == значений undefined и null действует особое правило:
// эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
// Поэтому  null == 0 ложно.


//  Задание №8

// function getRecursion(val, pow) {
//     switch (true) {
//         case pow > 0: return val * power(val, pow - 1)
//         case pow === 0: return val = 1
//         case pow < 0: return 1 / val * power(val, pow + 1)
//     }
// }

// function power(val, pow) {
//     switch (true) {
//         case val > 0: return getRecursion(val, pow)
//         case val < 0: return -getRecursion(val, pow)

//         case val === 0 && pow === 0: return 1
//         case val === 0: return 0
//     }
// }
// console.log(power(1, -1))

