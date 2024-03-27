// print odd number in an array//

var array = function (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
};
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("odd numbers in the array:",array(myArray));

// sum of all number in an array//

var array = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) sum = sum + array[i];
  return sum;
};
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("sum of all number in an array:", array(myArray));

//Return all the prime numbers in an array//

var array = function (num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
var result = [1];
console.log("Return all the prime numbers in an array:", array(result));

// Return all the palindromes in a array //

var array = function (arr, n) {
  for (var i = 0; i < n; i++) {
    var ans = ispalindrome(arr[i]);
    if (ans == false) return false;
  }
  return true;
};

var result = [1, 2, 3, 3, 2, 1];
console.log("Return all the palindromes in a array:", array(result));

//Remove duplicates from an array//

var array = function (array) {
  var dup = [...new Set(array)];
  console.log(dup);
};
var result = [1, 0, 3, 4, 6];
console.log("Remove duplicates from an array:", array(result));

// Rotate an array by K times //
var array = function (a, n, k) {
  k = k % n;
  for (let i = 0; i < n; i++) {
    if (i < k) {
      document.write(a[n + i - k] + " ");
    } else {
      document.write(a[i - k] + " ");
    }
  }
  document.write("<br>");
};
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let k = 2;
console.log("Rotate an array by K times:", array(Array));

// print odd number in an array in Arrow Function //

var array = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
};
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("odd numbers in the array in Arrow Function:",array(myArray));

// sum of all number in an array in Array Function //

var array = (array) => {
  var sum = 0;
  for (var i = 0; i < array.length; i++) sum = sum + array[i];
  return sum;
};
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("sum of all number in an array in Arrow Function :",array(myArray));


//Return all the prime numbers in an array in Arrow Function //

var array = (num) => {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
var result = [2, 3, 4, 5];
console.log("Return all the prime numbers in an array in Arrow Function :",array(result));

// Return all the palindromes in a array in Arrow Function //

var array = (arr, n) => {
  for (var i = 0; i < n; i++) {
    var ans = ispalindrome(arr[i]);
    if (ans == false) return false;
  }
  return true;
};

var result = ([1, 2, 3, 3, 2, 1], 10);
console.log("Return all the palindromes in a array in Arrow Function :",array(result));
  
