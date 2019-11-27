// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get cancel element
var close = document.getElementsByClassName("cancel")[0];


//Close modal when user clicks cancel
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Increment functionality
$(document).ready(function(){
  $('.count').prop('disabled', true);
   $(document).on('click','.plus',function(){
  $('.count').val(parseInt($('.count').val()) + 1 );
  });
    $(document).on('click','.minus',function(){
    $('.count').val(parseInt($('.count').val()) - 1 );
      if ($('.count').val() == -1) {
      $('.count').val(0);
    }
      });
});

//Loop used to display selected color n times (n = selected number of modal)
function addColours() {

  // Remove all objects currently added to cart
  var section = document.getElementById("details");
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  
  var count = $('.count').val();
  var i ;
  for (i = 0; i < count; i++) {
    var section = document.getElementById("details");
    var para = document.createElement("P");
    para.innerText = "This is a paragraph.";
    section.appendChild(para);
  }

  // Checkout
  if ($('.count').val() > 0) {
    $(".btn").html("Checkout Now"); //Change text to checkout

    // Change button to redirect to checkout page

    btn.onclick = function() {
      location.href = "checkout.html";
    }

    var newPrice = 14.99*count;
    var oldPrice = 17.99*count;
    $(".discountedPrice").html("$"+newPrice); // Discounted Price
    $(".originalPrice").html("$"+newPrice);   // Undiscounted Price
    $(".items").html(count);                  // Amount of items in basket
  }

  modal.style.display = "none";
}
