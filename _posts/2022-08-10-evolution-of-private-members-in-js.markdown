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
{% include_relative evolution-of-private-members-in-js/fn-returning-object.js %}
{% endhighlight %}

#### `new` Operator and `this` Keyword
{% highlight javascript %}
{% include_relative evolution-of-private-members-in-js/new-and-this.js %}
{% endhighlight %}

### 6th Edition – ECMAScript 2015
{% highlight javascript %}
{% include_relative evolution-of-private-members-in-js/ES6-2015.js %}
{% endhighlight %}

### ECMAScript 2022
{% highlight javascript %}
{% include_relative evolution-of-private-members-in-js/ES13-2022.js %}
{% endhighlight %}
