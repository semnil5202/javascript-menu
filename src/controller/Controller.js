const InputView = require('../view/InputView');
const OuputView = require('../view/OutputView');
const { UTIL } = require('../utils/constant');

class Controller {
  #index = 0;
  #service;
  #validation;

  constructor(service, validation) {
    this.#service = service;
    this.#validation = validation;
  }

  startService() {
    OuputView.startMent();
    this.#inputCoach();
  }

  #inputCoach() {
    InputView.coach((input) => {
      this.#checkCoach(input);
    });
  }

  #checkCoach(input) {
    try {
      const coach = input.split(UTIL.SEPARATOR);
      this.#validation.coach(coach);
      this.#service.makeCoachList(coach);
      this.#checkCoachList(coach);
    } catch (error) {
      OuputView.errorMessage(error);
      this.#inputCoach();
    }
  }

  #checkCoachList(coach) {
    this.#inputNotEat(coach[this.#index], coach);
  }

  #inputNotEat(coachName, coach) {
    InputView.notEat(coachName, (input) => {
      this.#checkNotEat(input);
      if (this.#index === coach.length) this.#outputResultMent();
      else this.#checkCoachList(coach);
    });
  }

  #checkNotEat(input) {
    try {
      this.#validation.notEat(input);
      this.#service.setCoachNotEatList(this.#index, input);
      this.#index += 1;
    } catch (error) {
      OuputView.errorMessage(error);
      this.#checkCoachList();
    }
  }

  #outputResultMent() {
    OuputView.resultMent();
    this.#outputCategory();
  }

  #outputCategory() {
    const category = this.#service
      .defineCategoryList()
      .join(UTIL.SEPARATOR)
      .replace(/,/g, UTIL.TRANSLATOR);
    OuputView.category(category);
    this.#outputResult();
  }

  #outputResult() {
    const results = this.#service.defineCoachFoodOfWeek().getFoodOfWeek();
    results.forEach((list) => {
      OuputView.listResult(
        list.getCoachName(),
        list.getFood().join(UTIL.SEPARATOR).replace(/,/g, UTIL.TRANSLATOR),
      );
    });
    OuputView.endMent();
  }
}

module.exports = Controller;
