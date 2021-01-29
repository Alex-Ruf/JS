//Задание 1
// var arr = []
// for (let n = 2; n < 101; n++) { arr.push(n) }
// for (let a = 0; a < arr.length; ++a) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % arr[a] == 0 && arr[i] != arr[a])
//             arr.splice(i, 1);
//     }
// }
// console.log(arr)

// Задание 2

// var arr = [
//     ['яблоки', 1, 100],
//     ['бананы', 4, 60],
//     ['гранаты', 1, 300],
//     ['апельсины', 4, 100],
// ];

// var sum = 0
// var result = arr.reduce(function (sum, current) {
//     return sum + (current[1] * current[2])
// }, sum);
// console.log(result);

// Задание 3

// //расположение цифр по вертикале
// for (let i = 0; i < 10; console.log(i), i++) { };

// //расположение цифр по горизонтале
// for (let i = 0, num = []; (i == 10) ? console.log(num.join(" ")) : num.push(i); i++) { };


//Задание 4

// for (let i = 0, x = 'x'; i < 20; i++, console.log(x), x = x + 'x') { }
