const cart = {
  cartItems: undefined,
  loadFromStorage() {
    this.cartItem = JSON.parse(localStorage.getItem("cart-oop"));
    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionsId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionsId: "2",
        },
      ];
    }
  },
  saveToStorage() {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },
  addToCart(productId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionsId: "1",
      });
    }
    this.saveToStorage();
  },

  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cart = newCart;
    this.saveToStorage();
  },

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    this.cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  },
};

cart.loadFromStorage();
console.log(cart);
