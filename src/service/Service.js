const Category = require('../model/Category');
const Food = require('../model/Food');
const Coach = require('../model/Coach');
const ServiceResultDto = require('../dto/ServiceResultDto');

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

  defineCoachFoodOfWeek() {
    const results = [];
    this.#coachLists.forEach((list) => {
      const foods = new Food(list, this.#catogoryList).foodOfWeek();
      results.push(foods);
    });
    return new ServiceResultDto(results);
  }

  defineCategoryList() {
    this.#catogoryList = new Category().makeCategoryList().getCategory();
    return this.#catogoryList;
  }
}

module.exports = Service;
