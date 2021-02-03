function Pizza(topping, size, quantity) {
  this.topping = topping;
  this.size = size;
  this.quantity = quantity;
  this.price = 0;
  this.totalPrice = 0;
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "small") {
    this.price = 10;
  } else if (this.size === "medium") {
    this.price = 15;
  } else {
    this.price = 20;
  } 
}

Pizza.prototype.calculateTotalPrice = function() {
  this.totalPrice = this.price * this.quantity
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let topping = $("input:radio[name=topping]:checked").val();
    let size = $("input:radio[name=size]:checked").val();
    let quantity = parseInt($("#quantity").val());
    
    const pizza1 = new Pizza (topping, size, quantity);
    if (quantity > 0) {
    pizza1.calculatePrice();
    pizza1.calculateTotalPrice();
    
    $("#display_order").text(`Thank you for your order! Your total price is ${pizza1.totalPrice} $.`).slideDown();
    $(this)[0].reset();
    } else {
      $("#alert").show()
    }
    
  });
});
