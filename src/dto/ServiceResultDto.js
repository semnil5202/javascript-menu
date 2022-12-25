class ServiceResultDto {
  #foodOfWeak;

  constructor(foodOfWeak) {
    this.#foodOfWeak = foodOfWeak;
  }

  getFoodOfWeak() {
    return this.#foodOfWeak;
  }
}

module.exports = ServiceResultDto;
