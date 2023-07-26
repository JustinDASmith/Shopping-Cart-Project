// Sample data for items
const items = [
  { name: "Custom Air Force 1s", price: 175 },
  { name: "Woman's Crop Sweatshirt", price: 25 },
  { name: "Men's Graphic Tee", price: 25 },
  { name: "Monthly Outfit Subscription", price: 100 }
];

// Get all quantity elements and buttons
const quantityElements = document.querySelectorAll('.quantity');
const plusButtons = document.querySelectorAll('.bi-plus-lg');
const minusButtons = document.querySelectorAll('.bi-dash-lg');

// Get the cart amount element, cart container, and clear cart button
const cartAmountElement = document.querySelector('.cartAmount');
const cartContainer = document.querySelector('.cart-container');
const cartTotalElement = document.querySelector('.cart-total');
const clearCartButton = document.getElementById('clearCartButton');

// Initialize cart counter and cart items
let cartCounter = 0;
const cartItems = [];

// Function to update the cart counter and display
function updateCartCounter() {
  cartAmountElement.textContent = cartCounter;
}

// Function to add item to cart
function addToCart(itemName, itemPrice) {
  cartCounter++;
  updateCartCounter();

  const existingCartItem = cartItems.find(item => item.name === itemName);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
  }

  updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(itemName) {
  const existingCartItem = cartItems.find(item => item.name === itemName);

  if (existingCartItem) {
    cartCounter -= existingCartItem.quantity;
    cartItems.splice(cartItems.indexOf(existingCartItem), 1);
    updateCartCounter();
    updateCartDisplay();
  }
}

// Function to update the cart display
function updateCartDisplay() {
  cartContainer.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <span>${item.name}</span>
      <span>Quantity: ${item.quantity}</span>
      <span>Price: $${item.price * item.quantity}</span>
      <button class="remove-button" onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartContainer.appendChild(cartItemElement);

    total += item.price * item.quantity;
  });

  cartTotalElement.textContent = `Total: $${total}`;
}

// Function to handle the plus button click
function handlePlusButtonClick(index) {
  quantityElements[index].textContent++;
  addToCart(items[index].name, items[index].price);
}

// Function to handle the minus button click
function handleMinusButtonClick(index) {
  if (quantityElements[index].textContent > 0) {
    quantityElements[index].textContent--;
    removeFromCart(items[index].name);
  }
}

// Add event listeners to the plus and minus buttons
for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener('click', () => handlePlusButtonClick(i));
}

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener('click', () => handleMinusButtonClick(i));
}

// Function to clear the cart and remove all items
function clearCart() {
  cartItems.length = 0;
  cartCounter = 0;
  updateCartCounter();
  updateCartDisplay();
}

// Add event listener to the "Clear Cart" button
clearCartButton.addEventListener('click', clearCart);

