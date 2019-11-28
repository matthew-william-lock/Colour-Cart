/* Author : Matthew Lock
Date : 20 November 2019
Website : https://colourcart.000webhostapp.com/ */

// This script was made for the sole purpose of adding selctioning 
// functionality to the circles found in index.html

// Setting onClick border functionality
$(".c1").click(onCircleC1);
$(".c2").click(onCircleC2);
$(".c3").click(onCircleC3);
$(".c4").click(onCircleC4);
$(".c5").click(onCircleC5);
$(".c6").click(onCircleC6);
$(".c7").click(onCircleC7);
$(".c8").click(onCircleC8);
$(".c9").click(onCircleC9);
$(".c10").click(onCircleC10);
$(".c11").click(onCircleC11);
$(".c12").click(onCircleC12);
$(".c13").click(onCircleC13);
$(".c14").click(onCircleC14);
$(".c15").click(onCircleC15);
$(".c16").click(onCircleC16);
$(".c17").click(onCircleC17);
$(".c18").click(onCircleC18);

// Enables add to cart button which is initially disabled
function enableButton(){
    $( ".btn" ).removeClass( "shake" );
    selected=true; 
}

function onCircleC1() {
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c1").toggleClass("clicked");
    $(".colourSelected").html("Electric Red");                  // Change text to show selected colour
    selectedColour = "#c62930";                                 // Global variable indicates what colour is selected
    selectedColourName = "Electric Red";                        // Global variable -name of selected colour
    enableButton();                                             // Enable selected global variable
    undsicountedPrice=c1;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    }    
}

function onCircleC2() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c2").toggleClass("clicked");
    $(".colourSelected").html("Powerful Purple");
    selectedColour = "#6327f4";
    selectedColourName = "Powerful Purple";
    enableButton(); 
    undsicountedPrice=c2;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    }  
}

function onCircleC3() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c3").toggleClass("clicked");
    $(".colourSelected").html("Black ");
    selectedColour = "black";
    selectedColourName = "Black";  
    enableButton(); 
    undsicountedPrice=c3;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    }  
}

function onCircleC4() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c4").toggleClass("clicked");
    $(".colourSelected").html("White");
    selectedColour = "white";
    selectedColourName = "White";
    enableButton(); 
    undsicountedPrice=c4;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC5() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c5").toggleClass("clicked");
    $(".colourSelected").html("Orange");
    selectedColour = "#ef8130";
    selectedColourName = "Orange";
    enableButton(); 
    undsicountedPrice=c5;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC6() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c6").toggleClass("clicked");
    $(".colourSelected").html("Yummy Yellow");
    selectedColour = "#fef450";
    selectedColourName = "Yummy Yellow";
    enableButton(); 
    undsicountedPrice=c6;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    }   
}

function onCircleC7() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c7").toggleClass("clicked");
    $(".colourSelected").html("Lighter Blue");
    selectedColour = "#1d53ae";
    selectedColourName = "Lighter Blue";
    enableButton(); 
    undsicountedPrice=c7;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC8() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c8").toggleClass("clicked");
    $(".colourSelected").html("Darker Blue");
    selectedColour = "#285a7b";
    selectedColourName = "Darker Blue";
    enableButton(); 
    undsicountedPrice=c8;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC9() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c9").toggleClass("clicked");
    $(".colourSelected").html("Pale Colour");
    selectedColour = "#dab595";
    selectedColourName = "Pale Colour";
    enableButton(); 
    undsicountedPrice=c9;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC10() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c10").toggleClass("clicked");
    $(".colourSelected").html("Sky Blue");
    selectedColour = "#54c0f9";
    selectedColourName = "Sky Blue";
    enableButton(); 
    undsicountedPrice=c10;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC11() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c11").toggleClass("clicked");
    $(".colourSelected").html("Vomit Green");
    selectedColour = "#90fa4d";
    selectedColourName = "Vomit Green";
    enableButton(); 
    undsicountedPrice=c11;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC12() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c12").toggleClass("clicked");
    $(".colourSelected").html("Pink");
    selectedColour = "#ea37b3";
    selectedColourName = "Pink";
    enableButton(); 
    undsicountedPrice=c12;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC13() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c13").toggleClass("clicked");
    $(".colourSelected").html("Ugle Pale");
    selectedColour = "#dab595";
    selectedColourName = "Ugle Pale";
    enableButton(); 
    undsicountedPrice=c13;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC14() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c14").toggleClass("clicked");
    $(".colourSelected").html("Pale Green");
    selectedColour = "#418d65";    
    selectedColourName = "Pale Green";
    enableButton(); 
    undsicountedPrice=c14;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC15() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c15").toggleClass("clicked");
    $(".colourSelected").html("49th Shade Grey");
    selectedColour = "#6f6975"; 
    selectedColourName = "49th Shade Grey"; 
    enableButton(); 
    undsicountedPrice=c15;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC16() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c16").toggleClass("clicked");
    $(".colourSelected").html("Pale Brown");
    selectedColour = "#6e502b"; 
    selectedColourName = "Pale Brown"; 
    enableButton(); 
    undsicountedPrice=c16;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC17() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c18" ).removeClass( "clicked" );
    $(".c17").toggleClass("clicked");
    $(".colourSelected").html("Another Blue");
    selectedColour = "#69dad1"; 
    selectedColourName = "Another Blue";
    enableButton(); 
    undsicountedPrice=c17;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}

function onCircleC18() {
    $( ".c1" ).removeClass( "clicked" );
    $( ".c2" ).removeClass( "clicked" );
    $( ".c3" ).removeClass( "clicked" );
    $( ".c4" ).removeClass( "clicked" );
    $( ".c5" ).removeClass( "clicked" );
    $( ".c6" ).removeClass( "clicked" );
    $( ".c7" ).removeClass( "clicked" );
    $( ".c8" ).removeClass( "clicked" );
    $( ".c9" ).removeClass( "clicked" );
    $( ".c10" ).removeClass( "clicked" );
    $( ".c11" ).removeClass( "clicked" );
    $( ".c12" ).removeClass( "clicked" );
    $( ".c13" ).removeClass( "clicked" );
    $( ".c14" ).removeClass( "clicked" );
    $( ".c15" ).removeClass( "clicked" );
    $( ".c16" ).removeClass( "clicked" );
    $( ".c17" ).removeClass( "clicked" );
    $(".c18").toggleClass("clicked");
    $(".colourSelected").html("Light Grey");
    selectedColour = "#c4c4c4"; 
    selectedColourName = "Light Grey"; 
    enableButton(); 
    undsicountedPrice=c18;                                       // Set the undiscounted price
    newPrice = (undsicountedPrice*0.75).toFixed(2);             // Set Discounted price
    if (shoppingCart.length<1) {
        tempTextUndsicountedPrice = "$"+undsicountedPrice;          // Set temp variables
        tempTextDsicountedPrice = "$"+newPrice;
    } 
}