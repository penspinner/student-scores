import React from 'react';
import { view } from 'react-easy-state';

import { StudentGradesBarChart } from '../components';
import { studentStore } from '../stores';

const StudentGradesBarChartContainer = () => {
  const { namesAndScores } = studentStore;

  const { A, B, C, D, F } = namesAndScores.reduce(
    (accumulatedGradeBuckets, nameAndScore) => {
      const { score } = nameAndScore;

      if (score >= 90) {
        accumulatedGradeBuckets.A += 1;
      } else if (score >= 80) {
        accumulatedGradeBuckets.B += 1;
      } else if (score >= 70) {
        accumulatedGradeBuckets.C += 1;
      } else if (score >= 60) {
        accumulatedGradeBuckets.D += 1;
      } else {
        accumulatedGradeBuckets.F += 1;
      }

      return accumulatedGradeBuckets;
    },
    { A: 0, B: 0, C: 0, D: 0, F: 0 },
  );

  const data = [
    { x: 'A', y: A },
    { x: 'B', y: B },
    { x: 'C', y: C },
    { x: 'D', y: D },
    { x: 'F', y: F },
  ];

  return <StudentGradesBarChart data={data} />;
};

export default view(StudentGradesBarChartContainer);
