const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: ['block-like', 'const', 'function', 'let', 'multiline-block-like', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['block-like', 'const', 'function', 'let', 'multiline-block-like', 'var'],
        next: ['block-like', 'const', 'function', 'let', 'multiline-block-like', 'var'],
      },
    ],
    'no-mixed-operators': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-unused-prop-types': 1,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': [
      0,
      {
        required: {
          every: ['id'],
        },
      },
    ],
  },
};
