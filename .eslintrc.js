module.exports = require('@sumup/foundry/eslint')(
  {
    language: 'TypeScript',
    environments: ['Node'],
    frameworks: ['Jest'],
    openSource: true,
  },
  {
    rules: {
      'no-process-exit': 'off',
    },
  },
);
