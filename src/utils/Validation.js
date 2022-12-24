const { COACH, ERROR } = require('./constant');

const Validation = {
  coachName(names) {
    names.forEach((name) => {
      if (name.length < COACH.NAME_MIN || name.length > COACH.NAME_MAX) {
        throw new Error(ERROR.COACH_NAME);
      }
    });
  },

  coachNumber(coach) {
    if (coach.length < COACH.GROUP_MIN || coach.length > COACH.GROUP_MAX) {
      throw new Error(ERROR.GROUP);
    }
  },

  notEat(input) {
    const foods = input.split(',');
    if (foods.length > COACH.NOT_EAT_MAX) throw new Error(ERROR.NOT_EAT);
  },
};

module.exports = Validation;
