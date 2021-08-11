/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let gettbody = document.getElementsByTagName('tbody')[0];

let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  gettbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  for (let i = 0; i < cart.items.length; i++) {
    let createTr = document.createElement('tr');

    gettbody.appendChild(createTr);

    let createTd = document.createElement('td');
    createTd.textContent = 'x';
    createTr.appendChild(createTd);

    createTd = document.createElement('td');
    console.log(cart.items);

    createTd.textContent = cart.items[i].quantity;
    createTr.appendChild(createTd);

    createTd = document.createElement('td');
    createTd.textContent = cart.items[i].product;
    createTr.appendChild(createTd);

  }


  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR


}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  let arr =  event.target.innerText.split(' ');
  if (event.target.innerText === 'x')
    event.target.parentElement.remove();
  cart.removeItem(arr[1]);
  cart.saveToLocalStorage();
}

// This will initialize the page and draw the cart on screen
renderCart();
