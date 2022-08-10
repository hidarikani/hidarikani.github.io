---
layout: post
title:  "JavaScript Versus C# - Private Properties"
date:   2022-08-10 08:00:00 +0200
categories: JavaScript C# comparison
---
The intention of this post is to compare a prototype chain based language with a language that implements the classic object-oriented model. Specifically, ECMAScript (JavaScript) and C# (.NET) were chosen.

The code examples are based on the following user story: as a buyer I want to add items to the cart so that I can view the total cost.

## JavaScript
### 5th Edition – ECMAScript 2009
#### Using Closures
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

#### Using `new` operator
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
