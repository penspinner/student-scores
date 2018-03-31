import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { BarChart } from 'react-easy-chart';

const StudentGradesBarChart = ({ data }) => (
  <div>
    <h3>Student Grades</h3>
    <BarChart axes data={data} />
  </div>
);

StudentGradesBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ x: PropTypes.any, y: PropTypes.number })),
};

StudentGradesBarChart.defaultProps = {
  data: [],
};

export default view(StudentGradesBarChart);
