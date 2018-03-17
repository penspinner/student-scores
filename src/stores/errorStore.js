import { store } from 'react-easy-state';

const errorStore = store({
  studentNameError: '',
  studentScoreError: '',
});

export default errorStore;
