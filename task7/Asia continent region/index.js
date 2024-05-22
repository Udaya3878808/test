var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () {
  var countryData = JSON.parse(xhr.responseText);
  const asiaCountries = countryData.filter(
    (country) => country.region === "asia");
    console.log("countries from Asia continent /region:", asiaCountries);
};

xhr.send();