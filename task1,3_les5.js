//'use strict';

// //Задание №1
// function chess() {

//     const sizeTable = 8


//     const contenerElements = document.querySelector('table')

//     for (let row = 0; row <= sizeTable + 1; row++) {
//         const elem = document.createElement('tr');
//         contenerElements.appendChild(elem);
//         for (let col = 0; col <= sizeTable + 1; col++) {
//             const cell = document.createElement('td');
//             contenerElements.appendChild(cell);
//             elem.appendChild(cell);
//             if (col == 0 | col == sizeTable + 1) {
//                 cell.style.backgroundColor = 'white'
//                 cell.style.border = '0px'
//                 if (sizeTable + 1 > row & row > 0) { cell.textContent = sizeTable + 1 - row }

//             }
//             else if (row == 0 | row == sizeTable + 1) {
//                 cell.style.backgroundColor = 'white'
//                 cell.style.border = '0px'
//                 cell.textContent = String.fromCharCode(64 + col)
//             }

//             else if ((col + row) % 2 == 0) {
//                 cell.style.backgroundColor = 'black'
//             }
//             else
//                 cell.style.backgroundColor = 'white'

//         }
//     }
// }

// chess();


// //Задание №3
// const basket = {
//     apple: {
//         weight: 0,
//         price: 30,
//     },

//     bananas: {
//         weight: 0,
//         price: 10,
//     },
//     garnet: {
//         weight: 0,
//         price: 20,
//     },
//     orange: {
//         weight: 1,
//         price: 0,
//     },


// };

// const getBasket = {

//     sum: 0,
//     n: 0,
//     priceBasket() {
//         for (const name in basket) {
//             this.sum += basket[name].weight * basket[name].price
//             this.n++
//         }

//     },


//     getTextSumBasket() {
//         this.priceBasket();
//         if (this.sum == 0) {
//             return "Корзина пуста!"
//         }
//         else
//             return `В корзине: ${this.n} товар(ов) на сумму ${this.sum} рублей`

//     }

// }

// document.querySelector('body').insertAdjacentHTML('afterbegin', `<div><i> ${getBasket.getTextSumBasket()}</i></div>`)







