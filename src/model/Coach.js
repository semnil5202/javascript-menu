class Coach {
  #name;
  #notEatLists;

  constructor(name) {
    this.#name = name;
  }

  setNotEatList(notEatLists) {
    this.#notEatLists = notEatLists;
  }

  getCoachName() {
    return this.#name;
  }

  getNotEatList() {
    return this.#notEatLists;
  }
}

module.exports = Coach;
