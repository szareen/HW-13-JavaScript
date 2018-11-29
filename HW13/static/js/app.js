

// YOUR CODE HERE!
// Get references to the tbody element, input fields and buttons
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");
// Add an event listener to the searchButton and resetButton, call functions when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

// from data.js
var tableData = data;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
      // Get get the current sighting object and its fields
      var sighting = tableData[i];
      var fields = Object.keys(sighting);
      // Creating a new row in the tbody, setting the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sighting[field];
      }
    }
  }

  function handleSearchButtonClick() {
    // Removing leading and trailing whitespace in the search items
  
    var filterDate = $dateInput.value.trim();
    if (filterDate != "") {
      tableData = data.filter(function (sighting) {
        var sightingDate = sighting.datetime;
        return sightingDate === filterDate;
      });
    };
    var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingCity = sighting.city;
      return sightingCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === filterState;
    });
  };
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingCountry = sighting.country;
      return sightingCountry === filterCountry;
    });
  };
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingShape = sighting.shape;
      return sightingShape === filterShape;
    });
  };
  renderTable();
};

// Resetting the data and search form after a search is completed
function handleResetButtonClick() {
    tableData = data;
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
    renderTable();
  }
  
  // Render the table for the first time on page load
  renderTable();