import { store } from 'react-easy-state';

const studentStore = store({
  name: '',
  score: '',
  namesAndScores: [],

  addNameAndScore: () => {
    studentStore.namesAndScores.push({
      name: studentStore.name,
      score: studentStore.score,
    });
  },

  clearNamesAndScores: () => {
    studentStore.namesAndScores = [];
  },

  clearNameAndScoreProps: () => {
    studentStore.name = '';
    studentStore.score = '';
  },

  sortNamesAndScores: () => {
    studentStore.namesAndScores.sort(({ name: nameA }, { name: nameB }) => {
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  },
});

export default studentStore;
