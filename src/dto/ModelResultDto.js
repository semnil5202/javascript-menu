class ModelResultDto {
  #coachName;
  #notEatList;
  #category;
  #Food;

  constructor(coachName, notEatList, category, Food) {
    this.#coachName = coachName;
    this.#notEatList = notEatList;
    this.#category = category;
    this.#Food = Food;
  }

  getCoachName() {
    return this.#coachName;
  }

  getNotEatList() {
    return this.#notEatList;
  }

  getCategory() {
    return this.#category;
  }

  getFood() {
    return this.#Food;
  }
}

module.exports = ModelResultDto;
