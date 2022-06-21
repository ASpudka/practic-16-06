"use strict";

function User(fname, sname, age) {
  this.fname = fname;
  this.sname = sname;
  this.age = age;
}

function UserPrototype() {
  this.getFullName = () => `${this.fname} ${this.sname}`;
}
User.prototype = new UserPrototype();

const user = new User("Elon", "Musk", 50);
console.log(user);

// создаем с помощью класса
class UserClass {
  #fname;
  #sname;
  constructor(fname, sname, age) {
    this.#fname = fname;
    this.#sname = sname;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("Age must be number");
    }
    if (age < 0 || age > 150) {
      throw new RangeError("Age must be 0..150");
    }
    this._age = age;
  }
  getFullName() {
    return `${this.#fname} ${this.#sname}`;
  }
  isAdult = (AGE_ADULT = 18) => this._age >= AGE_ADULT;
}

class WorckerClass {
  constructor(fname, sname, day, rate) {
    this.fname = fname;
    this.sname = sname;
    this.day = day;
    this.rate = rate;
  }
  get day() {
    return this._day;
  }
  set day(age) {
    if (typeof day !== "number") {
      throw new TypeError("Age must be number");
    }
    if (day < 0 || day > 31) {
      throw new RangeError("Age must be 0..31");
    }
    this.__day = day;
  }
  getSalary = () => this._day * this.rate;
}

const userNew = new UserClass("Tom", "Musk", 25);
console.log(userNew.isAdult());

