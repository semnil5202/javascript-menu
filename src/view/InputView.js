const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('../utils/constant');

const InputView = {
  coach(callback) {
    Console.readLine(INPUT.COACH_NAME, callback);
  },

  notEat(coachName, callback) {
    Console.readLine(INPUT.COACH_NOT_EAT(coachName), callback);
  },
};

module.exports = InputView;
