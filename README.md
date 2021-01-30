# **Italian Pizza**
By Olha Hizhytska

This website is for a pizza company where a user can choose one of the individual toppings (cheese, pepperoni, anchovy), size to order a pizza and the wished quantity. After selecting available options, the total cost of the order will be displayed.



![Homepage](images/)

## Technologies Used:

* JavaScript
* HTML
* CSS
* jQuery
* Bootstrap


## Description

This application:
 - Allow the user to choose toppings, size and quantity for the pizza they'd like to order.
 - Create a pizza object constructor with properties for toppings and size.
 - Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

 

## Setup

- Clone this repository to your desktop, using next command:

- Navigate to the top level of the directory.

- Open index.html in your browser.

## Specs
Describe: new Pizza()

1.Test: "Object constructor Pizza should create a new object with specified properties and value".
Expect: (new Pizza("cheese","small").toEqual(Pizza {topping: "cheese", size: "small"})).

2.Test: "Prototype constructor should create a new property "price" and a method to calculate this price for their instances".
Expect: (pizza1.calculatePrice(1).toEqual(Pizza {topping: "cheese", size: "small", price: 10})).

3.Test: "Prototype constructor should create a new method to calculate the total price for their instances".
Expect: (pizza1.calculateTotalPrice(2).toEqual(Pizza {topping: "cheese", size: "small", price: 20})).

Describe submit()

1.Test: "Clicking on submit button, it should collect all the data from inputs".
Expect: (submit(input: toppings, input: size, input: quantity).toEqual(anchovy large 1)).

2.Test: "It should check if a user provide a number more than 0".
Expect: (submit(input: toppings: pepperoni; size: medium; quantity: 0).toEqual(false)).

## Known Bugs

- No known issues

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
Copyright (c) 2021 Olha Hizhytska

## Contact Information

- Olha Hizhytska olgainfotech@gmail.com

## Please check my Portfolio [here]()