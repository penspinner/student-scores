import React from 'react';
import { view } from 'react-easy-state';

import { StudentFields } from '../components';
import { studentStore, errorStore } from '../stores';

const handleStudentInputChange = (e) => {
  const { name, type, value } = e.target;

  if (type === 'number') {
    studentStore[name] = parseFloat(value);
  } else {
    studentStore[name] = value;
  }
};

const handleAddScoreButtonClick = () => {
  if (!studentStore.name) {
    errorStore.studentNameError = 'Name field cannot be empty.';

    return;
  } else if (errorStore.studentNameError) {
    errorStore.studentNameError = '';
  }

  if (
    !Number.isFinite(studentStore.score) ||
    (studentStore.score > 100 || studentStore.score < 0)
  ) {
    errorStore.studentScoreError = 'Score must be 0-100.';

    return;
  } else if (errorStore.studentScoreError) {
    errorStore.studentScoreError = '';
  }

  studentStore.addNameAndScore();
  studentStore.sortNamesAndScores();
  studentStore.clearNameAndScoreProps();
};

const handleClearScoresButtonClick = () => {
  studentStore.clearNamesAndScores();
};

const StudentFieldsContainer = () => {
  const { name: studentName, score: studentScore } = studentStore;
  const { studentNameError, studentScoreError } = errorStore;

  return (
    <StudentFields
      onAddScoreButtonClick={handleAddScoreButtonClick}
      onClearScoreButtonClick={handleClearScoresButtonClick}
      onStudentInputChange={handleStudentInputChange}
      studentName={studentName}
      studentNameError={studentNameError}
      studentScore={studentScore}
      studentScoreError={studentScoreError}
    />
  );
};

export default view(StudentFieldsContainer);
