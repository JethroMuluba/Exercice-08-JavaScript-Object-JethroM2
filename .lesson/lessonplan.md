# Lesson plan

  ## Learning Objectives
  1. Javascript objects
  2. Object setters and getters (pseudo-prooperties)

  ## Corrigé
  Here is an example of an acceptable solution that passes all 10 unit tests.
```Node.js
const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
      return this._meal;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
      return this._price;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for $${this._price}!`;
    }
    else return "Meal or price was not set correctly!";
  }
};
// menu.meal = 15;
// menu.price = "lkd";
// console.log(menu);
// menu.meal = "Ratatouille";
// menu.price = 14.99;
// console.log(menu.price);
console.log(menu.todaysSpecial);

// Ne pas supprimmer la ligne suivante
module.exports = { menu };
```

  