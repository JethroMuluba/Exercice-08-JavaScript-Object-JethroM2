

//  Decommenter l'instruction suivante avant d'exécuter les tests
module.exports = {
  menu,
}

//Create an empty object
const menu = {
  //Create a _meal property
  _meal: "",
  //Create a _price property
  _price: 0,
  //Create a meal prep method
  set mealMaker(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  //create a price fixer method
  set priceFixer(priceToCheck) {
    if (typeof priceToCheck === 'number')
      return this._price = priceToCheck;
  }
};


console.log(menu);
