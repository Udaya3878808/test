var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () {
  var countryData = JSON.parse(xhr.responseText);
  countryData.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("captial:", country.capital);
    console.log("Flag:", country.flags.png);
  });
};
xhr.send();
