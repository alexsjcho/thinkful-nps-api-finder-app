"use strict";

//Activate the Form Event Listner
$(document).ready(function() {
  watchSubmitForm();
});

//Watch the Submit Form Listeners
function watchSubmitForm() {
  $("#search-form").submit(e => {
    e.preventDefault();
    console.log("it works!");
    let searchParkName = $("#park-name-input").val();
    let numResults = $("#park-number-input").val();
  });
}

//GET Request to National Parks Service API

//Render GET Request Results to the Dom
