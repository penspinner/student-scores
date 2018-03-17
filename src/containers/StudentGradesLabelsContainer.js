import React from 'react';
import { view } from 'react-easy-state';

import { StudentGradesLabels } from '../components';
import { studentStore } from '../stores';

const handleLabelRemove = (event, object) => {
  studentStore.namesAndScores.splice(object.index, 1);
};

const StudentScoreFieldsContainer = () => {
  const { namesAndScores } = studentStore;

  return <StudentGradesLabels namesAndScores={namesAndScores} onLabelRemove={handleLabelRemove} />;
};

export default view(StudentScoreFieldsContainer);
