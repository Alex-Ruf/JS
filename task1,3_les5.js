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
//     cardList: null,

//     products: [{
//         id: 1,
//         product_name: 'apple',
//         weight: 0,
//         price: 30,
//     },

//     {
//         id: 12,
//         product_name: 'bananas',
//         weight: 0,
//         price: 10,
//     },
//     {
//         id: 34,
//         product_name: 'garnet',
//         weight: 10,
//         price: 20,
//     },
//     {
//         id: 44,
//         product_name: 'orange',
//         weight: 1,
//         price: 0,
//     },
//     ],
//     card(product) {
//         return `<div >
//                     <div><b>Наименование</b>: ${product.product_name}</div>
//                     <div><b>Количество</b>: ${product.weight}</div>   
//                     <div><b>Цена за шт.</b>: ${product.price}</div>               
//                 </div>`;
//     },

//     general() {
//         this.cardList = document.querySelector('.card');


//         if (this.products.length) {
//             this.products.forEach(product => {
//                 this.cardList.insertAdjacentHTML('beforeend', this.card(product))
//             });
//             this.cardList.insertAdjacentHTML('beforeend', `В корзине: ${this.products.length} товар(ов) на сумму ${this.sumPrice()} рублей`);


//         } else
//             this.cardList.insertAdjacentHTML('beforeend', 'Корзина пуста');

//     },
//     sumPrice() {
//         return this.products.reduce(function (sum, product) {
//             return sum + product.weight * product.price

//         }, 0)


//     }

// };

// basket.general()







