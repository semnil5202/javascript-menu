const Category = require('../model/Category');
const Food = require('../model/Food');
const Coach = require('../model/Coach');

class Service {
  #catogoryList;
  #coachLists = [];

  makeCoachList(coachs) {
    coachs.forEach((coachName) => {
      this.#coachLists.push(new Coach(coachName));
    });
  }

  setCoachNotEatList(coachNumber, notEatLists) {
    this.#coachLists[coachNumber].setNotEatList(notEatLists);
  }

  defineCoachFoodOfWeak() {
    const results = [];
    this.#coachLists.forEach((list) => {
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
