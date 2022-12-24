const InputView = require('../view/InputView');
const OuputView = require('../view/OutputView');
const Validation = require('../utils/Validation');

class Controller {
  #index = 0;
  #coachs;
  #service;

  constructor(service) {
    this.#service = service;
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
      this.#coachs = input.split(',');
      Validation.coachName(this.#coachs);
      Validation.coachNumber(this.#coachs);
      this.#service.makeCoachList(this.#coachs);
      this.#checkCoachList();
    } catch (error) {
      OuputView.errorMessage(error);
      this.#inputCoach();
    }
  }

  #checkCoachList() {
    this.#inputNotEat(this.#coachs[this.#index]);
  }

  #inputNotEat(coachName) {
    InputView.notEat(coachName, (input) => {
      this.#checkNotEat(input);
      if (this.#index === this.#coachs.length) this.#deliverNotEatList();
      else this.#checkCoachList();
    });
  }

  #checkNotEat(input) {
    try {
      Validation.notEat(input);
      this.#service.setCoachNotEatList(this.#index, input);
      this.#index += 1;
    } catch (error) {
      OuputView.errorMessage(error);
      this.#checkCoachList();
    }
  }

  #deliverNotEatList() {
    this.#outputResultMent();
  }

  #outputResultMent() {
    OuputView.resultMent();
    this.#outputCategory();
  }

  #outputCategory() {
    const category = this.#service.defineCategoryList().join(',').replace(/,/g, ' | ');
    OuputView.category(category);
    this.#outputResult();
  }

  #outputResult() {
    const results = this.#service.defineCoachFoodOfWeak();
    results.forEach((list) => {
      OuputView.listResult(list.coach, list.result.join(',').replace(/,/g, ' | '));
    });
    OuputView.endMent();
  }
}

module.exports = Controller;
