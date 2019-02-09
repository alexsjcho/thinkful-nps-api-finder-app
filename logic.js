"use strict";

const apiKey = "yygjdYlxpEOToOYgnK75ZwZ4OmUTOssFQrsKZ5Kd";
const searchURL = "https://api.nps.gov/api/v1/";

//Activate the Form Event Listner
$(document).ready(function() {
  watchSubmitForm();
});

//Watch the Submit Form Listeners
function watchSubmitForm() {
  console.log("watchSumbitForm works!");
  $("#search-form").submit(e => {
    e.preventDefault();
    let searchState = $("#state-name-input").val();
    let numResults = $("#number-input").val();
    getNationalParks(searchState, numResults);
  });
}

//Format Search Query via Params
function formatQueryParams(params) {
  console.log("formatQueryParams function works!");
  const queryItems = Object.keys(params).map(
    key => `${stateCode(key)} = ${stateCode(params[key])}`
  );
  return queryItems.join("&");
}

//GET Request to National Parks Service API
function getNationalParks(query, numResults = 10) {
  console.log("getNationalPark works!");

  const params = {
    key: apiKey,
    q: query,
    numResults,
    stateCode: "string"
  };

  const queryString = formatQueryParams(params);
  const url = searchURL + "?" + queryString;

  //Test in console whether we get the right search query
  console.log(url);

  fetch(searchURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      alert("Something went wrong, try again!");
    });
}

//Render GET Request Results to the Dom
function displayResults(responseJson) {
  console.log("displayResult function works");
  $("#results-list").empty();
  for (let i = 0; i < responseJson.items.length; i++) {
    $("#results-list").append(`<div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">${responseJson.items[i].data.fullName}</h3>
    </div>
    <div class="panel-body">
    <div class= "row>
     <div class="col-md-3">
     <h4 class="panel-title">${responseJson.items[i].data.description}</h4>
     <p> <p>
     </div>
     <div class= "row>
     <div class="col-md-3">
     <a href=" ${responseJson.items[i].data.url}">Visit Park's Website</a>
     </div>
    </div> 
  </div>`);
  }
  $("#results-list").removeClass("hidden");
}
