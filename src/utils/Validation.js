const { UTIL, SAMPLE, COACH, ERROR } = require('./constant');

class Validation {
  static #instance;

  constructor() {
    if (Validation.#instance !== undefined) return Validation.#instance;
    Validation.#instance = this;
  }

  coach(coachs) {
    coachs.forEach((name) => {
      if (name.length < COACH.NAME_MIN || name.length > COACH.NAME_MAX) {
        throw new Error(ERROR.COACH_NAME);
      }
    });
    if (coachs.length < COACH.GROUP_MIN || coachs.length > COACH.GROUP_MAX) {
      throw new Error(ERROR.GROUP);
    }
  }

  notEat(input) {
    const foods = input.split(UTIL.SEPARATOR);
    if (foods.length > COACH.NOT_EAT_MAX) throw new Error(ERROR.NOT_EAT);
    if (!this.#foodsString(foods)) throw new Error('E');
  }

  #foodsString(foods) {
    for (let food of foods) {
      if (!this.#checkSample(food)) return false;
    }
    return true;
  }

  #checkSample(foods) {
    for (let category in SAMPLE) {
      if (SAMPLE[category].split(UTIL.FOOD_SEPARATOR).includes(foods)) return true;
    }
    return false;
  }
}

module.exports = Validation;
