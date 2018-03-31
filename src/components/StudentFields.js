import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

import { Button, Input, Label, Segment } from 'semantic-ui-react';

const StudentFields = ({
  onAddScoreButtonClick,
  onClearScoreButtonClick,
  onStudentInputChange,
  studentName,
  studentNameError,
  studentScore,
  studentScoreError,
}) => (
  <Fragment>
    <Segment.Group>
      <Segment>
        <Input
          label="Name"
          name="name"
          onChange={onStudentInputChange}
          placeholder="Student name"
          value={studentName}
        />

        {studentNameError && (
          <Label basic color="red" pointing="left">
            {studentNameError}
          </Label>
        )}
      </Segment>

      <Segment>
        <Input
          label="Score"
          name="score"
          onChange={onStudentInputChange}
          placeholder="Student score (0 - 100)"
          type="number"
          value={studentScore}
        />

        {studentScoreError && (
          <Label basic color="red" pointing="left">
            {studentScoreError}
          </Label>
        )}
      </Segment>
    </Segment.Group>

    <div>
      <Button primary onClick={onAddScoreButtonClick}>
        Add Score
      </Button>

      <Button secondary onClick={onClearScoreButtonClick}>
        Clear Scores
      </Button>
    </div>
  </Fragment>
);

StudentFields.propTypes = {
  onAddScoreButtonClick: PropTypes.func,
  onClearScoreButtonClick: PropTypes.func,
  onStudentInputChange: PropTypes.func,
  studentName: PropTypes.string,
  studentNameError: PropTypes.string,
  studentScore: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  studentScoreError: PropTypes.string,
};

StudentFields.defaultProps = {
  onAddScoreButtonClick: () => {},
  onClearScoreButtonClick: () => {},
  onStudentInputChange: () => {},
  studentName: '',
  studentNameError: '',
  studentScore: '',
  studentScoreError: '',
};

export default view(StudentFields);
