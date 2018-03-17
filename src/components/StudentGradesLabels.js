import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Label } from 'semantic-ui-react';

const StudentGradesLabels = ({ namesAndScores, onLabelRemove }) => (
  <div style={{ overflow: 'auto' }}>
    {namesAndScores.map(({ name, score }, index) => (
      <Label
        content={
          <Fragment>
            {name}
            <Label.Detail>{score}</Label.Detail>
          </Fragment>
        }
        key={index}
        index={index}
        onRemove={onLabelRemove}
      />
    ))}
  </div>
);

StudentGradesLabels.propTypes = {
  namesAndScores: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
  })),
  onLabelRemove: PropTypes.func,
};

StudentGradesLabels.defaultProps = {
  namesAndScores: [],
  onLabelRemove: () => {},
};

export default StudentGradesLabels;
