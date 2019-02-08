"use strict";

const apiKey = "yygjdYlxpEOToOYgnK75ZwZ4OmUTOssFQrsKZ5Kd";
const searchURL = "https://api.nps.gov/api/v1/";

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
function getNationalParks() {
  console.log("getNationalPark works!");
  const params = {
    key: apiKey,
    q: query,
    numResults
  };
}

//Render GET Request Results to the Dom
function displayResults(numResults = 10) {
  console.log("displayResult works");
  $("#results-list").empty();
  $("#results-list").append(`<div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">${responseJson.data.fullName}</h3>
    </div>
    <div class="panel-body">
    <div class= "row>
     <div class="col-md-3">
     <h4 class="panel-title">${responseJson.data.description}</h4>
     <p> <p>
     </div>
     <div class= "row>
     <div class="col-md-3">
     <a href=" ${responseJson.data.url}">Visit Park's Website</a>
     </div>
    </div> 
  </div>`);
}
