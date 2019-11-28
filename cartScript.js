// Global variables
var selectedColour="none";                // Variable for setting colour scheme of dots
var selectedColourName = "None";          // Variable for acquiring color names
var selected=false;                       // Variable for enabling add to cart button

var discount = 0.25 ;                     // Variable for setting discount
var undsicountedPrice = 17.99;            // Variable for determining undiscounted price
var newPrice = undsicountedPrice*0.75;    // Variable for determining discounted price
var tempTextUndsicountedPrice;            // Temporary Variable
var tempTextDsicountedPrice;              // Temporary Variable

var totalUndiscountedPrice=0;             // Final Original Price
var totalDiscountedPrice=0;               // Final Discounted Price

// Prices of circles
var c1=17.99;
var c2=15.99;
var c3=13.99;
var c4=12.99;
var c5=19.99;
var c6=5.99;
var c7=29.99;
var c8=4.99;
var c9=14.99;
var c10=10.99;
var c11=9.99;
var c12=5.99;
var c13=4.99;
var c14=3.99;
var c15=2.99;
var c16=15.99;
var c17=16.99;
var c18=19.99;

 

// Item class ===========================================================================================================================================

class Item {
  constructor(colour, colourName,quantity, newPrice, oldPrice) {
    this.colour = colour;
    this.colourName=colourName;
    this.quantity = quantity;
    this.newPrice = newPrice;
    this.oldPrice= oldPrice;
  }
}

// end of Item class =====================================================================================================================================

var shoppingCart=[];

// Get the modal for cart
var modal = document.getElementById("myModal");

// Get the modal for checkout
var checkoutmodal = document.getElementById("checkoutModal");

// Get the button that opens the cart modal
var btn = document.getElementById("cartBtn");

// Get the button that opens the checkout modal
var checkoutbtn = document.getElementById("checkoutBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var checkoutspan = document.getElementsByClassName("close")[1];

//Get cancel element
var close = document.getElementsByClassName("cancel")[0];

//Set modal color selected
 var p = document.getElementsByClassName("modalSelectedColor")[0];

//Close modal when user clicks cancel
close.onclick = function() {
  modal.style.display = "none";
  checkoutmodal.style.display = "none";
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  // Only open model if color is selected
  if (selected) {
    p.innerHTML=selectedColourName+"";
    modal.style.display = "block";
  }

}

// When user clicks checkout, open checkout Modal ================================================================================================================
checkoutbtn.onclick=function(){
  checkoutmodal.style.display = "block";

  // Remove all current details
  var section = document.getElementById("checkoutList");
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  //Add headers
  var header = document.createElement("SPAN");

  var headerItem = document.createElement("h1");
  headerItem.innerText = "Item";
  headerItem.style="display:inline-block; width:28%";

  var headerPrice = document.createElement("h1");
  headerPrice.innerText = "Old Price";
  headerPrice.style="display:inline-block; width:28%";

  var headerDiscount = document.createElement("h1");
  headerDiscount.innerText = "New Price";
  headerDiscount.style="display:inline-block; width:28%";

  header.appendChild(headerItem);
  header.appendChild(headerPrice);
  header.appendChild(headerDiscount);
  section.appendChild(header);

   //Add Items
   var i;
   for (i = 0; i < shoppingCart.length; i++) {

    var listItem = document.createElement("SPAN");

    var item = document.createElement("P");
    item.innerText = shoppingCart[i].colourName;
    item.style="display:inline-block; width:28%;padding:0 15px";

    var OP = document.createElement("P");
    OP.innerText = shoppingCart[i].oldPrice;
    OP.style="display:inline-block; width:28%;padding:0 15px";

    var NP = document.createElement("P");
    NP.innerText = shoppingCart[i].newPrice;
    NP.style="display:inline-block; width:28%;padding:0 15px";


    listItem.appendChild(item);
    listItem.appendChild(OP);
    listItem.appendChild(NP);
    section.appendChild(listItem);
  }

  //Add Break
  var HR = document.createElement("HR");
  section.appendChild(HR);

  //Add final Details

  var info = document.createElement("SPAN");

  var totalItem = document.createElement("h1");
  totalItem.innerText = "Total";
  totalItem.style="display:inline-block; width:28%";

  var blank = document.createElement("h1");
  blank.innerText = "";
  blank.style="display:inline-block; width:28%";

  var total = document.createElement("h1");
  total.innerText = "$"+totalDiscountedPrice;
  total.style="display:inline-block; width:28%";

  info.appendChild(totalItem);
  info.appendChild(blank);
  info.appendChild(total);
  section.appendChild(info);
}

// ===========================================================================================================================================

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
checkoutspan.onclick = function() {
  checkoutmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == checkoutmodal) {
    checkoutmodal.style.display = "none";
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
  var section = document.getElementById("cart");
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  
  var count = $('.count').val();
  var i ;

  for (i = 0; i < count; i++) {
    // Add to shopping cart array
    var newItem = new Item(selectedColour,selectedColourName,count,newPrice,undsicountedPrice)
    shoppingCart.push(newItem);
  }

  totalUndiscountedPrice=0;
  totalDiscountedPrice=0;

  for (i = 0; i < shoppingCart.length; i++) {

    // Add items in cart to details
    var section = document.getElementById("cart");
    var circle = document.createElement("SPAN");
    circle.classList="dot outside nohover";
    var innerCircle = document.createElement("SPAN");
    innerCircle.classList="dot inside nohover";

    // innerCircle.style="background-color:"+selectedColour;
    innerCircle.style="background-color:"+shoppingCart[i].colour;

    circle.appendChild(innerCircle);
    section.appendChild(circle);

    //Change prices to be displayed
    totalDiscountedPrice=totalDiscountedPrice+ Number(shoppingCart[i].newPrice);
    totalUndiscountedPrice=totalUndiscountedPrice+Number(shoppingCart[i].oldPrice);
  }

  // Remove decimal spaces
  totalDiscountedPrice=(totalDiscountedPrice).toFixed(2);
  totalUndiscountedPrice=totalUndiscountedPrice.toFixed(2);

  // Checkout
  if ($('.count').val() > 0) {
    $(".discountedPrice").html("$"+totalDiscountedPrice); // Discounted Price
    $(".originalPrice").html("$"+totalUndiscountedPrice);   // Undiscounted Price
    $(".items").html(shoppingCart.length);                  // Amount of items in basket

    // Add checkout button
    $(".checkout.btn.cart").addClass("display");
  }

  modal.style.display = "none";
}

// Individual pricing functionality ==============================================================================================

function resetText(){
  $(".originalPrice").html(tempTextUndsicountedPrice);
  $(".discountedPrice").html(tempTextDsicountedPrice);
}

// Set text on hover functionality ===============================================================================================
function setText1() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c1);
  var newPriceText = (c1*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText2() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c2);
  var newPriceText = (c2*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText3() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c3);
  var newPriceText = (c3*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText4() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c4);
  var newPriceText = (c4*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText5() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c5);
  var newPriceText = (c5*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText6() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c6);
  var newPriceText = (c6*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText7() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c7);
  var newPriceText = (c7*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText8() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c8);
  var newPriceText = (c8*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText9() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c9);
  var newPriceText = (c9*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText10() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c10);
  var newPriceText = (c10*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText11() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c11);
  var newPriceText = (c11*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText12() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c12);
  var newPriceText = (c12*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText13() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c13);
  var newPriceText = (c13*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText14() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c14);
  var newPriceText = (c14*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText15() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c15);
  var newPriceText = (c15*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText16() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c16);
  var newPriceText = (c16*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText17() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c17);
  var newPriceText = (c17*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

function setText18() {
  // Set temp variables
  tempTextUndsicountedPrice = document.getElementsByClassName('originalPrice')[0].innerHTML
  tempTextDsicountedPrice = document.getElementsByClassName('discountedPrice')[0].innerHTML

  // Set new variables and text
  $(".originalPrice").html("$"+c18);
  var newPriceText = (c18*0.75).toFixed(2);
  $(".discountedPrice").html("$"+newPriceText);
}

// Reload ===========================================================================================================================================

function reloadPage(){
  location.reload();
}