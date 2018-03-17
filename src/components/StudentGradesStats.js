import React from 'react';
import PropTypes from 'prop-types';

const StudentGradesStats = ({ average, count, max, min }) => (
  <div>
    <div>Count: {count}</div>
    <div>Max: {max}</div>
    <div>Min: {min}</div>
    <div>Average: {average}</div>
  </div>
);

StudentGradesStats.propTypes = {
  average: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

StudentGradesStats.defaultProps = {
  average: 'NaN',
  count: 'NaN',
  max: 'NaN',
  min: 'NaN',
};

export default StudentGradesStats;
