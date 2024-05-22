var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () {
  var countryData = JSON.parse(xhr.responseText);
  var currency = countryData.filter((element) => {
 for (let key in element.currencies) {
    if(element.currencies[key].code === "USD") {
        return element;
    }
}
});
console.log(currency);
}
xhr.send();