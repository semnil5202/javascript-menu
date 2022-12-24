const { Random } = require('@woowacourse/mission-utils');
const { UTIL, SAMPLE } = require('../utils/constant');

class Food {
  #coachName;
  #notEatList;
  #categoryList;
  #results = [];

  constructor(coach, categoryList) {
    this.#coachName = coach.getCoachName();
    this.#notEatList = coach.getNotEatList().split(UTIL.SEPARATOR);
    this.#categoryList = categoryList;
  }

  foodOfWeak() {
    this.#categoryList.forEach((category) => {
      const foodList = this.#makeFoodList(category);
      this.#recommendFood(foodList);
    });
    return { coach: this.#coachName, result: this.#results };
  }

  #recommendFood(foodList) {
    const recommend = foodList[this.#shuffleNumber() - 1];
    if (this.#isNotEatFood(recommend)) this.#recommendFood(foodList);
    else this.#checkDuplicateMenu(recommend, foodList);
  }

  #checkDuplicateMenu(recommend, foodList) {
    if (this.#results.includes(recommend)) this.#recommendFood(foodList);
    if (!this.#results.includes(recommend)) this.#results.push(recommend);
  }

  #makeFoodList(category) {
    const foodList = SAMPLE[category].split(UTIL.FOOD_SEPARATOR);
    return foodList;
  }

  #shuffleNumber() {
    const shuffleList = UTIL.SHUFFLE_LIST;
    return Random.shuffle(shuffleList)[UTIL.SHUFFLE_INDEX];
  }

  #isNotEatFood(recommend) {
    if (this.#notEatList.includes(recommend)) return true;
    return false;
  }
}

module.exports = Food;
