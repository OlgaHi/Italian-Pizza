function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
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



$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let topping = $("input:radio[name=topping]:checked").val();
    let size = $("input:radio[name=size]:checked").val();
    let quantity = parseInt($("#quantity").val());
    console.log(topping)
  
    
    let pizza1 = new Pizza(topping, size);
    // console.log(newTicket);
    newTicket.ticketCharge()
    // console.log(newTicket.ticketPrice);
    $("#answer").text(`We have you booked for ${movieTitle} at ${time}:00, and the ticket price is ${newTicket.ticketPrice} dollars!`)
  });
});
