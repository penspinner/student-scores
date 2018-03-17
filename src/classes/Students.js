export default class Students {
  name = '';
  score = '';
  namesAndScores = [];

  addNameAndScore() {
    this.namesAndScores.push({ name: this.name, score: this.score });
  }

  clearNamesAndScores() {
    this.namesAndScores = [];
  }

  clearNameAndScoreProps() {
    this.name = '';
    this.score = '';
  }

  sortNamesAndScores() {
    this.namesAndScores.sort(({ name: nameA }, { name: nameB }) => {
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }
}
