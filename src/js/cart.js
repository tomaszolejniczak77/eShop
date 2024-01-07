"use strict";

// const { json } = require("body-parser");

(() => {
const cart = {
  price: 0,
  getPrice(cb) {
    this.price = cb(this.items, this.getDiscountIfEnabled());
    if(this.price < 0) this.price = 0;

    return this.price;
    },
  getDiscount() {
  return this.discount.amount;
  },
  getDiscountIfEnabled() {
    if (this.discount.enabled){
      return this.getDiscount();
    } else {
      return 0;
    }
  },
  removeCourse(id) {
    console.log(id-1);
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.items));
    calculatePrice();
  },
  discount: {
    amount: 10,
    enabled: false,
  },
  items: [],
}

cart.items = JSON.parse(localStorage.getItem('items'));

console.log(cart.items);


const tBodyDiv = document.getElementById("tBody-items");
const discountDiv = document.getElementById("discount");
const addDiscountInputDiv = document.getElementById("add-discount");
const totalPriceDiv = document.getElementById("total-price");
const discountAmount = document.getElementById("discount-amount");

// cart.items.sort((a, b) => a.price - b.price); // sortowanie po cenie

for (const item of cart.items) {
    addItem(item);
}

function addItem(item) {
 tBodyDiv.innerHTML += `<tr data-course-id="${item.id}">
 <td><button class="rowBtnDel">x</button></td>
 <td>${item.name}</td>
 <td class="quantity"><input type="number" value="1"></td>
 <td>${item.price}</td>
 </tr>`
}

const mark = (e) => {
    if (e.target.tagName === 'TD'){
    e.target.closest('tr').classList.toggle('marked')
    }
}

const deleteRowBtnDiv = document.querySelectorAll(".rowBtnDel")
const deleteRowIfZeroDiv = document.querySelectorAll(".quantity")

const deleteRow = (e) => {
    if (e.target.tagName === "BUTTON"){
    const row = e.target.closest('tr');
    cart.removeCourse(Number(row.dataset.courseId));
    row.remove(); 
    }
}

const deleteRowIfZero = (e) => {
    if(Number(e.target.value) === 0){
    const row = e.target.closest('tr');
    cart.removeCourse(Number(row.dataset.courseId));
    row.remove(); 
    }
}

const addDiscount = function(e) {
  this.discount.enabled = e.target.checked;
  if(this.getDiscount() > 0){
    discountAmount.innerHTML = this.getDiscount();
    discountDiv.classList.toggle('off');
  }
  calculatePrice();
}

const getPriceRegularClient = (items, discount) => {
  let price = items.reduce((acu, curr) => acu + curr.price, -discount)
  return price;
}

const getPriceSuperClient = (items, discount) => {
  let price = items.reduce((acu, curr) => acu + curr.price -10, 0)
  price -= discount;
  return price;
}

const calculatePrice = () => {
    const superClient = false;
    let cb = getPriceRegularClient;
    if (superClient) {cb = getPriceSuperClient};
    let total = cart.getPrice(cb);
    totalPriceDiv.innerHTML = total;
}

calculatePrice();

const checkedByHTML = +addDiscountInputDiv.dataset.ifChecked;

const clickEvent = new MouseEvent("click")

if(checkedByHTML) {
     addDiscountInputDiv.dispatchEvent(clickEvent);
}

tBodyDiv.addEventListener("click", function(e) {
    mark(e);
    deleteRow(e);
    })

addDiscountInputDiv
.addEventListener("click", addDiscount.bind(cart));

tBodyDiv.addEventListener("change", deleteRowIfZero);

const goToSummaryBtn = document.querySelector('#goToSummary');

const savePriceToStore = () => {
  localStorage.setItem('totalPrice', cart.price);
}

goToSummaryBtn.addEventListener('click', savePriceToStore);

})();









