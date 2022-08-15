function shoppingCart() {
    var items = []; // private
  
    addItem = function (item) {
      items.push(item);
    }
  
    calcTotal = function() {
      return items.reduce(function (acc, curr) {
        return (acc += curr.price);
      }, 0);
    }
  
    return {
      addItem: addItem,
      calcTotal: calcTotal
    }
  }
  
  var cart = shoppingCart();
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