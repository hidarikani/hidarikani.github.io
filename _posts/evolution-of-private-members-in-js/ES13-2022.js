class ShoppingCart {
    #items = [];
  
    addItem(item) {
      this.#items.push(item);
    }
    
    calcTotal() {
      return this.#items.reduce(function (acc, curr) {
        return (acc += curr.price);
      }, 0);
    }
  }
  var cart = new ShoppingCart();
  
  cart.addItem({
    name: "Ice cream",
    price: 2,
  });
  
  cart.addItem({
    name: "Backpack",
    price: 150,
  });
  
  var total = cart.calcTotal();
  console.log('total: ' + total);
  console.log('private: ' + cart.items); // undefined