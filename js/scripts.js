function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}



Pizza.prototype.calculatePrice = function() {
  if (this.topping && this.size === "small") {
    this.price = 10;
  } else if (this.topping && this.size === "medium") {
    this.price = 15;
  } else if (this.topping && this.size === "large") {
    this.price = 20;
  } 
}
let pizza1 = new Pizza("cheese", "small");
pizza1.calculatePrice()
console.log(pizza1)
