const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY } = require('../utils/constant');

class Category {
  #category = CATEGORY.LIST;
  #counts = [0, 0, 0, 0, 0];
  #list = [];

  makeCategoryList() {
    while (this.#list.length !== CATEGORY.LENGTH) {
      this.categoryOfWeak();
    }
    return this.NumberToName();
  }

  categoryOfWeak() {
    const categoryNumber = this.randomGenerator();
    if (this.#list.includes(categoryNumber)) this.#counts[categoryNumber - 1] += 1;
    if (this.isAddToResults(categoryNumber)) this.#list.push(categoryNumber);
    else this.categoryOfWeak();
  }

  isAddToResults(categoryNumber) {
    let booleanResult = false;
    for (let i = 0; i < this.#counts.length; i++) {
      if (this.#counts[i] === CATEGORY.DUPLICATE && i === categoryNumber - 1) {
        booleanResult = false;
        break;
      } else {
        booleanResult = true;
      }
    }
    return booleanResult;
  }

  NumberToName() {
    const results = [];
    for (let i = 0; i < this.#list.length; i++) {
      results.push(this.#category[this.#list[i]]);
    }
    return results;
  }

  randomGenerator() {
    return Random.pickNumberInRange(CATEGORY.MIN, CATEGORY.MAX);
  }
}

module.exports = Category;
