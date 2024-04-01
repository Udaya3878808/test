
// write a person class to hold all the details in javascript//

class Person {
  constructor(firstName, lastName, age, gender, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAge() {
    return this.age;
  }
  getGender() {
    return this.gender;
  }
  getEmail() {
    return this.email;
  }
  setFirstName(newFirstName) {
    this.firstName = newFirstName;
  }
  setLastName(newLastName) {
    this.lastName = newLastName;
  }
  setAge(newAge) {
    this.age = newAge;
  }
  setGender(newGender) {
    this.gender = newGender;
  }
  setEmail(newEmail) {
    this.email = newEmail;
  }
}

const Person1 = new Person("udaya", "udee", 23, "Female", "udaya123@gmail.com");
console.log(Person1.getFullName());
console.log(Person1.getAge());
console.log(Person1.getGender());
console.log(Person1.getEmail());


//  Write a class to calculate the Uber price //


class UberPriceCalculator {
  constructor(baseFare, constPerMinute, costPerMile, surgeMultiplier) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.constPerMinute = constPerMinute;
    this.surgeMultiplier = surgeMultiplier;
  }
  calculatePrice(distanceInMiles, durationInMinutes, surge = 1) {
    const surgePrice = this.surgeMultiplier * surge;
    const fare =
      this.baseFare +
      this.constPerMinute * durationInMinutes +
      this.costPerMile * distanceInMiles;
    return fare * surgePrice;
  }
}

const UberPriceCalculator1 = new UberPriceCalculator(2.5, 0.3, 1.5, 1.2);
const distance = 10;
const duration = 20;
const surgeMultiplier = 1.5;
const price = UberPriceCalculator1.calculatePrice(
  distance,
  duration,
  surgeMultiplier
);
console.log(`the uber price is $${price.toFixed(2)}`);
