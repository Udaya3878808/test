var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () {
  var countryData = JSON.parse(xhr.responseText);
  const populationLessThan2Lakh = countryData.filter(
    (country) => country.population < 200000
  );
  console.log("countries with a population of less than 2 lakhs:", populationLessThan2Lakh);
}
xhr.send();