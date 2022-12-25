const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('../utils/constant');

const OutputView = {
  startMent() {
    Console.print(OUTPUT.START_MENT);
  },

  resultMent() {
    Console.print(OUTPUT.RESULT_MENT);
  },

  category(category) {
    Console.print(OUTPUT.CATEGORY(category));
  },

  listResult(coach, foodList) {
    Console.print(OUTPUT.FOOD_LIST(coach, foodList));
  },

  errorMessage(error) {
    Console.print(error);
  },

  endMent() {
    Console.print(OUTPUT.END_MENT);
    Console.close();
  },
};

module.exports = OutputView;
