// JavaScript Document
/*** Add Aria to the buttons**/
$( document ).ready(function() {

function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyPress(event) {
  // Check to see if space or enter were pressed
  if (event.key === " " || event.key === "Enter") {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
}

});