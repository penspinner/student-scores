import React from 'react';
import { view } from 'react-easy-state';

import { StudentGradesStats } from '../components/';
import { studentStore } from '../stores';

const StudentGradesStatsContainer = () => {
  const { namesAndScores } = studentStore;

  const average =
    namesAndScores.reduce((total, { score }) => total + score, 0) / namesAndScores.length;
  const count = namesAndScores.length;
  const max = Math.max(...namesAndScores.map(({ score }) => score));
  const min = Math.min(...namesAndScores.map(({ score }) => score));

  return <StudentGradesStats average={average} count={count} max={max} min={min} />;
};

export default view(StudentGradesStatsContainer);
