const UTIL = Object.freeze({
  SHUFFLE_LIST: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  SHUFFLE_INDEX: 0,
  SEPARATOR: ',',
  TRANSLATOR: ' | ',
  FOOD_SEPARATOR: ', ',
});

const COACH = Object.freeze({
  NAME_MIN: 2,
  NAME_MAX: 4,
  GROUP_MIN: 2,
  GROUP_MAX: 5,
  NOT_EAT_MAX: 2,
});

const SAMPLE = Object.freeze({
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
});

const CATEGORY = Object.freeze({
  LIST: {
    1: '일식',
    2: '한식',
    3: '중식',
    4: '아시안',
    5: '양식',
  },
  LENGTH: 5,
  DUPLICATE: 2,
  MIN: 1,
  MAX: 5,
});

const INPUT = Object.freeze({
  COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  COACH_NOT_EAT: (coachName) => `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
});

const OUTPUT = Object.freeze({
  START_MENT: '점심 메뉴 추천을 시작합니다.\n',
  RESULT_MENT: '\n메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  CATEGORY: (category) => `[ 카테고리 | ${category} ]`,
  FOOD_LIST: (coach, foodList) => `[ ${coach} | ${foodList} ]`,
  END_MENT: '\n추천을 완료했습니다.',
});

const ERROR = Object.freeze({
  COACH_NAME: '[ERROR] 코치 닉네임은 2~4글자 사이로만 가능합니다.',
  GROUP: '[ERROR] 코치는 2~5명과 같이 식사할 수 있습니다.',
  NOT_EAT: '[ERROR] 먹지 못하는 메뉴는 2개만 입력할 수 있습니다.',
  NOT_IN_SAMPLE: '[ERROR] 메뉴 리스트에 없는 음식을 입력할 수 없습니다.',
});

module.exports = {
  UTIL,
  COACH,
  SAMPLE,
  CATEGORY,
  INPUT,
  OUTPUT,
  ERROR,
};
