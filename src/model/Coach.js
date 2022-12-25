const ModelResultDto = require('../dto/ModelResultDto');

class Coach {
  #name;
  #notEatLists;

  constructor(name) {
    this.#name = name;
  }

  setNotEatList(notEatLists) {
    this.#notEatLists = notEatLists;
  }

  sendToDto() {
    return new ModelResultDto(this.#name, this.#notEatLists, null, null);
  }
}

module.exports = Coach;
