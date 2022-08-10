---
layout: post
title:  "JavaScript Versus C# - private properties"
date:   2022-08-10 08:00:00 +0200
categories: JavaScript C# comparison
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

The intention of this post is to compare a prototype chain based language with a language that implements the classic object-oriented model. Specifically ECMAScript (JavaScript) and C# (.NET) were chosen.

The code examples are based on the following user story: As a buyer I want to add items to the cart so that I can view the total cost.

# JavaScript
## Before 6th Edition – ECMAScript 2015
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
{% endhighlight %}

## After 6th Edition – ECMAScript 2015
TBD
