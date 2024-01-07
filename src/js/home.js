"use strict";

import createCart from "./helpers/creatcart.js";

const coursesList = document.querySelector('.courses-list');
const counter = document.querySelector('.counter');
const buttonsCart = document.querySelectorAll('.cartButton');

const cart =  createCart(counter);

const startItems = JSON.parse(localStorage.getItem('items'))

if(startItems) {
    cart.setItems(startItems);
}

const toggleClass = (className, Text, mode) => {
    return (element) => {
        element.classList[mode](className);
        element.innerText = Text;
    }
}

const addClassInCart = toggleClass('clicked', 'Usuń z koszyka', 'add');
const removeClassInCart = toggleClass('clicked', 'Dodaj do koszyka', 'remove' )

const addToCartHandler = (e) => {
    if (e.target.tagName !== 'BUTTON') return
        const title = e.target.dataset.title;
        const price = +e.target.dataset.price;
        const id = Number(e.target.dataset.id);

      if(cart.hasItem(id)) {
            cart.remove(id);
            removeClassInCart(e.target);
        } else {
            cart.add(id, title, price); 
            addClassInCart(e.target);
        }
            
}

coursesList.addEventListener('click', addToCartHandler );

buttonsCart.forEach((button) => {
    if (cart.hasItem(+button.dataset.id)) {
        addClassInCart(button)
    }
})

