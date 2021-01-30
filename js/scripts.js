function Pizza(topping, size, quantity) {
  this.topping = topping;
  this.size = size;
  this.quantity = quantity;
}

Pizza.prototype.calculatePrice = function() {
  if (this.topping && this.size === "small") {
    return this.price = 10;
  } else if (this.topping && this.size === "medium") {
    return this.price = 15;
  } else if (this.topping && this.size === "large") {
    return this.price = 20;
  } 
}

Pizza.prototype.calculateTotalPrice = function() {
 return this.totalPrice = this.price * this.quantity
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let topping = $("input:radio[name=topping]:checked").val();
    let size = $("input:radio[name=size]:checked").val();
    let quantity = parseInt($("#quantity").val());
    
    const pizza1 = new Pizza (topping, size, quantity)
    pizza1.calculatePrice();
    pizza1.calculateTotalPrice();
    
    $("#display_order").text(`Thank you for your order! Your total price is ${pizza1.totalPrice} $.`).slideDown();
  });
});
