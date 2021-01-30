# **   **
By Olha Hizhytska



![Homepage](images/)

## Technologies Used:

* JavaScript
* HTML
* CSS
* jQuery
* Bootstrap


## Description


 

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