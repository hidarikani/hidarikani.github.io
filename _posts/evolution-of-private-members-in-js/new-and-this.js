function ShoppingCart() { // constructor function
    var items = []; // private
  
    this.addItem = function (item) {
      items.push(item);
    }
    
    this.calcTotal = function() {
      return items.reduce(function (acc, curr) {
        return (acc += curr.price);
      }, 0);
    }
  };
  
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