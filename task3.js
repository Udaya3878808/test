var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };

function areObjectsEqual(obj1, obj2) {
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(areObjectsEqual(obj1, obj2));

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
  var countries = JSON.parse(xhr.responseText);
  for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].name.common + " : " + countries[i].flag);
    console.log("population: ", countries[i].population);
    console.log("region: ", countries[i].region);
    console.log("subregion: ", countries[i].subregion);
  }
};
xhr.send();
