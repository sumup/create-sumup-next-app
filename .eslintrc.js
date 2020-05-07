module.exports = require('@sumup/foundry/eslint')(
  {
    language: 'TypeScript',
    environments: ['Browser'],
    frameworks: ['Jest', 'Emotion', 'React'],
    openSource: false,
  },
  {
    overrides: [
      {
        files: ['template/**/*'],
        rules: {
          'import/no-unresolved': 'off',
        },
      },
    ],
  },
);
