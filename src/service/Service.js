const Category = require('../model/Category');
const Food = require('../model/Food');

class Service {
  #catogoryList;
  #coachNotEatList;

  defineCoachNotEatList(notEatList) {
    this.#coachNotEatList = notEatList;
  }

  defineCoachFoodOfWeak() {
    const results = [];
    this.#coachNotEatList.forEach((list) => {
      const foods = new Food(list, this.#catogoryList).foodOfWeak();
      results.push(foods);
    });
    return results;
  }

  defineCategoryList() {
    this.#catogoryList = new Category().makeCategoryList();
    return this.#catogoryList;
  }
}

module.exports = Service;
