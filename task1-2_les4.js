// const myNumber = {
//     'единицы': 0,
//     'десятки': 0,
//     'cотни': 0,
// }

// function getNumber(params) {
//     if (params >= 0 && params < 1000) {
//         for (value in myNumber) {

//             myNumber[value] = params % 10
//             params = parseInt(params / 10)

//         }
//         return myNumber
//     }
//     else console.log('Введенное число меньше 0 или больше 999')
//     return myNumber
// }
// console.log(getNumber(303))


// // Задание 2

// const basket = {
//     apple: {
//         weight: 3,
//         price: 200,
//     },

//     bananas: {
//         weight: 3,
//         price: 100,
//     },
//     garnet: {
//         weight: 2,
//         price: 200,
//     },
//     orange: {
//         weight: 1,
//         price: 500,
//     },

// }
// function priceBasket(basket) {
//     var sum = 0
//     for (const name in basket) {
//         sum += basket[name].weight * basket[name].price
//     }
//     return sum
// }

// console.log(priceBasket(basket)); 
