'use strict'

const shop = {
    shopList: null,


    cardProducts: [{
        id: 1,
        product_name: 'apple',
        price: 30,
        image: 'img/apple_min.jpg',
        imageFull: 'img/apple.jpg',

    },

    {
        id: 12,
        product_name: 'bananas',
        price: 10,
        image: 'img/bananas_min.jpg',
        imageFull: 'img/bananas_full1.jpg',
    },
    {
        id: 34,
        product_name: 'garnet',
        price: 20,
        image: 'img/garnet_min.jpg',
        imageFull: 'img/garnet.jpg',
    },
    {
        id: 44,
        product_name: 'orange',
        price: 50,
        image: 'img/orange_min.jpg',
        imageFull: 'img/orange.jpg',
    },
    ],


    general() {

        this.shopList = document.getElementById('shop');
        this.cardProducts.forEach(cardProduct => {
            this.shopList.insertAdjacentHTML('beforeend', this.card(cardProduct))
        });

        basket.getBasket();
        this.click();

    },


    card(cardProduct) {
        return `<div id=${cardProduct.id}  class="productShop">
        
                    Наименование: ${cardProduct.product_name}<br> 
                    <br> 
                    Цена за шт.: ${cardProduct.price} КУПИТЬ<br> 
                    <img class = "image_min" src = "${cardProduct.image}"  data-image_full= "${cardProduct.imageFull}"alt="">                      
                </div>`;
    },

    click() {

        this.shopList.addEventListener('click', (event) => this.buttonClick(event));



    },
    buttonClick(event) {


        if (event.target.className === "productShop") {

            for (let i = 0; i < this.cardProducts.length; i++) {
                if (this.cardProducts[i].id == event.target.id) {
                    basket.addProduct(this.cardProducts[i])

                }
            }
        }

        if (event.target.tagName === 'IMG') {
            this.openImage(event.target.dataset.image_full, event.target.id)


        };

    },
    openImage(src, id) {
        const fullImage = document.querySelector('.galleryWrapper')
        fullImage.insertAdjacentHTML('beforeend', `<div class="galleryWrapper__screen"></div>
        <img class="galleryWrapper__close" data-close_button="close" src = "img/close.png" alt="">
        <img class="arrow" data-flip_button="flip" src = "img/arrow.png" alt="">
        <img class="galleryWrapper__image" src = "${src}" alt="">`)

        fullImage.addEventListener('click', (event) => this.clickImage(event, id))

    },
    clickImage(event, id) {
        if (event.target.dataset.close_button === "close") {
            document.querySelector('.galleryWrapper').textContent = ''
        }


    }


};



const basket = {
    cardList: null,


    products: [

    ],
    card(product) {
        return `<div class="product" >
                Наименование: ${product.product_name}<br>
                    Количество: ${product.weight} кг.<br>
                        Цена за шт.: ${product.price}<br>         
                </div>`;
    },

    addProduct(event) {
        let product = this.products.find(item => item.id == event.id)

        if (this.products.length == 0) {
            this.products.push({ ...event, weight: 1 })
        }


        else if (product) {
            product.weight++
        }


        else
            this.products.push({ ...event, weight: 1 })

        this.getBasket();

    },

    getBasket() {

        this.cardList = document.querySelector('.card');

        this.cardList.textContent = ''


        if (this.products.length) {
            this.products.forEach(product => {
                this.cardList.insertAdjacentHTML('beforeend', this.card(product))
            });
            this.cardList.insertAdjacentHTML('beforeend', `В корзине: ${this.products.length} товар(ов) на сумму ${this.sumPrice()} рублей`);


        } else
            this.cardList.insertAdjacentHTML('beforeend', 'Корзина пуста');

    },
    sumPrice() {
        return this.products.reduce(function (sum, product) {
            return sum + product.weight * product.price

        }, 0)


    }

};


shop.general()




















// const shop = {
//     shopList: null,
//     addClick: document.getElementById('shop'),

//     cardProducts: [{
//         id: 1,
//         product_name: 'apple',
//         price: 30,

//     },

//     {
//         id: 12,
//         product_name: 'bananas',
//         price: 10,

//     },
//     {
//         id: 34,
//         product_name: 'garnet',
//         price: 20,

//     },
//     {
//         id: 44,
//         product_name: 'orange',
//         price: 50,

//     },
//     ],


//     general() {

//         this.shopList = document.getElementById('shop');
//         this.cardProducts.forEach(cardProduct => {
//             this.shopList.insertAdjacentHTML('beforeend', this.card(cardProduct))
//         });

//         basket.generalBasket();
//         this.click();

//     },


//     card(cardProduct) {
//         return `<div  class="productShop">

//                     <div><b>Наименование</b>: ${cardProduct.product_name}</div>
//                     <div><b>Цена за шт.</b>: ${cardProduct.price}</div> 
//                     <button id=${cardProduct.id} type="submit">Купить</button>              
//                 </div>`;
//     },

//     click() {

//         this.addClick.addEventListener('click', (event) => this.addButtonClick(event));

//     },
//     addButtonClick(event) {
//         if (!this.isCorrect(event)) return;
//         for (let i = 0; i < this.cardProducts.length; i++) {
//             if (this.cardProducts[i].id == event.target.id) {
//                 basket.addProduct(this.cardProducts[i])
//             }
//         }


//     },
//     isCorrect(event) {

//         return event.target.tagName === "BUTTON";
//     },

// }

// const basket = {
//     cardList: null,


//     products: [

//     ],
//     card(product) {
//         return `<div class="product" >
//                     <div><b>Наименование</b>: ${product.product_name}</div>
//                     <div><b>Количество</b>: ${product.weight}</div>   
//                     <div><b>Цена за шт.</b>: ${product.price}</div>               
//                 </div>`;
//     },




//     addProduct(event) {
//         let product = this.products.find(item => item.id == event.id)

//         if (this.products.length == 0) {
//             this.products.push({ ...event, weight: 1 })
//         }


//         else if (product) {
//             product.weight++
//         }


//         else
//             this.products.push({ ...event, weight: 1 })

//         this.generalBasket();

//     },

//     generalBasket() {

//         this.cardList = document.querySelector('.card');

//         this.cardList.textContent = ''


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


// shop.general()