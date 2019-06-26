// Unit 14 Assigment - Wake up sheeple!
// JavaScript and DOM Manipulation
// @version 1.0
// @author Martha Meses

const colHeaders=['datetime','city','state','country','shape','durationMinutes','comments'];

function updateTable(data, columns) {
    var table = d3.select("#ufo-table");
    var	tbody = table.select('tbody');
    tbody.html('');

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
      .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return {column: column, value: row[column]};
        });
      })
      .enter()
      .append('td')
      .text(function (d) { return d.value; });
  return table;
};

// Change filter label
function changeLabel(){
  var selLabel = document.getElementById("selFilter");
  var labelText = "Enter a " + selLabel.value + ": ";
  d3.select('#labelFilter').text(labelText);
};

// Filter with date 
function filterByDate(data) {
    var filteredData = data.filter(function (d) {
        var inputElement = d3.select("#formFilter");
        var inputValue = inputElement.property("value");
        return d.datetime === inputValue;
    });
    return filteredData;
};

// Filter with state
function filterByState(data) {
    var filteredData = data.filter(function (d) {
        var inputElement = d3.select("#formFilter");
        var inputValue = inputElement.property("value");
        return d.state === inputValue;
    });
    return filteredData;
};

// Filter with city
function filterByCity(data) {
  var filteredData = data.filter(function (d) {
      var inputElement = d3.select("#formFilter");
      var inputValue = inputElement.property("value");
      return d.city === inputValue;
  });
  return filteredData;
};

// Filter with country
function filterByCountry(data) {
  var filteredData = data.filter(function (d) {
      var inputElement = d3.select("#formFilter");
      var inputValue = inputElement.property("value");
      return d.country === inputValue;
  });
  return filteredData;
};

// Filter with shape
function filterByShape(data) {
  var filteredData = data.filter(function (d) {
      var inputElement = d3.select("#formFilter");
      var inputValue = inputElement.property("value");
      return d.shape === inputValue;
  });
  return filteredData;
};

//Clear the input field
function reset(){
  var resetButton = document.getElementById("formFilter");
  if(resetButton){
      resetButton.value= "";
 }
};
// Load table of original data
updateTable(data,colHeaders); 

// D3 selector
var submit = d3.select("#filter-btn");
var selFilter = d3.select("#selFilter");

submit.on("click", function() {
  // Preven reload the webpage
   d3.event.preventDefault();
  // Filter data and update the table
  selValue = selFilter.property("value");
  if (selValue === "date m/d/yyyy"){
    var result = filterByDate(data);
  };
  if (selValue === "city"){
    var result = filterByCity(data);
  };
  if (selValue === "state"){
    var result = filterByState(data);
  };
  if (selValue === "country"){
    var result = filterByCountry(data);
  };
  if (selValue === "shape"){
    var result = filterByShape(data);
  };
  reset();
  updateTable(result,colHeaders);
});


