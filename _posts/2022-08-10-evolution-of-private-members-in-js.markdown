---
layout: post
title:  "Evolution of Private Members in JavaScript"
date:   2022-08-10 08:00:00 +0200
categories: ECMAScript JavaScript C# comparison
---
Let's compare different techniques for creating private members in JavaScript.
In the beginning JavaScript didn't have classes, so private members were created using closures and the new operator.
Later classed were added, however, they translate to prototype chains anyway.

The code examples are based on the following user story: as a buyer I want to add items to the cart so that I can view the total cost.

## JavaScript
### 5th Edition – ECMAScript 2009
#### Function returning an object
{% highlight javascript %}
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
cart.items; // undefined
{% endhighlight %}

#### `new` and `this`
{% highlight javascript %}
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
cart.items; // undefined
{% endhighlight %}

### th Edition – ECMAScript 2015
{% highlight javascript %}
{% include_relative evolution-of-private-members-in-js/ES6-2015.js %}
{% endhighlight %}

### ECMAScript 2022
{% highlight javascript %}
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
cart.items; // undefined
{% endhighlight %}
