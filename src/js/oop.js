// poprzedni sposób

const product = {
    title: 'JS od podstaw',
    price: 10,
}

// OOP
// kształt/ struktura/klasa

// function Product(title, price) {
//     this.title = title;
//     this.price = price;
// }
// obiekty dziedziczą wartości z prototypu
// Product.prototype.getPrice = function() { return this.price; }
// Product.prototype.setTitle = function(title) { this.title = title; }

class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    setTitle(title) {
        this.title = title;
    }
}

class PromotionProduct extends Product {
    constructor (title, price) {
        super(title, price)
        this.title = 'Kurs w promocji: ' + title;
    }

    getPromotionPrice() {
        return this.price - 10;
    }

}

const p1 = new Product('JS od podstaw', 100);
const p2 = new PromotionProduct('PHP od podstaw', 80);

p1.setTitle('JS dla zaawansowanych')

// console.log(p1.getPrice());
// console.log(p2.getPromotionPrice());
// console.log(p1);
console.log(p2.__proto__);
console.log(Object.getPrototypeOf(p2));