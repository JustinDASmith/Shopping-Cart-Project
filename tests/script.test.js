// Import the functions from the script.js file
import { addToCart, removeFromCart, clearCart, cartItems, cartCounter } from '.script.js';
  
  // Test adding items to the cart
  test('Add items to the cart', () => {
    addToCart("Custom Air Force 1s", 175);
    addToCart("Woman's Crop Sweatshirt", 25);
  
    expect(cartCounter).toBe(2);
    expect(cartItems.length).toBe(2);
  });
  
  // Test removing items from the cart
  test('Remove items from the cart', () => {
    removeFromCart("Custom Air Force 1s");
  
    expect(cartCounter).toBe(1);
    expect(cartItems.length).toBe(1);
  });
  
  // Test clearing the cart
  test('Clear the cart', () => {
    clearCart();
  
    expect(cartCounter).toBe(0);
    expect(cartItems.length).toBe(0);
  });
  