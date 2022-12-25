class ServiceResultDto {
  #foodOfWeek;

  constructor(foodOfWeek) {
    this.#foodOfWeek = foodOfWeek;
  }

  getFoodOfWeek() {
    return this.#foodOfWeek;
  }
}

module.exports = ServiceResultDto;
