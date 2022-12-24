class Coach {
  #name;
  #notEatLists;

  constructor(name) {
    this.#name = name;
  }

  setNotEatList(notEatLists) {
    this.#notEatLists = notEatLists;
  }
}

module.exports = Coach;
