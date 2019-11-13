$(document).ready(function(){

  var $orders = $('pizzaOrders');
  $.ajax({
    type: 'GET',
    url: 'https://localhost:8000/api/orders',
    success: function(data) {
      console.log('success', data);
      $.each(orders, function(i, order) {
        $orders.append('<p>name: ' + order.name + '</p>');
      })
    }
  });
});
