const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY } = require('../utils/constant');
const ModelResultDto = require('../dto/ModelResultDto');

class Category {
  #category = CATEGORY.LIST;
  #list = [];

  makeCategoryList() {
    while (this.#list.length !== CATEGORY.LENGTH) {
      this.categoryOfWeak();
    }
    return new ModelResultDto(null, null, this.NumberToName(), null);
  }

  categoryOfWeak() {
    const categoryNumber = this.randomGenerator();
    if (this.isAddToResults(categoryNumber)) this.#list.push(categoryNumber);
    else this.categoryOfWeak();
  }

  isAddToResults(categoryNumber) {
    if (this.#list.filter((category) => category === categoryNumber).length < 2) {
      return true;
    }
    return false;
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
