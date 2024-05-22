var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () {
  var countryData = JSON.parse(xhr.responseText);
  const totalpopulation = countryData.reduce((accumulator,country) => 
accumulator + country.population, 0);
console.log("total population of countries:" , totalpopulation);
}
xhr.send();